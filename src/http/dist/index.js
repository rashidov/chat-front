"use strict";
exports.__esModule = true;
exports.API_URL = void 0;
var axios_1 = require("axios");
exports.API_URL = 'http://127.0.0.1:5000/api';
var $api = axios_1["default"].create({
    withCredentials: true,
    baseURL: exports.API_URL
});
$api.interceptors.request.use(function (config) {
    config.headers.Authorization = "Bearer " + localStorage.getItem('token');
    return config;
});
exports["default"] = $api;
