/**
 * @namespace my_namespace
 * @category root
 */
window.my_namespace = {};

!function (my_namespace) {
    /**
     * Sample foo
     * @memberof my_namespace
     * @returns {string}
     */
    my_namespace.foo = function () {
        return 'foo';
    };

}(window.my_namespace);

/**
 * Just a child namespace
 * @category child
 * @namespace my_namespace.child_namespace
 */
window.my_namespace.child_namespace = {};

!function (ns) {
    /**
     * Sample bar
     * @name bar
     * @function
     * @memberof my_namespace.child_namespace
     * @returns {string}
     */
    ns.bar = function () {
        return 'bar';
    };

}(window.my_namespace.child_namespace);