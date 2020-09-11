"use strict";
var App;
(function (App) {
    // Autobind decorator
    function autobind(_target, _methodName, descriptor) {
        const originalMethod = descriptor.value;
        const adjastedDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            },
        };
        return adjastedDescriptor;
    }
    App.autobind = autobind;
})(App || (App = {}));
