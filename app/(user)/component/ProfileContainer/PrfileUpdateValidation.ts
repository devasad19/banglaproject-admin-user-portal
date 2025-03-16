

export const ProfileUpdateValidation = (fields:any, errorState:any) => {
    let errors = errorState;
    let isValid = true;

    if(fields.userName === '') {
        errors.name = 'Name is required';
        isValid = false;
    } else {
        errors.name = '';
    }

    if(fields.email === '') {
        errors.email = 'Email is required';
        isValid = false;
    } else {
        errors.email = '';
    }

    if(fields.phone === '') {
        errors.phone = 'Phone is required';
        isValid = false;
    } else {
        errors.phone = '';
    }

    return {isValid, errors};
}