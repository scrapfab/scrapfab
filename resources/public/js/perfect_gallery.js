"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function imageInfo(img) {
  var w = img.width;
  var h = img.height;

  return {
    element: img,
    width: w,
    height: h,
    aspect: w / h
  };
}

function imageWeight(_ref) {
  var aspect = _ref.aspect;
  return parseInt(aspect * 100);
}

function findIdealRowCount(_ref2, images) {
  var _ref3 = _slicedToArray(_ref2, 2);

  var idealWidth = _ref3[0];
  var idealHeight = _ref3[1];

  return Math.round(_.reduce(images, function (summedWidth, _ref4) {
    var width = _ref4.width;
    var height = _ref4.height;

    return summedWidth + width * idealHeight / height;
  }, 0) / idealWidth);
}

Element.prototype.removeAll = function () {
  while (this.firstChild) {
    this.removeChild(this.firstChild);
  }
  return this;
};

var sumWidth = function sumWidth(row) {
  return _.reduce(row, function (total, _ref5) {
    var width = _ref5.width;
    return total + width;
  }, 0);
};

var render = function render(galleryElement, rowWidth, layout) {
  var container = document.createElement("div");

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = layout[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var row = _step.value;

      var rowElement = document.createElement("div");
      var scaleFactor = rowWidth / sumWidth(row);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = row[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _step2.value;
          var element = _step2$value.element;
          var width = _step2$value.width;
          var height = _step2$value.height;

          element.width = width * scaleFactor;
          element.height = height * scaleFactor;
          rowElement.appendChild(element);
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

      container.appendChild(rowElement);
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

  galleryElement.removeAll();
  galleryElement.appendChild(container);
};

function selectImage(images, weight) {
  var index = _.findIndex(images, function (img) {
    return imageWeight(img) == weight;
  });
  return _.pullAt(images, [index])[0];
}

function preload(url) {
  var img = document.createElement("img");

  var promise = new Promise(function (resolve, reject) {
    img.addEventListener("load", function () {
      resolve(img);
    });
  });

  img.src = url;

  return promise;
}

function perfect_gallery(element) {
  var photoURLs = element.getAttribute("data-photos").split(" ");

  Promise.all(_.map(photoURLs, preload)).then(function (imgs) {
    var images = _.map(imgs, imageInfo);
    var weights = _.map(images, imageWeight);

    var rowWidth = element.offsetWidth;
    var rowHeight = window.innerHeight / 2;

    var rows = findIdealRowCount([rowWidth, rowHeight], images);

    var layout = linear_partition(weights, rows).map(function (part) {
      return part.map(function (weight) {
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

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = document.querySelectorAll(".gallery")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var gallery = _step3.value;

    perfect_gallery(gallery);
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}
