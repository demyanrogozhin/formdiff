require.config({
    paths: {
        jquery: "../bower_components/jquery/jquery"
    },
    shim: {
        "formsdiff": {
            deps: ['jquery'],
            exports: 'formDiffApp'
        }
    }
});

require(["formsdiff", "jquery"], function (app, $) {
    "use strict";
    // use app here
    console.log("Starting App", typeof app);
    app( "#forms" );
});
