console.log( MyNamespace );
(function ( Namespace ) {
    var local = 'local';

    var Calendar = function (){
        // Instance properties.
    };
    Calendar.prototype.getDay = function (){
        // Code.
    };
    Calendar.prototype.setDay = function (){
        // Code.
    };

    var $ = function ()
    {
        // Collide with jQuery alias $
    };

    // Expose the private/local variables to the namespace.
    Namespace.local = local;
    Namespace.Calendar = Calendar;

}( ( window.MyNamespace = window.MyNamespace || {} ) ) );

console.log()