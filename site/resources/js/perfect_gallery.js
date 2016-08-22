"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*
---------------------------------------
---- Layout
---------------------------------------
*/

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

function weight(_ref5) {
  var _ref6 = _slicedToArray(_ref5, 2);

  var url = _ref6[0];
  var aspect = _ref6[1].aspect;
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

/*
---------------------------------------
---- Rendering
---------------------------------------
*/

function createCell(rowWidth, summedRatios, aspect) {
  var width = parseInt(rowWidth / summedRatios * aspect);
  var height = parseInt(rowWidth / summedRatios);

  return $("<div class=\"gallery-cell\"\n                 style=\"width: " + width + "px; height " + height + "px;\">\n            </div>");
}

function createImage(url, _title) {
  var img = $("<img class=\"gallery-image\" data-loading=true>");

  img.on("load", function () {
    return img.removeAttr("data-loading");
  }).on("click", function () {
    $.colorbox({
      href: "img/" + url,
      transition: "fade",
      maxWidth: "90%",
      maxHeight: "90%",
      opacity: 0.85,
      title: function title() {
        return _title;
      }
    });
  }).attr("src", "img/" + url);

  return img;
}

var render = function render(galleryElement, rowWidth, layout, annotate) {
  var $container = $("<div></div>");

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = layout[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var row = _step.value;

      var $row = $('<div class="gallery-row"></div>');
      var summedRatios = _.reduce(row, function (s, _ref7) {
        var _ref8 = _slicedToArray(_ref7, 2);

        var url = _ref8[0];
        var aspect = _ref8[1].aspect;
        return s + aspect;
      }, 0);

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
          var data = _step2$value$.data;

          $row.append(createCell(rowWidth, summedRatios, aspect).append(createImage(url, annotate(data))));
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

      $container.append($row);
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

  $(galleryElement).append($container);
};

/*
---------------------------------------
---- Network
---------------------------------------
*/

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

function photoCredit(credit) {
  if (credit) {
    var author = credit.author;
    var website = credit.website;


    return "\n      <div class='photo-credit'>\n        Photo by\n        <span>" + author + "</span>\n        <a target=\"_blank\" href=\"http://" + website + "\">" + website + "</a>\n      </div>\n    ";
  }

  return "";
}

function annotatePhoto(_ref9) {
  var title = _ref9.title;
  var desc = _ref9.desc;
  var credit = _ref9.credit;

  return $("\n    <div>\n      <h2 class=\"photo-title\">" + title + "</h2>\n      <span>" + desc + "</span>\n      " + photoCredit(credit) + "\n    </div>\n  ");
}

function perfect_gallery(element, gallery_id) {
  var clone = element.cloneNode(false);

  $(element).on("transitionend", function (e) {
    if (e.target.className == "gallery") {
      request_gallery(gallery_id).then(function (media) {
        $(e.target).replaceWith($(clone));

        var gallery_width = clone.getBoundingClientRect().width;
        var gallery_height = window.innerHeight;
        var layout = perfect_layout(gallery_width, gallery_height, media);

        render(clone, gallery_width, layout, annotatePhoto);
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

$(document).on("click", ".gallery-menu-link", function (e) {
  e.preventDefault();
  e.stopPropagation();

  set_hash(e.target.getAttribute("href"));
  $(".pure-menu-selected").removeClass("pure-menu-selected");

  if ($(e.target).hasClass("pure-menu-heading")) {
    $(e.target).addClass("pure-menu-selected");
  } else {
    $(e.target).parent().addClass("pure-menu-selected");
  }

  init();
});

function toggleElement(target) {
  if ($(target).hasClass("custom-toggle")) {
    return $(target);
  } else {
    return $(target).parents(".custom-toggle");
  }
}

function showMenu(target) {
  $(".gallery-menu").removeClass("pure-menu-horizontal");
  $(".gallery-menu").show();
  toggleElement(target).addClass("open");
}

function hideMenu(target) {
  $(".gallery-menu").hide();
  $(".gallery-menu").addClass("pure-menu-horizontal");
  toggleElement(target).removeClass("open");
}

$(document).on("click touchstart", ".custom-toggle", function (e) {
  e.preventDefault();
  showMenu(e.target);
});

$(document).on("click touchstart", ".custom-toggle.open", function (e) {
  e.preventDefault();
  hideMenu(e.target);
});

function init() {
  var id = window.location.hash ? window.location.hash.substring(1) : "all";
  var $element = $("a.gallery-menu-link[href=\"#" + id + "\"]");

  if ($element.hasClass("pure-menu-heading")) {
    $element.addClass("pure-menu-selected");
  } else {
    $element.parent().addClass("pure-menu-selected");
  }

  var gal = document.querySelectorAll(".gallery")[0];
  perfect_gallery(gal, id);

  if ($(".custom-toggle.open").length > 0) {
    hideMenu($(".custom-toggle.open"));
  }
}

function menuScrollTop() {
  return $(".gallery").offset().top - $(".responsive-menu").outerHeight();
}

function menuScrollBottom() {
  return $(".gallery").offset().top + $(".gallery").outerHeight();
}

$(document).on("scroll", function (e) {
  var scrollTop = $(document).scrollTop();

  if (scrollTop > menuScrollTop() && scrollTop < menuScrollBottom()) {
    var menuHeight = $(".responsive-menu").outerHeight();
    $(".responsive-spacer").css("padding-top", menuHeight + "px");
    $(".responsive-menu").addClass("fixed-header");
  } else {
    $(".responsive-spacer").css("padding-top", "0");
    $(".responsive-menu").removeClass("fixed-header");
  }
});

init();
