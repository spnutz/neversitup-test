## Project Structure (Nest JS)

```plaintext
.
└── Project/
    └── src/
        ├── main.ts
        ├── app.module.ts
        ├── app.controller.ts # health check
        ├── modules/ # store all module in app
        │   ├── users/
        │   │   ├── dto/
        │   │   │   └── ...
        │   │   ├── interfaces/
        │   │   │   └── ...
        │   │   ├── controllers/
        │   │   │   ├── __test__/
        │   │   │   │   ├── data/
        │   │   │   │   │   └── ...
        │   │   │   │   └── users.controller.spec.ts
        │   │   │   └── users.controller.ts
        │   │   ├── providers/
        │   │   │   ├── __test__/
        │   │   │   │   ├── data/
        │   │   │   │   │   └── ...
        │   │   │   │   └── users.service.spec.ts
        │   │   │   └── users.service.ts
        │   │   └── users.module.ts
        │   └── ...
        ├── config/
        │   ├── app
        │   ├── database
        │   └── ...
        └── common/
            ├── constants/
            │   ├── index.ts
            │   └── ...
            ├── decorators/
            │   ├── index.ts
            │   └── ...
            ├── exceptions/
            │   ├── index.ts
            │   └── ...
            ├── filters/
            │   ├── index.ts
            │   └── ...
            ├── guards/
            │   ├── index.ts
            │   └── ...
            └── entities | schemas/
                ├── index.ts
                └── ...
```
