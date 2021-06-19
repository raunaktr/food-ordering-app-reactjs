const baseUrl = "http://localhost:8080/api";
/**
 * @endpopints login, logout, signup, restaurant, address and payment
 *  */
let LOGIN_CUSTOMER = baseUrl + "/customer/login";
let LOGOUT_CUSTOMER = baseUrl + "/customer/logout";
let REGISTER_CUSTOMER = baseUrl + "/customer/signup";
let GET_ALL_RESTAURANT = baseUrl + "/restaurant";
let RESTAURANT_BY_ID = baseUrl + "/restaurant/";
let CHECKOUT_CUSTOMER_ADDRESS = baseUrl + "/address/customer";
let CHECKOUT_ALL_STATES = baseUrl + "/states";
let CHECKOUT_ADD_ADDRESS = baseUrl + "/address";
let CHECKOUT_PAYMENT = baseUrl + "/payment";
let CHECKOUT_SAVE_ORDER = baseUrl + "/order";

/**
 * @export endpoints
 *  */
export const LOGIN_CUSTOMER_URL = LOGIN_CUSTOMER;
export const REGISTER_CUSTOMER_URL = REGISTER_CUSTOMER;
export const LOGOUT_CUSTOMER_URL = LOGOUT_CUSTOMER;
export const GET_ALL_RESTAURANT_URL = GET_ALL_RESTAURANT;
export const RESTAURANT_BY_ID_URL = RESTAURANT_BY_ID;
export const CHECKOUT_CUSTOMER_ADDRESS_URL = CHECKOUT_CUSTOMER_ADDRESS;
export const CHECKOUT_ALL_STATES_URL = CHECKOUT_ALL_STATES;
export const CHECKOUT_ADD_ADDRESS_URL = CHECKOUT_ADD_ADDRESS;
export const CHECKOUT_PAYMENT_URL = CHECKOUT_PAYMENT;
export const CHECKOUT_SAVE_ORDER_URL = CHECKOUT_SAVE_ORDER;
