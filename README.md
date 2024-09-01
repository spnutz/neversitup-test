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

### Convention
1. **Naming Conventions**:
   - **Modules**: Use PascalCase for module names (e.g., `UsersModule`).
   - **Controllers**: Use PascalCase for controller names and suffix with `Controller` (e.g., `UsersController`).
   - **Services**: Use PascalCase for service names and suffix with `Service` (e.g., `UsersService`).
   - **DTOs**: Use PascalCase for Data Transfer Object names and suffix with `Dto` (e.g., `CreateUsersDto`).

2. **File Organization**:
   - Group related files by feature or domain.
   - Each module should contain its own `module.ts`, `controller.ts`, `service.ts`, `interfaces/`,and a `dto/`.

