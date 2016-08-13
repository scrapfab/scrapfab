function findIdealRowCount([idealWidth, idealHeight], images){
  return Math.round(_.reduce(images, (summedWidth, [url, {width, height}]) => {
    return summedWidth + width * idealHeight / height;
  }, 0) / idealWidth);
}

Element.prototype.removeAll = function () {
  while (this.firstChild) { this.removeChild(this.firstChild); }
  return this;
};

let sumWidth = row => _.reduce(row, ((total, {width}) => total + width), 0)

let render = (galleryElement, rowWidth, layout) => {
  let container = document.createElement("div");

  for(let row of layout){
    var rowElement = document.createElement("div");
    var scaleFactor = rowWidth / sumWidth(row);

    rowElement.className = "gallery-row";

    for(let {url, width, height} of row){
      var element = document.createElement("div");
      let img = document.createElement("img");

      img.src = "img/" + url;
      img.className = "gallery-image";

      element.className = "gallery-cell";
      element.style.width = (width * scaleFactor) + "px";
      element.style.height = (height * scaleFactor) + "px";
      element.appendChild(img);

      rowElement.appendChild(element);
    }

    container.appendChild(rowElement);
  }

  galleryElement.removeAll();
  galleryElement.appendChild(container);
}

function weight(aspect){ return parseInt(aspect * 100); }

function selectMedia(media, w){
  let index = _.findIndex(media, (([url, {aspect}]) => {
    console.log(aspect, w);
    return weight(aspect) == w
  }));

  return _.pullAt(media, [index])[0];
}

function perfect_gallery(element){
    var media = _.toPairs(JSON.parse(element.getAttribute("data-photos")));
    var rowWidth = element.offsetWidth;
    var rowHeight = window.innerHeight / 2;

    var rows = findIdealRowCount([rowWidth, rowHeight], media);

    var partition = linear_partition(_.map(media, ([url, {aspect}]) => weight(aspect)), rows)

    var layout = partition.map((part) => {
      return part.map((wt) => {
        var [url, {width, height, title}] = selectMedia(media, wt);
        var scale = rowHeight / height;
        return {
          width: width * scale,
          height: height * scale,
          url: url,
          title: title}
      });
    });

    render(element, rowWidth, layout);
}

for( let gallery of document.querySelectorAll(".gallery") ){
  perfect_gallery(gallery);
}
