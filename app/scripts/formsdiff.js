// Form Difference App
// 
var formDiffApp = function( $ ){

    var FormDiffApp = function( el, formA, formB ){
        "use strict";

        var el = $( el ),
            formA = $( formA ),
            formB = $( formB ),
            formsFound,
            diffPanel = $( "<div class='" + informerClassName + "'></div>" );

        // If forms not passed to app directly, found forms in root container
        if ( formB.length + formA.length >= 1 ){
            formsFound = el.find( "form" );
            if ( formsFound.length >= 2 ){
                !formB.length
                    && ( formB = $( formsFound[ formA.length ? 0 : 1 ]));
                !formA.length
                    && ( formA = $( formsFound[ 0 ]));

            } else if ( formsFound.length === 1 ) {
                if ( !( formA.length || formB.length  ) ){
                    throw new Error( "Can't find two forms" );
                } else {
                    formA.length
                        ? ( formB = formsFound[ 0 ] )
                        : ( formA = formsFound[ 0 ] );
                }
            } else {
                // No arguments passed in app or not enugh form-elements in root container
                throw new Error( "Can't find two forms" );
            }
        };
        
        console.log( formA );
        el.append( diffPanel );

        $( formA, formB ).change( updateDiff );

        function updateDiff(){
            var a = formA.serializeArray(),
                b = formB.serializeArray();
            console.log( a,b );
        };
    },
        informerClassName = "formDiffContainer";

    
    $.fn.formDiff = function( action, formA, formB ){
        if ( typeof action === "undefined" || action === "setup" ) {
            var app = new FormDiffApp( this, formA, formB );
        } else if ( action === "teardown" ) {
            this.find( informerClassName ).remove();
        }

        return this;
    };

    return FormDiffApp;
}( jQuery );
