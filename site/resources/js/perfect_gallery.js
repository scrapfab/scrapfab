"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function createCell(rowWidth, summedRatios, aspect) {
  var element = document.createElement("div");

  element.className = "gallery-cell";
  element.style.width = parseInt(rowWidth / summedRatios * aspect) + "px";
  element.style.height = parseInt(rowWidth / summedRatios) + "px";

  return element;
}

function createImage(url) {
  var img = document.createElement("img");

  img.className = "gallery-image";
  img.setAttribute("data-loading", true);
  img.addEventListener("load", function () {
    return img.removeAttribute("data-loading");
  });
  img.src = "img/" + url;
  return img;
}

var render = function render(galleryElement, rowWidth, layout) {
  var container = document.createElement("div");

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = layout[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var row = _step.value;

      var rowElement = document.createElement("div");
      var summedRatios = _.reduce(row, function (s, _ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var url = _ref2[0];
        var aspect = _ref2[1].aspect;
        return s + aspect;
      }, 0);

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
          var aspect = _step2$value$.aspect;

          var cell = createCell(rowWidth, summedRatios, aspect);
          var img = createImage(url);

          cell.appendChild(img);
          rowElement.appendChild(cell);
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

function findIdealRowCount(_ref3, images) {
  var _ref4 = _slicedToArray(_ref3, 2);

  var idealWidth = _ref4[0];
  var idealHeight = _ref4[1];

  return Math.round(_.reduce(images, function (summedWidth, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2);

    var url = _ref6[0];
    var _ref6$ = _ref6[1];
    var width = _ref6$.width;
    var height = _ref6$.height;

    return summedWidth + width * idealHeight / height;
  }, 0) / idealWidth);
}

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

function perfect_gallery(element, gallery_id) {
  var clone = element.cloneNode(false);

  element.addEventListener("transitionend", function (e) {
    if (e.target.className == "gallery") {
      request_gallery(gallery_id).then(function (media) {
        e.target.parentNode.replaceChild(clone, e.target);

        var gallery_width = clone.getBoundingClientRect().width;
        var gallery_height = window.innerHeight;
        var layout = perfect_layout(gallery_width, gallery_height, media);

        render(clone, gallery_width, layout);
      });
    }
  });

  element.setAttribute("data-loading", true);
}

function set_hash(hash) {
  if (history.pushState) {
    history.pushState(null, null, hash);
  } else {
    window.location.hash = hash;
  }
}

document.addEventListener("click", function (e) {
  if (/gallery-menu-link/.test(e.target.className)) {
    e.preventDefault();
    e.stopPropagation();
    set_hash(e.target.getAttribute("href"));
    init();
  }
});

function init() {
  var id = window.location.hash ? window.location.hash.substring(1) : "all";
  var gal = document.querySelectorAll(".gallery")[0];
  perfect_gallery(gal, id);
}

init();
