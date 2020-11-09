## Framework

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Rodando a API

Com Docker rodando na sua máquina:

Crie um .env local copiando o .env.sample e renomeando para .env

```bash
  docker-compose up
```

Isso vai iniciar a api em mode DEV com hotreload habilitado o app roda em http://localhost:3000 ( valor pode ser alterado no .env )

## Tools & Patterns

- **TypeORM** - ORM escolhido por funcionar com TS https://typeorm.io/#/
- **DTO** - Padrão utilizando para validar payloads recebidos pela api, usando class-validator e class-transformer. Alguns exemplos [Aqui](https://docs.nestjs.com/controllers). // TODO implementar uns exemplos

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
