# Projeto de Exemplo: Clean Code + SOLID + Object Calisthenics

Este projeto foi criado para demonstrar como aplicar boas práticas em projetos TypeScript seguindo:

- ✅ SOLID
- ✅ Clean Code
- ✅ Object Calisthenics

## Estrutura

- `domain/`: Entidades e objetos de valor com validações encapsuladas
- `application/`: Use cases desacoplados da infraestrutura
- `infrastructure/`: Implementações concretas (ex: banco, APIs)
- `interfaces/`: Adaptadores (ex: HTTP)
- `shared/`: Funções utilitárias reutilizáveis

## Execução

```bash
npm install
ts-node src/main.ts
```


## Banco de Dados com Sequelize + PostgreSQL

Configure seu banco PostgreSQL local com:

- Banco: `clean_db`
- Usuário: `user`
- Senha: `password`

### Rodar exemplo com banco:

```bash
npm run db
```
