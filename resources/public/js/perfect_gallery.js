"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function findIdealRowCount(_ref, images) {
  var _ref2 = _slicedToArray(_ref, 2);

  var idealWidth = _ref2[0];
  var idealHeight = _ref2[1];

  return Math.round(_.reduce(images, function (summedWidth, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2);

    var url = _ref4[0];
    var _ref4$ = _ref4[1];
    var width = _ref4$.width;
    var height = _ref4$.height;

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

      rowElement.className = "gallery-row";

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = row[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _step2.value;
          var url = _step2$value.url;
          var width = _step2$value.width;
          var height = _step2$value.height;

          var element = document.createElement("div");
          var img = document.createElement("img");

          img.src = "img/" + url;
          img.className = "gallery-image";

          element.className = "gallery-cell";
          element.style.width = width * scaleFactor + "px";
          element.style.height = height * scaleFactor + "px";
          element.appendChild(img);

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

function weight(aspect) {
  return parseInt(aspect * 100);
}

function selectMedia(media, w) {
  var index = _.findIndex(media, function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2);

    var url = _ref7[0];
    var aspect = _ref7[1].aspect;

    console.log(aspect, w);
    return weight(aspect) == w;
  });

  return _.pullAt(media, [index])[0];
}

function perfect_gallery(element) {
  var media = _.toPairs(JSON.parse(element.getAttribute("data-photos")));
  var rowWidth = element.offsetWidth;
  var rowHeight = window.innerHeight / 2;

  var rows = findIdealRowCount([rowWidth, rowHeight], media);

  var partition = linear_partition(_.map(media, function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2);

    var url = _ref9[0];
    var aspect = _ref9[1].aspect;
    return weight(aspect);
  }), rows);

  var layout = partition.map(function (part) {
    return part.map(function (wt) {
      var _selectMedia = selectMedia(media, wt);

      var _selectMedia2 = _slicedToArray(_selectMedia, 2);

      var url = _selectMedia2[0];
      var _selectMedia2$ = _selectMedia2[1];
      var width = _selectMedia2$.width;
      var height = _selectMedia2$.height;
      var title = _selectMedia2$.title;

      var scale = rowHeight / height;
      return {
        width: width * scale,
        height: height * scale,
        url: url,
        title: title };
    });
  });

  render(element, rowWidth, layout);
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
