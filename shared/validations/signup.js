import Validator from 'validator';
import _isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if ( Validator.isEmpty(data.username) ) {
        errors.username = "This field is required"
    }
    if ( !Validator.isEmail(data.username) ) {
        errors.username = "Email is invalid"
    }
    if ( Validator.isEmpty(data.password) ) {
        errors.password = "This field is required"
    }
    if ( Validator.isEmpty(data.passwordConfirm) ) {
        errors.passwordConfirm = "This field is required"
    }
    if ( !Validator.equals(data.password, data.passwordConfirm) ) {
        errors.passwordConfirm = "Passwords must match"
    }

    return {
        errors,
        isValid: _isEmpty(errors)
    }
}
