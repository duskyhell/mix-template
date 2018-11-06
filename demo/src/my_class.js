/**
 * just a class
 * @category class
 * @class
 * @property {string} name
 * @param {string} [desc = '']
 */
class MyClass {
    constructor(desc = '') {
        this.name = 'MyClass';
        this.desc = desc;
    }

    /**
     * get the class name property
     * @deprecated
     * @returns {string}
     */
    getName() {
        return this.name;
    }

    /**
     * set description
     * @param {string} [desc = '']
     * @example
     * const myClass = new MyClass();
     * myClass.setDesc('blablabla');
     * @example <caption>example2</caption>
     * myClass.setDesc('lalala');
     */
    setDesc(desc = '') {
        this.desc = desc;
    }
}