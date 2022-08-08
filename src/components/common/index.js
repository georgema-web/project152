import { v4 } from 'uuid';

/**
 * Creates guestId in localStorage
 * @returns string of guestid
 */
export const createGuestId = () => {
    if (localStorage.getItem('guestId') === null) {
        localStorage.setItem('guestId', v4());
    }
    return localStorage.getItem('guestId');
};

/**
 * Serialize product options into productId to query Db with
 * @param {} options dict
 * @returns string of format 'option1_value1_option2_value2_...'
 */
export const serializeItem = (options) => {
    let serialString = '';
    for (const [key, value] of Object.entries(options)) {
        serialString += key + '_' + value + '__';
    }
    return serialString;
};

export const unserializeItem = (options) => {};

export const getCart = () => {
    const cartItems = Object.keys(localStorage).filter((key) => key.match(/Product_.*/));
    console.log(Object.keys(localStorage));
    console.log('test', cartItems);
};
