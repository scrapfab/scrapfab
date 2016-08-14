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

var sumWidth = function sumWidth(row) {
  return _.reduce(row, function (total, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2);

    var url = _ref6[0];
    var width = _ref6[1].width;
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
          var _step2$value = _slicedToArray(_step2.value, 2);

          var url = _step2$value[0];
          var _step2$value$ = _step2$value[1];
          var width = _step2$value$.width;
          var height = _step2$value$.height;

          var element = document.createElement("div");
          var img = document.createElement("img");

          img.src = "img/" + url;
          img.className = "gallery-image";

          element.className = "gallery-cell";
          element.style.width = parseInt(width * scaleFactor) + "px";
          element.style.height = parseInt(height * scaleFactor) + "px";
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

  galleryElement.appendChild(container);
};

function weight(_ref7) {
  var _ref8 = _slicedToArray(_ref7, 2);

  var url = _ref8[0];
  var aspect = _ref8[1].aspect;
  return parseInt(aspect * 100);
}

function weight_cache(media) {
  var cache = _.groupBy(media, weight);

  return function (w) {
    var item = cache[w][0];
    cache[w] = _.drop(cache[w]);
    return item;
  };
}

function perfect_layout(gallery_width, gallery_height, media) {
  var row_width = gallery_width;
  var row_height = gallery_height / 2;

  var rows = findIdealRowCount([row_width, row_height], media);
  var partition = linear_partition(_.map(media, weight), rows);

  var cache = weight_cache(media);

  return partition.map(function (part) {
    return part.map(function (w) {
      var item = cache(w);

      var _item = _slicedToArray(item, 2);

      var url = _item[0];
      var m = _item[1];

      var scale = row_height / m.height;

      return [url, _.merge(m, {
        width: m.width * scale,
        height: m.height * scale
      })];
    });
  });
}

function request_gallery(id) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.addEventListener("load", function () {
      resolve(JSON.parse(this.responseText));
    });
    req.open("GET", "media/" + id + ".json");
    req.send();
  });
}

function perfect_gallery(element) {
  request_gallery(element.getAttribute("data-gallery-id")).then(function (media) {
    var gallery_width = element.offsetWidth;
    var gallery_height = window.innerHeight;
    var layout = perfect_layout(gallery_width, gallery_height, media);

    render(element, gallery_width, layout);
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
