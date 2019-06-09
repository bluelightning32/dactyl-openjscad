/*
This was copied from https://github.com/stackgl/gl-vec3

Copyright (c) 2013 Brandon Jones, Colin MacKenzie IV

This software is provided 'as-is', without any express or implied
warranty. In no event will the authors be held liable for any damages
arising from the use of this software.

Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:

 1. The origin of this software must not be misrepresented you must not
    claim that you wrote the original software. If you use this software
    in a product, an acknowledgment in the product documentation would be
    appreciated but is not required.

 2. Altered source versions must be plainly marked as such, and must not
    be misrepresented as being the original software.

 3. This notice may not be removed or altered from any source distribution.
*/

gl_vec3 = function () {
    /**
     * Subtracts vector b from vector a
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    gl_vec3.subtract = function(out, a, b) {
        out[0] = a[0] - b[0]
        out[1] = a[1] - b[1]
        out[2] = a[2] - b[2]
        return out
    }

    /**
     * Calculates the squared length of a vec3
     *
     * @param {vec3} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    gl_vec3.squaredLength = function(a) {
        var x = a[0],
            y = a[1],
            z = a[2]
        return x*x + y*y + z*z
    }

    /**
     * Computes the cross product of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    gl_vec3.cross = function(out, a, b) {
        var ax = a[0], ay = a[1], az = a[2],
            bx = b[0], by = b[1], bz = b[2]

        out[0] = ay * bz - az * by
        out[1] = az * bx - ax * bz
        out[2] = ax * by - ay * bx
        return out
    }

    /**
     * Normalize a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to normalize
     * @returns {vec3} out
     */
    gl_vec3.normalize = function(out, a) {
        var x = a[0],
            y = a[1],
            z = a[2]
        var len = x*x + y*y + z*z
        if (len > 0) {
            //TODO: evaluate use of glm_invsqrt here?
            len = 1 / Math.sqrt(len)
            out[0] = a[0] * len
            out[1] = a[1] * len
            out[2] = a[2] * len
        }
        return out
    }

    /**
     * Calculates the dot product of two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} dot product of a and b
     */
    gl_vec3.dot = function(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
    }

    /**
     * Copy the values from one vec3 to another
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the source vector
     * @returns {vec3} out
     */
    gl_vec3.copy = function(out, a) {
        out[0] = a[0]
        out[1] = a[1]
        out[2] = a[2]
        return out
    }

    /**
     * Adds two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    gl_vec3.add = function(out, a, b) {
        out[0] = a[0] + b[0]
        out[1] = a[1] + b[1]
        out[2] = a[2] + b[2]
        return out
    }

    /**
     * Calculates the length of a vec3
     *
     * @param {vec3} a vector to calculate length of
     * @returns {Number} length of a
     */
    gl_vec3.vec3_length = function(a) {
        var x = a[0],
            y = a[1],
            z = a[2]
        return Math.sqrt(x*x + y*y + z*z)
    }

    /**
     * Scales a vec3 by a scalar number
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec3} out
     */
    gl_vec3.scale = function(out, a, b) {
        out[0] = a[0] * b
        out[1] = a[1] * b
        out[2] = a[2] * b
        return out
    }
}
