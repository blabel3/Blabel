/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
    $.get('https://gitlab.com/api/v4/users/blabel3/projects', function (data, status) {
        if (status == 0) {
            console.log('Error! :(');
        } else {
            console.log('Made request!');
            addProjects(data);
        }
    }); /*
        fetch('https://gitlab.com/api/v4/users/blabel3/projects').then(
          function(response) {
              console.log(response);
              addProjects(response);
          }
        ).catch(
          function(response) {
              console.log("Request failed :(");
          }
        );*/
});

function addProjects(projects) {
    //console.log(projects)
    for (var i = 0; i < projects.length; i++) {
        console.log(projects[i]);
        $("#project-box").append("\
            <div class=\"project\">\
                <img class=\"project-image\"src=\"" + projects[i].avatar_url + "\" alt=\"Project Image\"  width=\"100dp\"> \
                <h3 class=\"project-name\">" + projects[i].name + "</h3>\
                <p class=\"project-description\">" + projects[i].description + "</p>\
                <div class=\"project-link\">\
                    <a href=\"" + projects[i].web_url + "\"><button class=\"source-button\">\
                    <i class=\"fas fa-code\"></i> see the code\
                    </button></a>\
                </div>\
            </div>");
    }
}

/***/ })
/******/ ]);