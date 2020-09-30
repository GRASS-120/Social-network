export const requiredField = (value) => {
    if(value){ return undefined } ;
    return 'Field is required'
}

// Использование замыкания
export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength){ return `Max length is ${maxLength}` };
    return undefined
}

export const emailValidation = (value) => {
    
}



