var BookIt = BookIt || {};

BookIt.SignUpController = function () {

    this.$signUpPage = null;
    this.$btnSubmit = null;
    this.$ctnErr = null;
    this.$txtName = null;
	this.$txtAge = null;
	this.$txtGender = null;
    this.$txtEmailAddress = null;
    this.$txtPassword = null;
    this.$txtPasswordConfirm = null;
};

BookIt.SignUpController.prototype.init = function () {
    this.$signUpPage = $("#page-signup-email");
    this.$btnSubmit = $("#btn-submit", this.$signUpPage);
    this.$ctnErr = $("#ctn-err", this.$signUpPage);
    this.$txtName = $("#name", this.$signUpPage);
	this.$txtAge = $("#age", this.$signUpPage);
	this.$txtGender = $("#gender", this.$signUpPage);
    this.$txtEmailAddress = $("#email", this.$signUpPage);
    this.$txtPassword = $("#password", this.$signUpPage);
    this.$txtPasswordConfirm = $("#password1", this.$signUpPage);
};

BookIt.SignUpController.prototype.passwordsMatch = function (password, passwordConfirm) {
    return password === passwordConfirm;
};

BookIt.SignUpController.prototype.passwordIsComplexNumber = function (password) {
	 re = /[0-9]/;
     if(re.test(password)) {
        return true;
     }
};

BookIt.SignUpController.prototype.passwordIsComplexCapitalLetter = function (password) {
	 re = /[A-Z]/;
     if(re.test(password)) {
		return true;
     }
};

BookIt.SignUpController.prototype.passwordIsComplexSmallLetter = function (password) {
	 re = /[a-z]/;
     if(re.test(password)) {
       return true;
     }
};

BookIt.SignUpController.prototype.passwordIsComplexLength = function (password) {
     if(password.length >= 6) {
       return true;
     }
};

BookIt.SignUpController.prototype.emailAddressIsValid = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

BookIt.SignUpController.prototype.resetSignUpForm = function () {

    var invisibleStyle = "bi-invisible",
        invalidInputStyle = "bi-invalid-input";

    this.$ctnErr.html("");
    this.$ctnErr.removeClass().addClass(invisibleStyle);
    this.$txtName.removeClass(invalidInputStyle);
	this.$txtAge.removeClass(invalidInputStyle);
    this.$txtEmailAddress.removeClass(invalidInputStyle);
    this.$txtPassword.removeClass(invalidInputStyle);
    this.$txtPasswordConfirm.removeClass(invalidInputStyle);

    this.$txtName.val("");
	this.$txtAge.val("");
    this.$txtEmailAddress.val("");
    this.$txtPassword.val("");
    this.$txtPasswordConfirm.val("");

};

BookIt.SignUpController.prototype.onSignupCommand = function () {

    var me = this,
        name = me.$txtName.val().trim(),
		age = me.$txtAge.val().trim(),
		gender = me.$txtGender.val().trim(),
        emailAddress = me.$txtEmailAddress.val().trim(),
        password = me.$txtPassword.val().trim(),
        passwordConfirm = me.$txtPasswordConfirm.val().trim(),
        invalidInput = false,
        invisibleStyle = "bi-invisible",
        invalidInputStyle = "bi-invalid-input";

    // Reset styles.
    me.$ctnErr.removeClass().addClass(invisibleStyle);
    me.$txtName.removeClass(invalidInputStyle);
	me.$txtAge.removeClass(invalidInputStyle);
    me.$txtEmailAddress.removeClass(invalidInputStyle);
    me.$txtPassword.removeClass(invalidInputStyle);
    me.$txtPasswordConfirm.removeClass(invalidInputStyle);

    // Flag each invalid field.
    if (name.length === 0) {
        me.$txtName.addClass(invalidInputStyle);
        invalidInput = true;
    }
	if (age.length === 0) {
        me.$txtAge.addClass(invalidInputStyle);
        invalidInput = true;
    }
    if (emailAddress.length === 0) {
        me.$txtEmailAddress.addClass(invalidInputStyle);
        invalidInput = true;
    }
    if (password.length === 0) {
        me.$txtPassword.addClass(invalidInputStyle);
        invalidInput = true;
    }
    if (passwordConfirm.length === 0) {
        me.$txtPasswordConfirm.addClass(invalidInputStyle);
        invalidInput = true;
    }

    // Make sure that all the required fields have values.
    if (invalidInput) {
        me.$ctnErr.html("<p>Error: Please enter all the required fields!</p>");
        me.$ctnErr.addClass("bi-ctn-err").slideDown();
		$('html, body').animate({ scrollTop: 0 }, 'slow');
        return;
    }

    if (!me.emailAddressIsValid(emailAddress)) {
        me.$ctnErr.html("<p>Error: Please enter a valid email address!</p>");
        me.$ctnErr.addClass("bi-ctn-err").slideDown();
        me.$txtEmailAddress.addClass(invalidInputStyle);
		$('html, body').animate({ scrollTop: 0 }, 'slow');
        return;
    }

    if (!me.passwordsMatch(password, passwordConfirm)) {
        me.$ctnErr.html("<p>Error: Your passwords don't match!</p>");
        me.$ctnErr.addClass("bi-ctn-err").slideDown();
        me.$txtPassword.addClass(invalidInputStyle);
        me.$txtPasswordConfirm.addClass(invalidInputStyle);
		$('html, body').animate({ scrollTop: 0 }, 'slow');
        return;
    }
	
	if (!me.passwordIsComplexLength(password)) {
        me.$ctnErr.html("<p>Error: Password must contain at least six(6) characters!</p>");
        me.$ctnErr.addClass("bi-ctn-err").slideDown();
        me.$txtPassword.addClass(invalidInputStyle);
        me.$txtPasswordConfirm.addClass(invalidInputStyle);
		$('html, body').animate({ scrollTop: 0 }, 'slow');
        return;
    }
	
	if (!me.passwordIsComplexSmallLetter(password)) {
        me.$ctnErr.html("<p>Error: Password must contain at least one lowercase letter (a-z)!</p>");
        me.$ctnErr.addClass("bi-ctn-err").slideDown();
        me.$txtPassword.addClass(invalidInputStyle);
        me.$txtPasswordConfirm.addClass(invalidInputStyle);
		$('html, body').animate({ scrollTop: 0 }, 'slow');
        return;
    }
	
	if (!me.passwordIsComplexCapitalLetter(password)) {
        me.$ctnErr.html("<p>Error: Password must contain at least one uppercase letter (A-Z)!</p>");
        me.$ctnErr.addClass("bi-ctn-err").slideDown();
        me.$txtPassword.addClass(invalidInputStyle);
        me.$txtPasswordConfirm.addClass(invalidInputStyle);
		$('html, body').animate({ scrollTop: 0 }, 'slow');
        return;
    }

    if (!me.passwordIsComplexNumber(password)) {
        me.$ctnErr.html("<p>Error: Password must contain at least one number (0-9)!</p>");
        me.$ctnErr.addClass("bi-ctn-err").slideDown();
        me.$txtPassword.addClass(invalidInputStyle);
        me.$txtPasswordConfirm.addClass(invalidInputStyle);
		$('html, body').animate({ scrollTop: 0 }, 'slow');
        return;
    }

    $.ajax({
        type: 'POST',
        url: BookIt.Settings.signUpUrl,
        data: "email=" + emailAddress + "&name=" + name + "&password=" + password + "&age=" + age + "&gender=" + gender,
        success: function (data) {
			console.log(data.status);
			if(data.status == 1){
				me.$ctnErr.html("<p>Error: Email already exists!</p>");
				me.$ctnErr.addClass("bi-ctn-err").slideDown();
				me.$txtPassword.addClass(invalidInputStyle);
				me.$txtPasswordConfirm.addClass(invalidInputStyle);
				$('html, body').animate({ scrollTop: 0 }, 'slow');
				return;
			}else{
				$.mobile.navigate("#page-signup-succeeded");
				return;
			}
        },
        error: function (data) {
			console.log(data.status);
            // TODO: Use a friendlier error message below.
            me.$ctnErr.html(data.status);
            me.$ctnErr.addClass("bi-ctn-err").slideDown();
			$('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });
};