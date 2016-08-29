/*
---------------------------------------
---- Layout
---------------------------------------
*/

function findIdealRowCount([idealWidth, idealHeight], images){
  return Math.round(_.reduce(images, (summedWidth, [url, {width, height}]) => {
    return summedWidth + width * idealHeight / height;
  }, 0) / idealWidth);
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

/*
---------------------------------------
---- Rendering
---------------------------------------
*/

function createCell(width, height){
  return $(`<div class="gallery-cell"
                 style="width: ${width}px; height ${height}px;">
            </div>`);
}

function createImage(name, title, width, height){
  let img = $(`<img class="gallery-image" data-loading=true>`)
  let gallery_url = imageURL(name, width);
  let view_url = `img/${breakpoints.length - 1}/${name}`;

  img
    .on("load", (() => img.removeAttr("data-loading")))
    .on("click", (() => {
      $.colorbox({
        href: view_url,
        transition: "fade",
        maxWidth: "90%",
        maxHeight: "90%",
        opacity: 0.95,
        title: (() => title)
      });
    }))
    .attr("src", gallery_url)
    .css("width", width)
    .css("height", height)

  return img;
}

let breakpoints = [320, 480, 768, 1024, 1920];

function imageURL(name, width){
  for( let idx in breakpoints ){
    if(width < breakpoints[idx]){ return `img/${idx}/${name}`}
  }
}

$(document).on("cbox_complete", ((e) => {
  console.log("resizing caption");
  let $caption = $("#cboxTitle");
  let size = $caption.outerHeight();
  $("#cboxTitle").css("top", `-${size}px`);
  $("#cboxContent").css("margin-top", `${size}px`);
}));

let render = (galleryElement, rowWidth, layout, annotate) => {
  let $container = $("<div></div>");

  for(let row of layout){
    let $row = $('<div class="gallery-row"></div>');
    let summedRatios = _.reduce(row, ((s, [url, {aspect}]) => s + aspect), 0)

    for(let [name, {aspect, data}] of row){
      let width = parseInt(rowWidth / summedRatios * aspect);
      let height = parseInt( rowWidth / summedRatios );

      $row.append(
        createCell(width, height).append(createImage(name, annotate(data), width, height))
      );
    }

    $container.append($row);
  }

  $(galleryElement).append($container);
}

/*
---------------------------------------
---- Network
---------------------------------------
*/

function request_gallery(id){
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.addEventListener("load", function(){ resolve(JSON.parse(this.responseText)) });
    req.open("GET", "media/" + id + ".json");
    req.send();
  })
}

function creditWebsite(website){
  return website ? `<a target="_blank" href="http://${website}">${website}</a>` : "";
}

function photoCredit(credit){
  if(credit){
    let {author, website} = credit;

    return `
      <div class='photo-credit'>
        Photo by
        <span>${author}</span>
        ${creditWebsite(website)}
      </div>
    `
  }

  return "";
}

function annotatePhoto({title, desc, credit}){
  return $(`
    <div>
      <h2 class="photo-title">${title}</h2>
      <span>${desc}</span>
      ${photoCredit(credit)}
    </div>
  `)
}

function perfect_gallery(element, gallery_id){
  var clone = element.cloneNode(false);

  $(element).on("transitionend", ((e) => {
    if(e.target.className == "gallery"){
      request_gallery(gallery_id).then((media) => {
        $(e.target).replaceWith($(clone));

        var gallery_width = clone.getBoundingClientRect().width;
        var gallery_height = window.innerHeight;
        var layout = perfect_layout(gallery_width, gallery_height, media);

        render(clone, gallery_width, layout, annotatePhoto);
      });
    }
  }));

  element.setAttribute("data-loading", true);
}

function set_hash(hash){
  if(history.pushState) {
    history.pushState(null, null, hash);
  } else {
    window.location.hash = hash;
  }
}

$(document).on("click", ".gallery-menu-link", ((e) => {
  e.preventDefault();
  e.stopPropagation();

  set_hash(e.target.getAttribute("href"))
  $(".pure-menu-selected").removeClass("pure-menu-selected");

  if($(e.target).hasClass("pure-menu-heading")){
    $(e.target).addClass("pure-menu-selected");
  } else {
    $(e.target).parent().addClass("pure-menu-selected");
  }

  init();
}));

function toggleElement(target){
  if( $(target).hasClass("custom-toggle") ){
    return $(target);
  } else {
    return $(target).parents(".custom-toggle");
  }
}

function showMenu(target){
  $(".gallery-menu").removeClass("pure-menu-horizontal")
  $(".gallery-menu").show();
  toggleElement(target).addClass("open");
}

function hideMenu(target){
  $(".gallery-menu").hide()
  $(".gallery-menu").addClass("pure-menu-horizontal")
  toggleElement(target).removeClass("open");
}

$(document).on("click touchstart", ".custom-toggle", ((e) => {
  e.preventDefault();
  showMenu(e.target);
}))

$(document).on("click touchstart", ".custom-toggle.open", ((e) => {
  e.preventDefault();
  hideMenu(e.target);
}))

function init(){
  let id = window.location.hash ? window.location.hash.substring(1) : "all";
  let $element = $(`a.gallery-menu-link[href="#${id}"]`)

  if( $element.hasClass("pure-menu-heading") ){
    $element.addClass("pure-menu-selected");
  } else {
    $element.parent().addClass("pure-menu-selected");
  }

  let gal = document.querySelectorAll(".gallery")[0];
  perfect_gallery(gal, id);

  if( $(".custom-toggle.open").length > 0 ){
    hideMenu($(".custom-toggle.open"));
  }
}

function menuScrollTop(){
  return $(".gallery").offset().top - $(".responsive-menu").outerHeight();
}

function menuScrollBottom(){
  return $(".gallery").offset().top + $(".gallery").outerHeight();
}

function carryHeader($header, $content){
  $header.fixedsticky();
}

carryHeader( $(".responsive-menu"), $(".gallery") );

init()
