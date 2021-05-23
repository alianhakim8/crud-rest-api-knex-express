# CRUD REST API NODE JS WITH KNEXJS
### Layer Architecture

<p align="center" width="100%">
    <img width="100%%" src="https://github.com/Ilyasyasin072/rest-api-express/blob/main/Layers.png"> 
</p>
## REQUIREMENT LIBRARY

- [nodejs](https://nodejs.org/en/)
- [knexjs](http://knexjs.org/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://expressjs.com/)
- [express-group-routes](https://www.npmjs.com/package/express-group-routes)
- [mysql](https://www.npmjs.com/package/mysql)
- [objection](https://vincit.github.io/objection.js/guide/query-examples.html#delete-queries)
- [objection-soft-delete](https://github.com/griffinpp/objection-soft-delete)
- [nodemon](https://www.npmjs.com/package/nodemon)


# RESULT 

### User 

- Request 
    - Method : GET
        - Endpoint : /api/v1/users/
        - Header:
            - Content-Type: application/json
    - Body: -

- Result : 

    ```
       [
  {
    "id": 1,
    "name": "Alian Hakim",
    "email": "Alianhakim8@gmail.com",
    "password": "$2y$10$q0uRVSVnCV56on3luo/CleEf2deQgrhcm5qzFP.C6.uf3kwjlWNBO",
    "email_verify": null,
    "status": "customer",
    "created_at": "2021-05-15T23:03:37.000Z",
    "updated_at": "2021-05-15T23:03:37.000Z",
    "deleted_at": null,
    "customer": {
      "id": 1,
      "id_user": 1,
      "first_name": "Alian",
      "last_name": "Hakim",
      "address": "Jl.Ciwaruga",
      "phone": "123",
      "city": "Bandung",
      "gender": "L"
    }
  },
  {
    "id": 2,
    "name": "Ilyas Yasin",
    "email": "Ilyasyasin8@gmail.com",
    "password": "$2y$10$P9aJFRcmMLWkhjAc3./iCOMz6Gktw5Rl65WMJ651XplF28dDAeaOe",
    "email_verify": null,
    "status": "admin",
    "created_at": "2021-05-15T23:27:34.000Z",
    "updated_at": "2021-05-15T23:27:34.000Z",
    "deleted_at": null,
    "customer": null
  },
       ]
    ```
### Fleets
- Request
    - Method : GET
        - Endpoint : /api/v1/fleet/show/{id}
        - Header:
            - Content-Type: application/json
    - Body: -

- [with Eager loading](https://vincit.github.io/objection.js/guide/query-examples.html#eager-loading)
- Result
    ```
        [
            {
                "id": 2,
                "plat_number": "123123",
                "type": "1",
                "photo": "-",
                "user_id": 5,
                "created_at": null,
                "updated_at": null,
                "user": {
                    "id": 5,
                    "name": "",
                    "identity_id": "022154",
                    "gender": "1",
                    "address": "Bandung",
                    "photo": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_São_Paulo_Zoo.jpg",
                    "email": "aa@gmail.com",
                    "password": "$2y$10$tcnTdFV0UrjyMPsdLzRxqugtazpTTf6ebPA0S7aRfQ4pMnJ4.qkkW",
                    "phone_number": "12312",
                    "api_token": null,
                    "reset_token": "UTNbo4BCT61OCyGoYgDfqKrZY8gFch3rQeqb3XJ8",
                    "reset_password": null,
                    "role": "1",
                    "status": 1,
                    "created_at": "2021-02-16T07:34:59.000Z",
                    "updated_at": "2021-02-18T06:20:25.000Z"
                }
            }
        ]
    ```

## REFERENCES

[Project Structure For an Express REST API](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way)