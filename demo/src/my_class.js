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
     * @param {string} [desc = ''] long description long long long long long long long long
     * @example
     * const myClass = new MyClass();
     * myClass.setDesc('blablabla');
     * @example <caption>example2</caption>
     * myClass.setDesc('lalala');
     */
    setDesc(desc = '') {
        this.desc = desc;
    }

    /**
     * @returns {Date}
     */
    static getDate() {
        return new Date();
    }
}

/**
 * Member 1
 * @static
 * @type {number}
 * @memberof MyClass
 */
MyClass.member1 = 1;

/**
 * Member 2
 * @static
 * @type {number}
 * @memberof MyClass
 */
MyClass.member2 = 2;

/**
 * @class MyChildClass
 * @extends MyClass
 */
class MyChildClass extends MyClass {
    /**
     * @override
     * @returns 'no this man'
     */
    getName() {
        return 'no this man';
    }
}
