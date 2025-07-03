# Projeto de Exemplo: Clean Code + SOLID + Object Calisthenics

Este projeto foi criado para demonstrar como aplicar boas práticas em projetos TypeScript seguindo:

- ✅ **SOLID**
- ✅ **Clean Code**
- ✅ **Object Calisthenics**

## Estrutura

- `domain/`: Entidades e objetos de valor com validações encapsuladas
- `application/`: Use cases desacoplados da infraestrutura
- `infrastructure/`: Implementações concretas (ex: banco, APIs)
- `interfaces/`: Adaptadores (ex: HTTP)
- `shared/`: Funções utilitárias reutilizáveis

## Princípios aplicados

- SRP: Cada classe tem uma responsabilidade única
- OCP: Novo comportamento pode ser adicionado sem modificar o antigo
- DIP: Inversão de dependência via interfaces
- Calisthenics: Evitamos `else`, usamos objetos em vez de primitivos, métodos pequenos e nomes claros
- Clean Code: Legibilidade, funções pequenas, sem duplicação

## Execução

```bash
npm install
ts-node src/main.ts
