var BookIt = BookIt || {};

// Begin boilerplate code generated with Cordova project.

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {

    }
};

app.initialize();

// End boilerplate code.

$(document).on("mobileinit", function (event, ui) {
    $.mobile.defaultPageTransition = "fade";
});

app.signinController = new BookIt.SignInController();


$(document).on("pagecontainerbeforeshow", function (event, ui) {
    if (typeof ui.toPage == "object") {
        switch (ui.toPage.attr("id")) {
			case "page-signin":
                // Reset the signin form.
                app.signinController.resetSignInForm();
                break;
        }
    }
});

$(document).delegate("#page-signin", "pagebeforecreate", function () {

    app.signinController.init();

    app.signinController.$btnsigninSubmit.off("tap").on("tap", function () {
        app.signinController.onSigninCommand();
    });

});