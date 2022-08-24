function Validator(options) {
    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var selectorRules = {}
    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        var errorMessage;
        // var errorMessage = rule.test(inputElement.value)
        // lấy ra các rule của selector
        var rules = selectorRules[rule.selector]
        // lặp qua các rule và kiểm tra
        for (var i = 0; i < rules.length; ++i) {
            switch(inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            // Nếu có lỗi thì dừng kiểm tra
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        } else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }
        return !errorMessage
    }
    // lấy element của form validate
    var formElement = document.querySelector(options.form)
    if (formElement) {
        formElement.onsubmit = function (e) {
            // khi submit
            e.preventDefault()
            var isFormValid = true;
            // lặp qua từng rule và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if(!isValid) {
                    isFormValid = false
                }
            });
            if(isFormValid) {
                if(typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        switch(input.type){
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                                break
                            case 'checkbox':
                                if(!input.matches(':checked')){
                                    values[input.name] = ''
                                }
                                if(!Array.isArray(values[input.value])){
                                    values[input.name] = []
                                }
                                values[input.name].push(input.value)
                                break
                            case 'file':
                                values[input.name] = input.files
                                break
                            default:
                                values[input.name] = input.value
                        }
                        return values
                    }, {})
                    options.onSubmit(formValues)
                }
            }
        }
        options.rules.forEach(function (rule) {
            

            // Lưu lại các rule trong mỗi input
            // selectorRules[rule.selector] = rule.test;
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                // trường hợp blur ra khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }
                // khi nhập input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)

                    errorElement.innerText = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }

            }
            // var inputElements = formElement.querySelectorAll(rule.selector)
            // Array.from(inputElements).forEach(function (inputElement) {
            //     if (inputElement) {
            //         // trường hợp blur ra khỏi input
            //         inputElement.onblur = function () {
            //             validate(inputElement, rule)
            //         }
            //         // khi nhập input
            //         inputElement.oninput = function () {
            //             var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)

            //             errorElement.innerText = ''
            //             getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
            //         }

            //     }
            // })
        })
    }
}
// định nghĩa rules
// nguyên tắc của rules:
// khi có lỗi tạo re mes lỗi
//  khi không có lỗi không trả gì cả (undefined)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này!'
        }
    }
}
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email!'
        }
    }
}
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiếu ${min} ký tự!`
        }
    }
}
Validator.isComfirmed = function (selector, getComfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getComfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}