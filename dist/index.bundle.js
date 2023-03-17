"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_importing_images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _modules_renderPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _modules_pagination_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);






// -------- constants --------------

const defaultSearchLetter = 'b';
const items = document.getElementById('items');
const pagination = document.getElementById('pagination');
const search = document.getElementById('search');
const searchInput = document.getElementById('searchInput');
const itemsCount = document.getElementById('items-count');
let meals = [];
let likes = [];

// -------- functions --------------

const loadLikes = () => {
  if (likes.length > 0) {
    likes.forEach((itemObj) => {
      const item = document.getElementById(itemObj.item_id);
      if (item) {
        item.innerHTML = itemObj.likes;
      }
    });
  }
};

const handleChecked = (id, label, checkbox) => {
  if (checkbox) {
    label.style.pointerEvents = 'none';
    (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_2__.giveLike)(id).then(() => {
      const item = document.getElementById(id);
      const likeCount = parseInt(item.innerHTML, 10) + 1;
      item.innerHTML = likeCount;
      label.style.pointerEvents = 'all';
    });
  }
};

const loadHtmlContent = (pageNum) => {
  items.innerHTML = '';
  itemsCount.innerHTML = (0,_modules_pagination_js__WEBPACK_IMPORTED_MODULE_4__["default"])(meals);
  if (meals.length > 0) {
    for (let i = (pageNum * 10) - 10; i < (pageNum * 10) + 2; i += 1) {
      const li = document.createElement('li');
      // ------------------ Other elements ------------
      const image = document.createElement('img');
      image.alt = 'Meal Image';
      image.src = meals[i].strMealThumb;

      const itemName = document.createElement('h4');
      itemName.className = 'itemName';
      itemName.innerHTML = `<b><p>${meals[i].strMeal}</p></b>`;

      const itemCategory = document.createElement('h4');
      itemCategory.innerHTML = meals[i].strCategory;

      const tagsContainer = document.createElement('ul');
      tagsContainer.className = 'tags-container';
      tagsContainer.innerHTML = `
        <li>${meals[i].strIngredient1}</li>
        <li>${meals[i].strIngredient2}</li>
        ${(meals[i].strIngredient1.length + meals[i].strIngredient2.length < 15) ? `<li>${meals[i].strIngredient3}</li>` : ''}
      `;

      const line = document.createElement('div');
      line.className = 'line';

      // ------------------ Interactions ------------
      const interactions = document.createElement('div');
      interactions.className = 'interactions';
      // -------- Label --------
      const likeCount = 0;
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.style.display = 'none';
      const id = meals[i].idMeal;
      checkbox.addEventListener('change', (e) => {
        handleChecked(id, label, e.target.checked);
      });
      const hearth = document.createElement('div');
      hearth.className = 'hearth';
      label.className = 'like';
      label.append(checkbox, hearth);

      // -------- Like count --------
      const likes = document.createElement('span');
      likes.className = 'like-count';
      likes.id = meals[i].idMeal;
      likes.innerHTML = `${likeCount}`;

      // -------- comment --------
      const comment = document.createElement('span');
      comment.innerHTML = '<b>Comment</b>';
      comment.className = 'comment-btn';

      comment.addEventListener('click', () => {
        const popupSection = document.querySelector('.popup');
        const nav = document.getElementsByTagName('nav')[0];
        const body = document.getElementsByTagName('body')[0];
        body.className = 'active';
        nav.className = 'active';
        popupSection.style.display = 'flex';
        (0,_modules_renderPopup_js__WEBPACK_IMPORTED_MODULE_3__["default"])(id);
      });

      interactions.append(label, likes, comment);

      li.append(image, itemName, itemCategory, tagsContainer, line, interactions);
      items.appendChild(li);
      if (i === meals.length - 1) break;
    }
  }
  (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_2__.getLike)().then((res) => {
    likes = res;
    loadLikes();
  });
};

const unselectOtherPages = () => {
  const otherPages = document.querySelectorAll('.selectedPage');

  otherPages.forEach((page) => {
    page.className = '';
  });
};

const loadHtmlPagination = () => {
  pagination.innerHTML = '';
  for (let i = 1; i <= Math.ceil(meals.length / 10); i += 1) {
    const li = document.createElement('li');
    li.innerHTML = i;
    if (i === 1) {
      li.className = 'selectedPage';
    }
    li.addEventListener('click', () => {
      unselectOtherPages();
      li.className = 'selectedPage';
      loadHtmlContent(i);
    });
    pagination.appendChild(li);
  }
};

// -------- event listeners  ------

window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_2__.searchByLetter)(defaultSearchLetter).then((res) => {
    meals = res.meals;
    loadHtmlContent(1);
    loadHtmlPagination();
  });
});

search.addEventListener('submit', (e) => {
  e.preventDefault();
  if (searchInput.value.length === 1) {
    (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_2__.searchByLetter)(searchInput.value).then((res) => {
      meals = res.meals;
      loadHtmlContent(1);
      loadHtmlPagination();
    });
  } else {
    (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_2__.searchByName)(searchInput.value).then((res) => {
      meals = res.meals;
      loadHtmlContent(1);
      loadHtmlPagination();
    });
  }
  searchInput.value = '';
});


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(14), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ruthie&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --font-family-main: 'Poppins', sans-serif;\r\n  --font-family-styled: 'Ruthie', cursive;\r\n  --background-color: black;\r\n  --red: #de0000;\r\n  --red-dark: #ae0000;\r\n  --max-width-pc: 1000px;\r\n  --heart-size: 70px;\r\n  --heart-size-mob: 30px;\r\n  --frames: 62;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: var(--font-family-main);\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background-color: var(--background-color);\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody.active {\r\n  min-height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\nh2 {\r\n  font-size: 50px;\r\n}\r\n\r\nh4 {\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n}\r\n\r\n/* -------------------- Nav ---------------- */\r\n\r\nnav {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 70px;\r\n  display: flex;\r\n  padding: 0 60px;\r\n  justify-content: center;\r\n\r\n  /* background-color: rgba(0, 0, 0, 0.418); */\r\n  z-index: 5;\r\n}\r\n\r\n#mob-menu {\r\n  width: 25px;\r\n  height: 23px;\r\n  display: none;\r\n}\r\n\r\nnav.active {\r\n  z-index: -1;\r\n}\r\n\r\nnav > div {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  display: flex;\r\n  width: 100%;\r\n  max-width: var(--max-width-pc);\r\n}\r\n\r\nnav img {\r\n  width: 70px;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  align-items: center;\r\n  list-style: none;\r\n  column-gap: 50px;\r\n  letter-spacing: 2px;\r\n}\r\n\r\nnav li {\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  transform: scale(1);\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\nnav ul .selected {\r\n  font-weight: 600;\r\n  background-color: var(--red);\r\n  padding: 5px 20px;\r\n  border-radius: 30px;\r\n}\r\n\r\n/* -------------------- Landing Page ---------------- */\r\n\r\n.landingPage {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n}\r\n\r\n#flame-video {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 70%;\r\n  max-width: 1200px;\r\n  right: -20%;\r\n  bottom: -20%;\r\n  mix-blend-mode: lighten;\r\n  transform: rotateZ(-45deg);\r\n  opacity: 0.5;\r\n}\r\n\r\n.landingPage::before {\r\n  position: absolute;\r\n  content: '';\r\n  width: 100px;\r\n  height: 100px;\r\n  left: 0;\r\n  top: 20%;\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.landingPage::after {\r\n  position: absolute;\r\n  content: '';\r\n  width: 180px;\r\n  height: 180px;\r\n  left: -60px;\r\n  bottom: 20%;\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  z-index: 0;\r\n  filter: blur(3px);\r\n}\r\n\r\n#flame {\r\n  width: 70%;\r\n  position: absolute;\r\n  right: -20%;\r\n  bottom: 0%;\r\n  mix-blend-mode: lighten;\r\n}\r\n\r\n#landing-image {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  animation: onload-landing-image 1.5s ease-in-out;\r\n}\r\n\r\n.landingPageContainer {\r\n  display: flex;\r\n  max-width: 1000px;\r\n  margin: 80px;\r\n  align-items: center;\r\n  width: calc(100% - 80px);\r\n}\r\n\r\n.left {\r\n  width: 50%;\r\n}\r\n\r\n.left h1 {\r\n  font-family: var(--font-family-styled);\r\n  font-size: 94px;\r\n  font-weight: 400;\r\n  animation: onload 0.5s ease-in-out;\r\n}\r\n\r\n.left h2 {\r\n  margin-top: -20px;\r\n  margin-bottom: 20px;\r\n  animation: onload 0.8s ease-in-out;\r\n}\r\n\r\n.left p {\r\n  opacity: 0.5;\r\n  letter-spacing: 1px;\r\n  max-width: 450px;\r\n  animation: onload-p 1.2s ease-in-out;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n  animation: onload 1.4s ease-in-out;\r\n}\r\n\r\nbutton {\r\n  margin-top: 1rem;\r\n  border: 2px solid black;\r\n  outline: none;\r\n  border-radius: 13px;\r\n  padding-inline: 0.5rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\nbutton:hover {\r\n  border: 2px solid #fff;\r\n  background-color: #de7800;\r\n  color: #fff;\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n.buttons button {\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  border-radius: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-width: max-content;\r\n  height: max-content;\r\n  font-weight: 600;\r\n  color: white;\r\n  font-size: 16px;\r\n  border: none;\r\n  z-index: 2;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.buttons button:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.buttons button a {\r\n  display: flex;\r\n  align-items: center;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.meal-image img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.buttons button img {\r\n  margin-left: 10px;\r\n}\r\n\r\n.buttons button:nth-child(1) {\r\n  background-image: linear-gradient(to right, var(--red), var(--red-dark));\r\n}\r\n\r\n.buttons button:nth-child(2) {\r\n  background: rgba(255, 255, 255, 0);\r\n  border: 2px solid white;\r\n}\r\n\r\n.right {\r\n  width: 50%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.dark {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 30vh;\r\n  background-image: linear-gradient(to top, black, rgba(0, 0, 0, 0.676), rgba(0, 0, 0, 0));\r\n  bottom: 0;\r\n  z-index: 2;\r\n}\r\n\r\n/* -------------------- Footer ---------------- */\r\n\r\nfooter {\r\n  padding: 1rem 3rem;\r\n  display: block;\r\n  color: white;\r\n  margin-top: auto;\r\n  background-color: #1b1b1b;\r\n}\r\n\r\nfooter .footer-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 0.5rem;\r\n}\r\n\r\n.social-icon-and-name {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.social-icon-and-name span {\r\n  display: flex;\r\n}\r\n\r\n.social-icon-and-name ul {\r\n  display: flex;\r\n  align-items: center;\r\n  list-style-type: none;\r\n  padding-inline: 1rem;\r\n}\r\n\r\n.license {\r\n  font-size: small;\r\n  font-weight: 300;\r\n  color: #b8b8b8;\r\n}\r\n\r\n.cafe-text {\r\n  color: #b8b8b8;\r\n}\r\n\r\n/* -------------------- Gallery ---------------- */\r\n\r\n.gallery {\r\n  padding-top: 10vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.gallery::after {\r\n  content: '';\r\n  position: absolute;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-position: center;\r\n  background-size: cover;\r\n  width: 150px;\r\n  aspect-ratio: 1/2;\r\n  top: 20%;\r\n  left: -50px;\r\n  z-index: -2;\r\n}\r\n\r\n.gallery::before {\r\n  content: '';\r\n  position: absolute;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-position: center;\r\n  background-size: cover;\r\n  width: 160px;\r\n  aspect-ratio: 1/1;\r\n  bottom: 30%;\r\n  right: -60px;\r\n  z-index: -2;\r\n}\r\n\r\n.gallery-top {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 80%;\r\n  max-width: var(--max-width-pc);\r\n}\r\n\r\n.gallery-top .inputContainer {\r\n  border: 2px solid white;\r\n  height: max-content;\r\n  font-size: 16px;\r\n  border-radius: 50px;\r\n  padding: 5px 15px;\r\n  position: relative;\r\n}\r\n\r\n.gallery-top input {\r\n  background-color: var(--background-color);\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n}\r\n\r\n.gallery-top input::placeholder {\r\n  color: rgba(255, 255, 255, 0.728);\r\n}\r\n\r\n.gallery-top .inputContainer::after {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: white;\r\n  width: 2px;\r\n  height: 20px;\r\n  right: 0;\r\n  bottom: -15px;\r\n  transform: rotateZ(-45deg);\r\n}\r\n\r\n.gallery-container {\r\n  width: 80%;\r\n  max-width: var(--max-width-pc);\r\n  margin-bottom: 50px;\r\n  position: relative;\r\n}\r\n\r\n.gallery-container > h4 {\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.items {\r\n  display: flex;\r\n  column-gap: 20px;\r\n  row-gap: 40px;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  min-height: 40vh;\r\n}\r\n\r\n.items > li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 20vw;\r\n  max-width: 220px;\r\n  min-width: 180px;\r\n  height: 380px;\r\n  position: relative;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n.items > li .itemName {\r\n  max-height: 60px;\r\n  max-width: 90%;\r\n  overflow: hidden;\r\n}\r\n\r\n.form-section p {\r\n  font-weight: 600;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.comments-and-username p {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.items > li .itemName p {\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.items > li::after {\r\n  border-radius: 7px;\r\n  position: absolute;\r\n  background-color: rgb(233, 233, 233);\r\n  width: 100%;\r\n  height: 85%;\r\n  bottom: 0;\r\n  content: '';\r\n  z-index: -1;\r\n}\r\n\r\n.items li img {\r\n  width: 120px;\r\n  height: 120px;\r\n  border: 5px solid white;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 20px black;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.tags-container {\r\n  display: flex;\r\n  list-style: none;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.tags-container li {\r\n  width: max-content;\r\n  margin: 5px;\r\n  padding: 2px 10px;\r\n  background-color: var(--red);\r\n  color: white;\r\n  border-radius: 30px;\r\n}\r\n\r\n.line {\r\n  width: 90%;\r\n  height: 2px;\r\n  background-color: #1b1b1b14;\r\n  margin: 10px 0;\r\n  margin-top: auto;\r\n}\r\n\r\n.interactions {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--red);\r\n  justify-content: space-between;\r\n  padding-right: 10px;\r\n}\r\n\r\n.like-count {\r\n  position: absolute;\r\n  left: calc(var(--heart-size) - 15px);\r\n}\r\n\r\n.pagination {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: end;\r\n  margin-top: 20px;\r\n}\r\n\r\n.pagination li {\r\n  cursor: pointer;\r\n  width: 35px;\r\n  height: 35px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  border: 2px solid white;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.social-icon-and-name ul li {\r\n  padding-inline: 0.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nnav li:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.pagination li:hover {\r\n  background-color: rgba(255, 255, 255, 0.407);\r\n}\r\n\r\n.pagination li:nth-last-child(1) {\r\n  border-radius: 0 8px 8px 0;\r\n}\r\n\r\n.pagination li:nth-child(1) {\r\n  border-radius: 8px 0 0 8px;\r\n}\r\n\r\n.pagination .selectedPage {\r\n  pointer-events: none;\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n/* ------------------------------ Like button ------------ */\r\n.like {\r\n  cursor: pointer;\r\n}\r\n\r\n.hearth {\r\n  background-image: url('https://assets.codepen.io/23500/Hashflag-AppleEvent.svg');\r\n  background-size: calc(var(--heart-size) * var(--frames)) var(--heart-size);\r\n  background-repeat: no-repeat;\r\n  background-position-x: calc(var(--heart-size) * (var(--frames) * -1 + 1));\r\n  background-position-y: calc(var(--heart-size) * 0.02);\r\n  width: var(--heart-size);\r\n  height: var(--heart-size);\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.hearth:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\ninput:checked + .hearth {\r\n  animation: like 1s steps(calc(var(--frames) - 3));\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes like {\r\n  0% {\r\n    background-position-x: 0;\r\n  }\r\n\r\n  100% {\r\n    background-position-x: calc(var(--heart-size) * (var(--frames) * -1 + 3));\r\n  }\r\n}\r\n\r\n/* ****************popup************* */\r\n.comment-btn {\r\n  cursor: pointer;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.comment-btn:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  padding: 2rem;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  backdrop-filter: blur(8px);\r\n  display: none;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.popup-card {\r\n  position: relative;\r\n  background-color: rgb(255, 255, 255, 0.85);\r\n  border-radius: 7px;\r\n  border-top-right-radius: 15vw;\r\n  height: 85vh;\r\n  width: 85%;\r\n  max-width: var(--max-width-pc);\r\n  color: #1b1b1b;\r\n  padding: 3rem 2rem;\r\n}\r\n\r\n#closeBtn {\r\n  position: absolute;\r\n  top: 1rem;\r\n  left: 1rem;\r\n  width: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n#closeBtn:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.meal-image {\r\n  position: absolute;\r\n  right: 1rem;\r\n  top: 1rem;\r\n  width: 35%;\r\n  max-width: 370px;\r\n  display: flex;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: rgba(255, 255, 255, 0.329) 5px solid;\r\n  box-shadow: rgb(0, 0, 0, 0.7) 0 0 35px;\r\n}\r\n\r\n.popup-card h2 {\r\n  font-weight: 100;\r\n  font-size: 2.5em;\r\n  color: #454545;\r\n}\r\n\r\n.food-name {\r\n  font-weight: 700;\r\n  font-size: 3rem;\r\n}\r\n\r\n.food-ingredients span {\r\n  background-color: #de7800;\r\n  border-radius: 10px;\r\n  color: #fff;\r\n  font-size: 0.8rem;\r\n  padding-inline: 0.4rem;\r\n  margin-right: 0.5rem;\r\n  box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.5);\r\n}\r\n\r\n.comments-and-form-container {\r\n  display: flex;\r\n  align-items: flex-end;\r\n  padding: 2rem 0;\r\n}\r\n\r\n.comment-section {\r\n  min-width: 40%;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.comment-section .comment {\r\n  font-weight: 600;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.comments-and-username {\r\n  background-color: #1d0000;\r\n  border-radius: 7px;\r\n  color: #fff;\r\n  height: 30vh;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.comments-and-username::-webkit-scrollbar {\r\n  width: 0.2em;\r\n}\r\n\r\n.comments-and-username::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.comments-and-username::-webkit-scrollbar-thumb {\r\n  background-color: #ccc;\r\n  outline: 1px solid slategrey;\r\n  border-radius: 0.2em;\r\n}\r\n\r\n#addCommentForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#addCommentForm input {\r\n  padding: 0.3rem;\r\n  border: 2px solid black;\r\n  font-size: 0.8rem;\r\n  outline: none;\r\n  width: 50%;\r\n  border-radius: 0.3rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#addCommentForm textarea {\r\n  border: 2px solid black;\r\n  padding: 0.3rem;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n#submitBtn {\r\n  width: 40%;\r\n  padding: 0.2rem;\r\n  background-color: #de7800;\r\n  color: #fff;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 769px) {\r\n  .landingPage {\r\n    height: 100vh;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .landingPage::before {\r\n    width: 60px;\r\n    height: 60px;\r\n    left: -25px;\r\n  }\r\n\r\n  .landingPage::after {\r\n    width: 150px;\r\n    height: 150px;\r\n    left: 75%;\r\n    filter: blur(4px);\r\n  }\r\n\r\n  #flame {\r\n    width: 800px;\r\n    right: 0;\r\n    bottom: -15%;\r\n    transform: rotateZ(20deg);\r\n  }\r\n\r\n  #flame-video {\r\n    width: 500px;\r\n    right: 0%;\r\n    bottom: -20%;\r\n    transform: rotateZ(0deg);\r\n  }\r\n\r\n  #landing-image {\r\n    width: 240px;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .landingPageContainer {\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    margin: 80px;\r\n    margin-top: 60px;\r\n    align-items: center;\r\n    width: calc(100% - 80px);\r\n  }\r\n\r\n  .left {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n  }\r\n\r\n  .left h1 {\r\n    min-width: max-content;\r\n    font-size: 64px;\r\n  }\r\n\r\n  .left h2 {\r\n    font-size: 36px;\r\n  }\r\n\r\n  .left p {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .buttons {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .buttons button {\r\n    padding: 5px 10px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  nav img {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .buttons button img {\r\n    width: 20px;\r\n  }\r\n\r\n  .items li img {\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  .buttons button:nth-child(2) img {\r\n    width: 15px;\r\n  }\r\n\r\n  .right {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .dark {\r\n    height: 20vh;\r\n  }\r\n\r\n  .gallery-top {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .gallery-top h2 {\r\n    font-size: 40px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  nav {\r\n    height: 60px;\r\n    z-index: 2;\r\n  }\r\n\r\n  #mob-menu {\r\n    display: block;\r\n  }\r\n\r\n  h4 {\r\n    font-size: 13px;\r\n  }\r\n\r\n  .gallery::after {\r\n    filter: blur(3px);\r\n  }\r\n\r\n  .gallery::before {\r\n    filter: blur(3px);\r\n  }\r\n\r\n  .gallery-container {\r\n    width: 95%;\r\n  }\r\n\r\n  .gallery-container > h4 {\r\n    margin: 40px 20%;\r\n  }\r\n\r\n  .items {\r\n    column-gap: 10px;\r\n  }\r\n\r\n  .items > li {\r\n    width: 20vw;\r\n    min-width: 130px;\r\n    max-width: 140px;\r\n    height: 220px;\r\n  }\r\n\r\n  .tags-container {\r\n    font-size: 10px;\r\n  }\r\n\r\n  .tags-container li {\r\n    margin: 2px;\r\n    padding: 2px 5px;\r\n    background-color: var(--red);\r\n    color: white;\r\n    border-radius: 30px;\r\n  }\r\n\r\n  .interactions {\r\n    font-size: 12px;\r\n  }\r\n\r\n  nav ul {\r\n    display: none;\r\n  }\r\n\r\n  .hearth {\r\n    background-image: url('https://assets.codepen.io/23500/Hashflag-AppleEvent.svg');\r\n    background-size: calc(var(--heart-size-mob) * var(--frames)) var(--heart-size-mob);\r\n    background-repeat: no-repeat;\r\n    background-position-x: calc(var(--heart-size-mob) * (var(--frames) * -1 + 1));\r\n    background-position-y: calc(var(--heart-size-mob) * 0.02);\r\n    width: var(--heart-size-mob);\r\n    height: var(--heart-size-mob);\r\n    transition: 0.3s ease-in-out;\r\n  }\r\n\r\n  input:checked + .hearth {\r\n    animation: like 1s steps(calc(var(--frames) - 3));\r\n    animation-fill-mode: forwards;\r\n  }\r\n\r\n  @keyframes like {\r\n    0% {\r\n      background-position-x: 0;\r\n    }\r\n\r\n    100% {\r\n      background-position-x: calc(var(--heart-size-mob) * (var(--frames) * -1 + 3));\r\n    }\r\n  }\r\n\r\n  .like-count {\r\n    left: calc(var(--heart-size-mob) - 5px);\r\n  }\r\n\r\n  footer div:nth-child(1) {\r\n    display: none;\r\n  }\r\n\r\n  .social-icon-and-name {\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  footer .footer-container {\r\n    flex-wrap: wrap;\r\n    row-gap: 10px;\r\n  }\r\n\r\n  .popup {\r\n    padding: 0 1rem;\r\n    z-index: 3;\r\n  }\r\n\r\n  .popup-card {\r\n    width: 100%;\r\n    border-top-right-radius: 20vw;\r\n    min-height: 96vh;\r\n    overflow-y: scroll;\r\n    padding: 1rem;\r\n  }\r\n\r\n  .popup-card h2 {\r\n    padding-top: 7rem;\r\n    font-size: 2em;\r\n  }\r\n\r\n  .food-name {\r\n    font-weight: 700;\r\n    font-size: 2em;\r\n  }\r\n\r\n  .comments-and-form-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    padding: 0;\r\n  }\r\n\r\n  .comment-section {\r\n    order: 2;\r\n    padding-top: 0.5rem;\r\n  }\r\n\r\n  .form-section {\r\n    order: 1;\r\n    padding-top: 0.5rem;\r\n  }\r\n}\r\n\r\n@keyframes onload {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(40px);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes onload-p {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(40px);\r\n  }\r\n\r\n  100% {\r\n    opacity: 0.5;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes onload-landing-image {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(250px) rotateZ(40deg);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0) rotateZ(0deg);\r\n  }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2c70791dfbd771d1e5d.jpg";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0451bfaea7886d5d7d60.png";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e4477b50961ccc92345.png";

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _assets_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _assets_instagram_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _assets_linkedin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _assets_download_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _assets_landing_image_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _assets_landing_bg_flare_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);
/* harmony import */ var _assets_backgroundFlame_mp4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony import */ var _assets_mob_menu_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
// ------------ Imports -----------------










// ------------ constants -----------------
const logo = document.getElementById('logo');
const flameVideo = document.getElementById('flame-video');
const landingBgFlare = document.getElementById('flame');
const github = document.querySelectorAll('.github');
const instagram = document.querySelectorAll('.instagram');
const linkedin = document.querySelectorAll('.linkedin');
const download = document.getElementById('download');
const arrowDown = document.getElementById('arrow-down');
const landingImage = document.getElementById('landing-image');
// ------------ setting src -----------------
logo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;
flameVideo.src = _assets_backgroundFlame_mp4__WEBPACK_IMPORTED_MODULE_8__;
download.src = _assets_download_png__WEBPACK_IMPORTED_MODULE_4__;
landingImage.src = _assets_landing_image_png__WEBPACK_IMPORTED_MODULE_6__;
arrowDown.src = _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_5__;
landingBgFlare.src = _assets_landing_bg_flare_jpg__WEBPACK_IMPORTED_MODULE_7__;
github[0].src = _assets_github_png__WEBPACK_IMPORTED_MODULE_1__;
const mobMenu = document.getElementById('mob-menu');
// ------------ setting src -----------------
logo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;
mobMenu.src = _assets_mob_menu_png__WEBPACK_IMPORTED_MODULE_9__;
github[0].src = _assets_mob_menu_png__WEBPACK_IMPORTED_MODULE_9__;
instagram[0].src = _assets_instagram_png__WEBPACK_IMPORTED_MODULE_2__;
linkedin[0].src = _assets_linkedin_png__WEBPACK_IMPORTED_MODULE_3__;
github[1].src = _assets_github_png__WEBPACK_IMPORTED_MODULE_1__;
instagram[1].src = _assets_instagram_png__WEBPACK_IMPORTED_MODULE_2__;
linkedin[1].src = _assets_linkedin_png__WEBPACK_IMPORTED_MODULE_3__;

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30470ab47c16bd004b0e.png";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3b7c49dc0bdb0ab7447.png";

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc7dee4df0e202107d07.png";

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a04c7c435f93e0c711a.png";

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff412d9695084573cc5c.png";

/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2a1ff12649f2fc79398.png";

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a875cefaf11eb4521944.png";

/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c95c1ffbac6991da9232.jpg";

/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a3c2e82b9544dffc296.mp4";

/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "faf37aa630a31b0d29ea.png";

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComment": () => (/* binding */ getComment),
/* harmony export */   "getLike": () => (/* binding */ getLike),
/* harmony export */   "giveComment": () => (/* binding */ giveComment),
/* harmony export */   "giveLike": () => (/* binding */ giveLike),
/* harmony export */   "searchById": () => (/* binding */ searchById),
/* harmony export */   "searchByLetter": () => (/* binding */ searchByLetter),
/* harmony export */   "searchByName": () => (/* binding */ searchByName)
/* harmony export */ });
/* harmony import */ var _secrets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);


const searchByName = async (Name) => {
  try {
    const response = await fetch(`${_secrets_js__WEBPACK_IMPORTED_MODULE_0__.mealApi}search.php?s=${Name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const searchByLetter = async (letter) => {
  try {
    const response = await fetch(`${_secrets_js__WEBPACK_IMPORTED_MODULE_0__.mealApi}search.php?f=${letter}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const searchById = async (id) => {
  try {
    const response = await fetch(`${_secrets_js__WEBPACK_IMPORTED_MODULE_0__.mealApi}lookup.php?i=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const giveLike = async (id) => {
  try {
    await fetch(`${_secrets_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApi}apps/${_secrets_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApiId}/likes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: `${id}` }),
    });
    return 'worked';
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const getLike = async () => {
  try {
    const response = await fetch(`${_secrets_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApi}apps/${_secrets_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApiId}/likes`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const giveComment = async (id, name, comment) => {
  try {
    const response = await fetch(`${_secrets_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApi}apps/${_secrets_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApiId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: id, username: name, comment }),
    });
    return response.status;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const getComment = async (id) => {
  try {
    const response = await fetch(`${_secrets_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApi}apps/${_secrets_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApiId}/comments?item_id=${id}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "involvmentApi": () => (/* binding */ involvmentApi),
/* harmony export */   "involvmentApiId": () => (/* binding */ involvmentApiId),
/* harmony export */   "mealApi": () => (/* binding */ mealApi)
/* harmony export */ });
const mealApi = 'https://www.themealdb.com/api/json/v1/1/';
const involvmentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const involvmentApiId = 'MvNlvrxLV37JZPKyYdPZ';


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_close_btn_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);




const commentPopup = async (mealId) => {
  const popupSection = document.querySelector('.popup');
  let meals = [];
  const res = await (0,_API_js__WEBPACK_IMPORTED_MODULE_1__.searchById)(mealId);
  meals = res.meals;
  popupSection.innerHTML = `
  <div class="popup-card">
    <div class="meal-image"><img src=${meals[0].strMealThumb}></div>
    <img src=${_assets_close_btn_png__WEBPACK_IMPORTED_MODULE_0__} id="closeBtn">
    <h2>${meals[0].strMeal}</h2>
    <p class="food-name">${meals[0].strCategory}</p>
    <p class="food-ingredients">
      <span>${meals[0].strIngredient1 ? meals[0].strIngredient1 : ''}</span>
      <span>${meals[0].strIngredient2 ? meals[0].strIngredient2 : ''}</span>
      <span>${meals[0].strIngredient3 ? meals[0].strIngredient3 : ''}</span>
      <span>${meals[0].strIngredient4 ? meals[0].strIngredient4 : ''}</span>
      <span>${meals[0].strIngredient5 ? meals[0].strIngredient5 : ''}</span>
    </p>
    <button>Visit site</button><button>Watch Youtube Video</button>
    <div class="comments-and-form-container">
      <div class="comment-section">
        <p class="comment" id="commentId"></p>
        <div class="comments-and-username">
        </div>
      </div>
      <div class="form-section">
        <p>Add a comment</p>
        <form id="addCommentForm">
          <input type="text" placeholder="Your name" id="userName" required>
          <textarea name="comment" form="addCommentForm" id="commentText" cols="30" rows="3" maxlength="500" placeholder="Your insights..." required ></textarea>
          <button type="submit" id="submitBtn">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>`;

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', () => {
    const nav = document.getElementsByTagName('nav')[0];
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('active');
    nav.classList.remove('active');
    popupSection.style.display = 'none';
  });

  _comments_js__WEBPACK_IMPORTED_MODULE_2__.postComment(mealId);
  _comments_js__WEBPACK_IMPORTED_MODULE_2__.loadComments(mealId);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentPopup);

/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9321bd6354f323fcc57a.png";

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadComments": () => (/* binding */ loadComments),
/* harmony export */   "postComment": () => (/* binding */ postComment)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _toast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);




const postComment = (id) => {
  const form = document.getElementById('addCommentForm');
  const userName = document.getElementById('userName');
  const comment = document.getElementById('commentText');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.giveComment)(id, userName.value, comment.value);
    (0,_toast_js__WEBPACK_IMPORTED_MODULE_2__.success)("Comment Added")
    const commentDisplay = document.querySelector('.comments-and-username');
    const p = document.createElement('p')
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    p.innerHTML = ` ${formattedDate} ${userName.value} ${comment.value} `
    commentDisplay.appendChild(p)
    userName.value = '';
    comment.value = '';
  });
};

const loadComments = async (id) => {
  const res = await (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(id);
  const commentDisplay = document.querySelector('.comments-and-username');

  if (res.length > 0) {
    const counter = (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(res);
    commentDisplay.innerHTML = res.map((comments) => ((typeof (comments.comment) === 'string' && comments.comment.length > 0) ? `<p> ${comments.creation_date} ${comments.username} : ${comments.comment}</p>` : '')).join('');
    const commentCounter = document.getElementById('commentId');
    commentCounter.innerHTML = `Comments ( ${counter} )`;
  }
};



/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentsCounter = (comment) => {
  const counter = comment.filter((comments) => (typeof (comments.comment) === 'string' && comments.comment.length > 0 ));
  console.log(comment);
  return counter.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "success": () => (/* binding */ success)
/* harmony export */ });
/* eslint-disable no-undef */
const success = (message) => {
    console.log(message)
    swal("Good job!", `${message}`, "success")
}

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const handleItemsCount = (array) => {
  let count = 0;
  array.forEach(() => {
    count += 1;
  });
  return count;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleItemsCount);

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);