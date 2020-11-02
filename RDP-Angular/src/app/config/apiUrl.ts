import { environment } from 'src/environments/environment';


/**
 * consists of all urls to be used in the application based on environment
 */
export const baseUrl = environment.production ? '' : 'http://localhost:57970/';
export const getControlsUrl = baseUrl + 'GetControls';
export const postCustomerUrl = baseUrl + 'AddCustomer';
export const getCustomersUrl = baseUrl + 'GetCustomers';
export const getCustomerByIdUrl = baseUrl + 'GetCustomerById/';
