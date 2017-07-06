System.register(['angular2/platform/browser', './deneme'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, deneme_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (deneme_1_1) {
                deneme_1 = deneme_1_1;
            }],
        execute: function() {
            //bootstrap(AppComponent);
            browser_1.bootstrap(deneme_1.deneme);
        }
    }
});
//# sourceMappingURL=main.js.map