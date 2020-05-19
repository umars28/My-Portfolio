$(document).ready(function() {
        let _form = $('form[name="form-contact"]');
    	if (_form.length > 0) {
        _form.find('.js-submit').on('click', function () {
            var _this = _form.find('input[name="form-contact"]');
            alert('For best response please send me a message !!!!');
        });
    	}
    });
