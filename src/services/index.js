export const isRequired = value => (!value && "Is required");

export const isNumber = value => (isNaN(Number(value)) && "Not is a number");

export const minLength = (value, min) => (value && value.length >= min && `Min length ${min}`);

export const parseNumber = value => value && parseInt(value);

export const toLower = value => value && value.toLowerCase();

export const toUpper = value => value && value.toUpperCase();

export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

export const capitalizeSubStr = string => {
    if (!string)
        return string;
    let arr = string.split(' ');
    let newArr = '';
    arr.forEach((item, index, array) => { array[index] = capitalize(item) })
    arr.forEach((item, index, array) => {
        newArr += item;
        newArr += index === array.length - 1 ? "" : " ";
    });
    return newArr;
};

export const validateKeys = (values = {}, keys = []) => {
    let error = {};

    for (const key of keys) {
        if (!values[key]) {
            error[key] = `${capitalize(key)} is required`;
        }
    }

    return error;
};

export const onlyGrow = (value, prevValue, values) =>
    value && (!prevValue ? value : (value > prevValue ? value : prevValue));
