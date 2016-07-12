"use strict";

// given an HTMLElement image element, return its
// width and height
var getImageDimensions = function getImageDimensions(img) {
    return [img.offsetWidth, img.offsetHeight];
};

// given an ideal gallery row height and dimensions for an image,
// scale the dimensions so that the image fits the row
function fitDimensionsToRow(rowHeight, dim) {
    var factor = rowHeight / dim[1];
    return [dim[0] * factor, dim[1] * factor];
}

// given the dimensions for an image, return it's aspect ratio.
var getNormalizedRatios = function getNormalizedRatios(dim) {
    return parseInt(dim[0] / dim[1] * 100);
};

// given the width of the gallery element and an array of image
// dimensions, return the number of rows in the gallery.
var findRowCount = function findRowCount(galleryWidth, dims) {
    var summedWidth = _.reduce(dims, function (width, dim) {
        return width + dim[0];
    }, 0);
    return Math.round(summedWidth / galleryWidth);
};

Element.prototype.removeAll = function () {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
    return this;
};

function gallery(element) {
    var images = Array.prototype.slice.call(element.children);
    var sizes = _.map(images, getImageDimensions);
    var aspects = _.map(sizes, getNormalizedRatios);

    var idealRowHeight = parseInt(window.innerHeight / 2);
    var idealRowWidth = element.offsetWidth;

    var idealSizes = _.map(sizes, _.partial(fitDimensionsToRow, idealRowHeight));
    var rowCount = findRowCount(idealRowWidth, idealSizes);

    var newGallery = document.createElement("div");

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = linear_partition(aspects, rowCount)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var partition = _step.value;


            var imageMaps = _.map(partition, function (aspect) {
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

            var rowWidth = _.reduce(imageMaps, function (width, img) {
                return width + img.width;
            }, 0);
            var scaleFactor = idealRowWidth / rowWidth;

            var rowElement = document.createElement("div");

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = imageMaps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var img = _step2.value;

                    var image = img.image;
                    image.width = img.width * scaleFactor;
                    image.height = img.height * scaleFactor;
                    rowElement.appendChild(image);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            newGallery.appendChild(rowElement);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    element.removeAll();
    element.appendChild(newGallery);
}
