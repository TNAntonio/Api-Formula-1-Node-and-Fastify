# API Formula 1

API REST de Formula 1 criada com Node.js, TypeScript e Fastify. Disponibiliza dados estáticos sobre equipes e pilotos.

## Como executar

```bash
npm install
npm run start:dev
```

A API estará disponível em `http://localhost:3333`.

## Endpoints

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/teams` | Lista as equipes |
| GET | `/drivers` | Lista os pilotos |
| GET | `/drivers/:id` | Busca um piloto pelo ID |

## Tecnologias

- Node.js
- TypeScript
- Fastify
- CORS