(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.docs = factory());
}(this, (function () { 'use strict';

var main = {
  "data": {
    "id": "glimmer-api docs",
    "type": "docset",
    "attributes": {
      "header": "glimmer",
      "title": "Glimmer API Docs",
      "intro": "<div><p>Welcome to the Glimmer API documentation.</p><p>Choose a project or module from the table of contents to get started.</p></div>",
      "idMap": {}
    },
    "relationships": {
      "docmodules": {
        "data": []
      }
    }
  },
  "included": []
};

return main;

})));
