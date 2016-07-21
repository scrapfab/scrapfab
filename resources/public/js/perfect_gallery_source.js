function imageInfo(img){
  let w = img.width;
  let h = img.height;

  return {
    element: img,
    width:   w,
    height:  h,
    aspect:  w / h
  };
}

function imageWeight({aspect}){ return parseInt(aspect * 100); }

function findIdealRowCount([idealWidth, idealHeight], images){
  return Math.round(_.reduce(images, (summedWidth, {width, height}) => {
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

    for(let {element, width, height} of row){
      element.width = width * scaleFactor;
      element.height = height * scaleFactor;
      rowElement.appendChild(element);
    }

    container.appendChild(rowElement);
  }

  galleryElement.removeAll();
  galleryElement.appendChild(container);
}

function selectImage(images, weight){
  let index = _.findIndex(images, img => imageWeight(img) == weight );
  return _.pullAt(images, [index])[0];
}

function preload(url){
  var img = document.createElement("img");

  var promise = new Promise(function(resolve, reject){
    img.addEventListener("load", function(){
      resolve(img);
    })
  });

  img.src = url;

  return promise;
}

function perfect_gallery(element){
    var photoURLs = element.getAttribute("data-photos").split(" ");

    Promise.all(_.map(photoURLs, preload)).then(function(imgs){
      var images = _.map(imgs, imageInfo);
      var weights = _.map(images, imageWeight);

      var rowWidth = element.offsetWidth;
      var rowHeight = window.innerHeight / 2;

      var rows = findIdealRowCount([rowWidth, rowHeight], images);

      var layout = linear_partition(weights, rows).map((part) => {
        return part.map((weight) => {
          var image = selectImage(images, weight);
          var scaleFactor = rowHeight / image.height;
          image.width = Math.floor(image.width * scaleFactor);
          image.height = Math.floor(image.height * scaleFactor);
          return image;
        });
      });

      render(element, rowWidth, layout);
    });
}

for( let gallery of document.querySelectorAll(".gallery") ){
  perfect_gallery(gallery);
}
