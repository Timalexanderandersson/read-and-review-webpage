import { rest } from 'msw';
// Base URL to API 
export const baseURL = 'https://read-review-django-api-b8922a0fef0a.herokuapp.com/'
// Handling mock API response
export const handling = [
    // Get request to the API
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return (res.json({
            "pk": 13,
            "username": "timandersson",
            "email": "",
            "first_name": "",
            "last_name": ""
            }))
    }),
    // POST request to API
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200))
    })
]