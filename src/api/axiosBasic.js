import axios from "axios";

axios.defaults.baseURL ='https://read-review-django-api-b8922a0fef0a.herokuapp.com/'
axios.defaults.headers.post['Content-type'] = 'multipart/form-data'
axios.defaults.withCredentials = true