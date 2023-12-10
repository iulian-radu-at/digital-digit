"use strict";(self.webpackChunkdigital_digit=self.webpackChunkdigital_digit||[]).push([[291],{"./storybook/DigitalDigitRaw.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithNoSegmentHighlighted:()=>WithNoSegmentHighlighted,WithSegmentA:()=>WithSegmentA,WithSegmentB:()=>WithSegmentB,WithSegmentC:()=>WithSegmentC,WithSegmentD:()=>WithSegmentD,WithSegmentE:()=>WithSegmentE,WithSegmentF:()=>WithSegmentF,WithSegmentG:()=>WithSegmentG,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_DigitalDigitRaw__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/DigitalDigitRaw.tsx"),style={height:"90vh",margin:10,textAlign:"center"},color="#448844";let __WEBPACK_DEFAULT_EXPORT__={title:"DigitalDigitRaw",component:_src_DigitalDigitRaw__WEBPACK_IMPORTED_MODULE_1__.Z};var WithNoSegmentHighlighted=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_DigitalDigitRaw__WEBPACK_IMPORTED_MODULE_1__.Z,{color:color}))},WithSegmentA=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_DigitalDigitRaw__WEBPACK_IMPORTED_MODULE_1__.Z,{a:!0,color:color}))},WithSegmentB=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_DigitalDigitRaw__WEBPACK_IMPORTED_MODULE_1__.Z,{b:!0,color:color}))},WithSegmentC=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_DigitalDigitRaw__WEBPACK_IMPORTED_MODULE_1__.Z,{c:!0,color:color}))},WithSegmentD=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_DigitalDigitRaw__WEBPACK_IMPORTED_MODULE_1__.Z,{d:!0,color:color}))},WithSegmentE=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_DigitalDigitRaw__WEBPACK_IMPORTED_MODULE_1__.Z,{e:!0,color:color}))},WithSegmentF=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_DigitalDigitRaw__WEBPACK_IMPORTED_MODULE_1__.Z,{f:!0,color:color}))},WithSegmentG=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_DigitalDigitRaw__WEBPACK_IMPORTED_MODULE_1__.Z,{g:!0,color:color}))};let __namedExportsOrder=["WithNoSegmentHighlighted","WithSegmentA","WithSegmentB","WithSegmentC","WithSegmentD","WithSegmentE","WithSegmentF","WithSegmentG"]},"./src/DigitalDigitRaw.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _iterableToArrayLimit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}}function _nonIterableRest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}__webpack_require__.d(__webpack_exports__,{Z:()=>src_DigitalDigitRaw});var react=__webpack_require__("./node_modules/react/index.js"),vel=function(x,y,color,opacitySegment,filled){return react.createElement("polygon",{points:getPoints(x,y,[[0,10],[0,50],[10,60],[20,50],[20,10],[10,0]]),style:getStyle(color,opacitySegment,filled)})},hel=function(x,y,color,opacitySegment,filled){return react.createElement("polygon",{points:getPoints(x,y,[[10,0],[50,0],[60,10],[50,20],[10,20],[0,10]]),style:getStyle(color,opacitySegment,filled)})},getPoints=function(x,y,points){var str="";return points.forEach(function(_ref2){var _ref3=_slicedToArray(_ref2,2),xx=_ref3[0],yy=_ref3[1];return str+="".concat(xx+x,",").concat(yy+y," ")}),str},getStyle=function(color,opacitySegment,filled){return{fill:filled?color:"none",opacity:filled?1:void 0===opacitySegment?.3:opacitySegment,stroke:color,strokeWidth:1}};let src_DigitalDigitRaw=function(_ref){var a=_ref.a,b=_ref.b,c=_ref.c,color=_ref.color,d=_ref.d,e=_ref.e,f=_ref.f,g=_ref.g,opacitySegment=_ref.opacitySegment;return react.createElement("svg",{height:"100%",viewBox:"-1 -1 88 146"},hel(13,0,color,opacitySegment,a),vel(0,11,color,opacitySegment,b),vel(66,11,color,opacitySegment,c),hel(13,62,color,opacitySegment,d),vel(0,73,color,opacitySegment,e),vel(66,73,color,opacitySegment,f),hel(13,124,color,opacitySegment,g))}}}]);