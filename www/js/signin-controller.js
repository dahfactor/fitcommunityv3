var BookIt = BookIt || {};

BookIt.SignInController = function () {

    this.$signInPage = null;
    this.$btnsigninSubmit = null;
    this.$ctnsigninErr = null;
    this.$txtEmail = null;
	this.$txtPasswordSign_In = null;
};

BookIt.SignInController.prototype.init = function () {
    this.$signInPage = $("#page-signin");
    this.$btnsigninSubmit = $("#btn-submit-signin", this.$signInPage);
    this.$ctnsigninErr = $("#ctn-err-signin", this.$signInPage);
    this.$txtEmail = $("#email-signin", this.$signInPage);
	this.$txtPasswordSign_In = $("#password-signin", this.$signInPage);
};

BookIt.SignInController.prototype.emailAddressIsValid = function (email_signin) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email_signin);
};

BookIt.SignInController.prototype.resetSignInForm = function () {

    var invisibleStyle = "bi-invisible",
        invalidInputStyle = "bi-invalid-input";

    this.$ctnsigninErr.html("");
    this.$ctnsigninErr.removeClass().addClass(invisibleStyle);
    this.$txtEmail.removeClass(invalidInputStyle);
	this.$txtPasswordSign_In.removeClass(invalidInputStyle);

    this.$txtEmail.val("");
	this.$txtPasswordSign_In.val("");

};

BookIt.SignInController.prototype.onSigninCommand = function () {

    var me = this,
        emailsignin = me.$txtEmail.val().trim(),
		passwordsignin = me.$txtPasswordSign_In.val().trim(),
        invalidInput = false,
        invisibleStyle = "bi-invisible",
        invalidInputStyle = "bi-invalid-input";

    // Reset styles.
    me.$ctnsigninErr.removeClass().addClass(invisibleStyle);
    me.$txtEmail.removeClass(invalidInputStyle);
	me.$txtPasswordSign_In.removeClass(invalidInputStyle);

    // Flag each invalid field.
    if (emailsignin.length === 0) {
        me.$txtEmail.addClass(invalidInputStyle);
        invalidInput = true;
    }
	if (passwordsignin.length === 0) {
        me.$txtPasswordSign_In.addClass(invalidInputStyle);
        invalidInput = true;
    }

    // Make sure that all the required fields have values.
    if (invalidInput) {
        me.$ctnsigninErr.html("<p>Error: Please enter all the required fields!</p>");
        me.$ctnsigninErr.addClass("bi-ctn-err").slideDown();
		$('html, body').animate({ scrollTop: 0 }, 'slow');
        return;
    }

    if (!me.emailAddressIsValid(emailsignin)) {
        me.$ctnsigninErr.html("<p>Error: Please enter a valid email address!</p>");
        me.$ctnsigninErr.addClass("bi-ctn-err").slideDown();
        me.$txtEmail.addClass(invalidInputStyle);
		$('html, body').animate({ scrollTop: 0 }, 'slow');
        return;
    }

    $.ajax({
        type: 'POST',
        url: BookIt.Settings.signInUrl,
		crossDomain: true,
		cache : false,
        data: "email=" + emailsignin + "&password=" + passwordsignin,
        success: function (data) {
			console.log(data.status);
			if(data.status == 0){
				me.$ctnsigninErr.html("<p>Error: Incorrect Email or Password!</p>");
				me.$ctnsigninErr.addClass("bi-ctn-err").slideDown();
				me.$txtEmail.addClass(invalidInputStyle);
				me.$txtPasswordSign_In.addClass(invalidInputStyle);
				$('html, body').animate({ scrollTop: 0 }, 'slow');
				return;
			}else{
				window.sessionStorage.setItem("loggedIn", 1);
				window.sessionStorage.setItem("name", data.name);
				window.location = "home.html";
				return;
			}
        },
        error: function (data) {
			console.log(data.status);
            // TODO: Use a friendlier error message below.
            me.$ctnsigninErr.html(data.status);
            me.$ctnsigninErr.addClass("bi-ctn-err").slideDown();
			$('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });
	return false;
};