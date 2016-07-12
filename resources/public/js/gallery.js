// given an HTMLElement image element, return its
// width and height
function getImageDimensions( img ){
    return [img.offsetWidth, img.offsetHeight];
}

// given an ideal gallery row height and dimensions for an image,
// scale the dimensions so that the image fits the row
function fitDimensionsToRow( rowHeight, dim ){
    var factor = rowHeight / dim[1];
    return [dim[0] * factor, dim[1] * factor];
}

// given the dimensions for an image, return it's aspect ratio.
function getNormalizedRatios(dim){
    return parseInt( dim[0] / dim[1] * 100 );
}

// given the width of the gallery element and an array of image
// dimensions, return the number of rows in the gallery.
function findRowCount( galleryWidth, dims ) {
    return Math.round( _.reduce(dims, function(width, dim){
        return width + dim[0];
    }, 0) / galleryWidth );
}

Element.prototype.removeAll = function () {
  while (this.firstChild) { this.removeChild(this.firstChild); }
  return this;
};

function gallery( element ){
    var images = Array.prototype.slice.call(element.children);
    var sizes = _.map(images, getImageDimensions);
    var aspects = _.map(sizes, getNormalizedRatios);

    var idealRowHeight = parseInt(window.innerHeight / 2);
    var idealRowWidth = element.offsetWidth;

    var idealSizes = _.map(sizes, _.partial(fitDimensionsToRow, idealRowHeight));
    var rowCount = findRowCount(idealRowWidth, idealSizes);

    var newGallery = document.createElement("div");

    console.log(aspects);
    console.log(rowCount);

    for( var partition of linear_partition(aspects, rowCount) ){

        var imageMaps = _.map(partition, function(aspect){
           var index = _.indexOf(aspects, aspect);

           _.pullAt(aspects, [index]);

           var image = _.pullAt(images, [index])[0];
           var dims = _.pullAt(idealSizes, [index])[0];


           return {
            image: image,
            width: dims[0],
            height: dims[1]
           };
        });

        var rowWidth = _.reduce(imageMaps, function(width, img){ return width + img.width; }, 0);
        var scaleFactor = idealRowWidth / rowWidth;

        var rowElement = document.createElement("div");

        for( var img of imageMaps ) {
            var image = img.image;
            image.width = img.width * scaleFactor;
            image.height = img.height * scaleFactor;
            rowElement.appendChild(image);
        }

        newGallery.appendChild(rowElement);
    }

    element.removeAll();
    element.appendChild(newGallery);
}