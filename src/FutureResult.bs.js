// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Future = require("./Future.bs.js");

function mapOk(f, future) {
  return Future.map((function (r) {
                if (r.tag) {
                  return r;
                } else {
                  return Curry._1(f, r[0]);
                }
              }), future);
}

function flatMapOk(f, future) {
  return Future.flatMap((function (r) {
                if (r.tag) {
                  return Future.value(r);
                } else {
                  return Curry._1(f, r[0]);
                }
              }), future);
}

function mapError(f, future) {
  return Future.map((function (r) {
                if (r.tag) {
                  return Curry._1(f, r[0]);
                } else {
                  return r;
                }
              }), future);
}

function flatMapError(f, future) {
  return Future.flatMap((function (r) {
                if (r.tag) {
                  return Curry._1(f, r[0]);
                } else {
                  return Future.value(r);
                }
              }), future);
}

function tapOk(f, future) {
  return Future.tap((function (r) {
                if (r.tag) {
                  return /* () */0;
                } else {
                  Curry._1(f, r[0]);
                  return /* () */0;
                }
              }), future);
}

function tapError(f, future) {
  return Future.tap((function (r) {
                if (r.tag) {
                  Curry._1(f, r[0]);
                  return /* () */0;
                } else {
                  return /* () */0;
                }
              }), future);
}

exports.mapOk = mapOk;
exports.flatMapOk = flatMapOk;
exports.mapError = mapError;
exports.flatMapError = flatMapError;
exports.tapOk = tapOk;
exports.tapError = tapError;
/* No side effect */