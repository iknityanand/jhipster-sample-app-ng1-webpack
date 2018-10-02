// angular
var angular = require('angular');
require('ngstorage');
require('angular-dynamic-locale');
require('angular-translate');
require('angular-resource');
require('angular-cookies');
require('angular-aria');
require('angular-cache-buster');
require('ng-file-upload');
require('angular-ui-bootstrap');
require('angular-ui-bootstrap-datetimepicker');
require('angular-ui-router');
require('ng-infinite-scroll');
require('angular-loading-bar');

angular.module('jhipsterSampleApplicationNg1App', [
    'ngStorage',
    'tmh.dynamicLocale',
    'pascalprecht.translate',
    'ngResource',
    'ngCookies',
    'ngAria',
    'ngCacheBuster',
    'ngFileUpload',
    'ui.bootstrap',
    'ui.bootstrap.datetimepicker',
    'ui.router',
    'infinite-scroll',
    // jhipster-needle-angularjs-add-module JHipster will add new module here
    'angular-loading-bar'
]).run(run);

run.$inject = ['stateHandler', 'translationHandler'];

function run(stateHandler, translationHandler) {
    stateHandler.initialize();
    translationHandler.initialize();
}

module.exports = angular.module('jhipsterSampleApplicationNg1App');
