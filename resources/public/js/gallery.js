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
    return dim[0] / dim[1] * 100;
}

// given the width of the gallery element and an array of image
// dimensions, return the number of rows in the gallery.
function findRowCount( galleryWidth, dims ) {
    return Math.floor( _.reduce(dims, function(width, dim){
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

    var idealRowHeight = window.innerHeight / 2;
    var idealRowWidth = element.offsetWidth;

    var idealSizes = _.map(sizes, _.partial(fitDimensionsToRow, idealRowHeight));
    var rowCount = findRowCount(idealRowWidth, idealSizes);

    var newGallery = document.createElement("div");

    console.log(idealSizes);

    var partitions = linear_partition(aspects, rowCount);

    console.log(partitions);

    for( var partition of partitions ){

        var rowImages = _.map(partition, function(aspect){
           var index = _.indexOf(aspects, aspect);

           _.pullAt(aspects, [index]);

           var image = _.pullAt(images, [index])[0];
           var dims = _.pullAt(idealSizes, [index])[0];

           image.width = dims[0];
           image.height = dims[1];

           return image;
        });

        var rowElement = document.createElement("div");

        for( var image of rowImages ) {
            rowElement.appendChild(image);
        }

        newGallery.appendChild(rowElement);
    }

    console.log(newGallery);

    element.removeAll();
    element.appendChild(newGallery);
}