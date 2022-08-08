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
    const arr = [];
    for (const [key, value] of Object.entries(options)) {
        arr.push(`${key}=${value}`);
    }
    return arr.join('&');
};

/**
 * Unserialize product options string into dictionary
 * @param options string of format 'option1_value1_option2_value2_...'
 * @returns options dict
 */
export const unserializeItem = (optionsString) => {
    const dict = {};
    optionsString.split('&').forEach((kvPair) => {
        const kvArr = kvPair.split('=');
        dict[kvArr[0]] = kvArr[1];
    });
    return dict;
};

export const getCart = () => {
    return Object.keys(localStorage).filter((key) => key.match(/Product=.*/));
    /**
     * TODO: we need to verify the flat string with firestore,
     * only ones that are in firestore are allowed to be displayed.
     * We also need to repeat this process right before checkout.
     */
};
