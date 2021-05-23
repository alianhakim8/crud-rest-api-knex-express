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

### Get All User 

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
### Get User Admin
- Request
    - Method : GET
        - Endpoint : /api/v1/users/admin/show/{id}
        - Header:
            - Content-Type: application/json
    - Body: -
- Result
    ```
            {
            "data": {
                "id": 2,
                "name": "Ilyas Yasin",
                "email": "Ilyasyasin8@gmail.com",
                "password": "$2y$10$P9aJFRcmMLWkhjAc3./iCOMz6Gktw5Rl65WMJ651XplF28dDAeaOe",
                "email_verify": null,
                "status": "admin",
                "created_at": "2021-05-15T23:27:34.000Z",
                "updated_at": "2021-05-15T23:27:34.000Z",
                "deleted_at": null,
                "admin": {
                        "id": 1,
                        "id_user": 2,
                        "first_name": "asdasd",
                        "last_name": "asdasd",
                        "city": "asdasd",
                        "level": "karyawan"
                }
            }
            }
    ```
### Get User Customer
- Request
    - Method : GET
        - Endpoint : /api/v1/users/customer/show/{id}
        - Header:
            - Content-Type: application/json
    - Body: -
- Result
    ```
    {
        "data": {
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
        }
    }
    ```

### Add User
- Request
    - Method : POST
        - Endpoint : /api/v1/users/
        - Header:
            - Content-Type: application/json
    - Body: -
- Result
    ```
    {
        "name": "baru4",
        "email": "baru4",
        "password": "baru4",
        "email_verify": "null4",
        "status": "admin",
        "id": 7
    }
    ```
### Update User By Id
- Request
    - Method : PUT
        - Endpoint : /api/v1/users/{id}
        - Header:
            - Content-Type: application/json
    - Body: -
- Result
    ```
    {
        "message": "Update Berhasil"
    }
    ```

### Delete User By Id
- Request
    - Method : DELETE
        - Endpoint : /api/v1/users/{id}
        - Header:
            - Content-Type: application/json
    - Body: -
- Result
    ```
    {
        "message": "Delete Succesful",
        "data": 0,
        "code": 200
    }
    ```

## REFERENCES

[Project Structure For an Express REST API](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way)
(https://github.com/Ilyasyasin072/rest-api-express)