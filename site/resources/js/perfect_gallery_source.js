function findIdealRowCount([idealWidth, idealHeight], images){
  return Math.round(_.reduce(images, (summedWidth, [url, {width, height}]) => {
    return summedWidth + width * idealHeight / height;
  }, 0) / idealWidth);
}

let sumWidth = row => _.reduce(row, ((total, [url, {width}]) => total + width), 0)

let render = (galleryElement, rowWidth, layout) => {
  let container = document.createElement("div");

  for(let row of layout){
    let rowElement = document.createElement("div");
    let summedRatios = _.reduce(row, ((s, [url, {aspect}]) => s + aspect), 0)

    rowElement.className = "gallery-row";

    for(let [url, {width, height, aspect}] of row){
      let element = document.createElement("div");
      let img = document.createElement("img");

      img.src = "img/" + url;
      img.className = "gallery-image";

      element.className = "gallery-cell";
      element.style.width = parseInt(rowWidth / summedRatios * aspect) + "px";
      element.style.height = parseInt(rowWidth / summedRatios) + "px";
      element.appendChild(img);

      rowElement.appendChild(element);
    }

    container.appendChild(rowElement);
  }

  galleryElement.appendChild(container);
}

function weight([url, {aspect}]){ return parseInt(aspect * 100); }

function weight_cache(media){
  var cache = _.groupBy(media, weight);

  return ((w) => {
    let item = cache[w][0];
    cache[w] = _.drop(cache[w]);
    return item;
  });
}

function perfect_layout(gallery_width, gallery_height, media){
  let row_width = gallery_width;
  let row_height = gallery_height / 2;

  let rows = findIdealRowCount([row_width, row_height], media);
  let partition = linear_partition(_.map(media, weight), rows);

  let cache = weight_cache(media);

  return partition.map((part) => {
    return part.map((w) => {
      let item = cache(w);
      let [url, m] = item;
      let scale = row_height / m.height;

      return [url, _.merge(m, {
        width: (m.width * scale),
        height: (m.height * scale)
      })];
    })
  })
}

function request_gallery(id){
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.addEventListener("load", function(){ resolve(JSON.parse(this.responseText)) });
    req.open("GET", "media/" + id + ".json");
    req.send();
  })
}

function perfect_gallery(element, gallery_id){
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }

  request_gallery(gallery_id).then((media) => {
    var gallery_width = element.getBoundingClientRect().width;
    var gallery_height = window.innerHeight;
    var layout = perfect_layout(gallery_width, gallery_height, media);

    render(element, gallery_width, layout);
  });
}

function set_hash(hash){
  if(history.pushState) {
    history.pushState(null, null, hash);
  } else {
    window.location.hash = hash;
  }
}

document.addEventListener("click", function(e){
  if( /gallery-menu-link/.test(e.target.className) ){
    e.preventDefault();
    e.stopPropagation();
    set_hash(e.target.getAttribute("href"))
    init();
  }
});

function init(){
  let id = window.location.hash ? window.location.hash.substring(1) : "all";
  let gal = document.querySelectorAll(".gallery")[0];
  perfect_gallery(gal, id);
}

init()