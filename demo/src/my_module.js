/**
 * @module my_module
 */

 /**
  * add one...
  * @category module
  * @param {number} [num = 0]
  * @returns {number}
  */
const addOne = function (num = 0) {
    return num + 1;
}

/**
 * @class
 * @property {string} xxx
 */
const Foo = function () {
    this.xxx = 'xxx'
};
export default { addOne, Foo };