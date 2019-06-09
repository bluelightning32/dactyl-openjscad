/* 
 * Copied from https://github.com/mauriciopoppe/point-line-distance.
 * Copyright (c) 2015 Mauricio Poppe
 * Licensed under the MIT license.
 */

var distanceSquared = function (p, a, b) {
  // // == vector solution
  // var normalize = require('gl-vec3/normalize')
  // var scaleAndAdd = require('gl-vec3/scaleAndAdd')
  // var dot = require('gl-vec3/dot')
  // var squaredDistance = require('gl-vec3/squaredDistance')
  // // n = vector `ab` normalized
  // var n = []
  // // projection = projection of `point` on `n`
  // var projection = []
  // normalize(n, subtract(n, a, b))
  // scaleAndAdd(projection, a, n, dot(n, p))
  // return squaredDistance(projection, p)

  // == parallelogram solution
  //
  //            s
  //      __a________b__
  //       /   |    /
  //      /   h|   /
  //     /_____|__/
  //    p
  //
  //  s = b - a
  //  area = s * h
  //  |ap x s| = s * h
  //  h = |ap x s| / s
  //
  var ab = []
  var ap = []
  var cr = []
  gl_vec3.subtract(ab, b, a)
  gl_vec3.subtract(ap, p, a)
  var area = gl_vec3.squaredLength(gl_vec3.cross(cr, ap, ab))
  var s = gl_vec3.squaredLength(ab)
  if (s === 0) {
    throw Error('a and b are the same point')
  }
  return area / s
}

pointLineDistance = function (point, a, b) {
  return Math.sqrt(distanceSquared(point, a, b))
}
