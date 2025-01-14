import axios from "axios";
/**
 * baseURL settings for the API.
 * defaults.headers.post is settings for POST.
 * defaults.withCredentials for Cookies in CORS.
 */
axios.defaults.baseURL ='https://read-review-django-api-b8922a0fef0a.herokuapp.com/'
axios.defaults.headers.post['Content-type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosRes = axios.create();
export const axiosReq = axios.create();