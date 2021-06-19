import {
    LOGIN_CUSTOMER_URL,
    REGISTER_CUSTOMER_URL,
    LOGOUT_CUSTOMER_URL,
} from "../config/serverurl";
import utility from "./utility";

/**
 * @params This function is used to register user.
 **/
export function registerCustomer(
    contactno,
    email,
    firstname,
    lastname,
    password,
    onComplete
) {
    let responseCallback = (code, response) => {
        onComplete(code, response);
    };

    let requestData = {
        contact_number: contactno,
        email_address: email,
        first_name: firstname,
        last_name: lastname,
        password: password,
    };

    utility.postData(
        { url: REGISTER_CUSTOMER_URL },
        requestData,
        responseCallback,
        null
    );
}

/**
 * @params This function is used to signin user
 *  */
export function loginCustomer(contactno, password, onComplete) {
    let responseCallback = (code, response, responseHeader) => {
        onComplete(code, response, responseHeader);
    };

    let header = {
        authorization: "Basic " + window.btoa(contactno + ":" + password),
    };

    utility.postData(
        { url: LOGIN_CUSTOMER_URL, headers: header },
        null,
        responseCallback,
        null
    );
}

/**
 * @params This function or method is used to logout user
 *
 * @param {*} args=> onExecution
 */
export function logoutCustomer(onExecution) {
    let userInfo = utility.getLoggedinUser();

    let responseCallback = (code, response) => {
        utility.logoutUser();
        onExecution(code, response);
    };

    let header = {
        authorization: "Bearer " + userInfo.access_token,
    };

    utility.postData(
        { url: LOGOUT_CUSTOMER_URL, headers: header },
        null,
        responseCallback,
        null
    );
}
