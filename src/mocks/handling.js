import { rest } from 'msw';
export const baseURL = 'https://read-review-django-api-b8922a0fef0a.herokuapp.com/'

export const handling = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return (res.json({
            "pk": 13,
            "username": "timandersson",
            "email": "",
            "first_name": "",
            "last_name": ""
            }))
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200))
    })
]