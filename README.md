Fazer uma aplicação parecida com o GymPass.

## RFs (Requisitos Funcionais)
- [X] Deve ser possível se cadastrar.
- [X] Deve ser possível se autenticar.
- [X] Deve ser possível obter o perfil de um usuário logado.
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado.
- [x] Deve ser possível o usuário obter seu histórico de check-ins.
- [ ] Deve ser possível o usuário buscar por academias próximas.
- [x] Deve ser possível o usuário buscar academias por nome.
- [x] Deve ser possível o usuário realizar um check-in em uma academia.
- [ ] Deve ser possível validar o check-in do usuário.
- [X] Deve ser possível cadastrar uma academia.

## RNs (Regras de Negócio)
- [X] O usuário não deve poder se cadastrar com um e-mail já existente.
- [x] O usuário não pode fazer 2 check-ins em um mesmo dia.
- [x] O usuário não pode fazer check-in se não estiver a 100 metros da academia.
- [ ] O check-in só pode ser validado até 20 minutos após criado.
- [ ] O check-in só pode ser validado por administradores.
- [ ] A academia só pode ser cadastrada por administradores.

## RNFs (Requisitos Não Funcionais)
- [X] A senha do usuário deve ser criptografada.
- [X] Os dados da aplicação devem ser persistidos em PostgreSQL.
- [X] Todas as listas de dados precisam estar paginadas com 20 itens por página.
- [ ] O usuário deve ser identificado através de JWT.


## Docker
1. Adicionamos imagem da `bitnami/postgresql`, por ter configurações de segurança mais avançadas que a imagem oficial do postgresql.

## Docker Compose
1. Dita quais são os containers que serão utilizados na aplicação. Sem a necessidade de criar tudo manualmente.
1.1. `docker compose up -d` para subir os containers em background.
1.2. `docker compose down` para deletar os containers.
1.3. `docker compose stop` para parar os containers.

## Solid
1. D - Dependency Inversion Principle

## TDD
1. Test Driven Development -> Desenvolvimento guiado por testes.
1.1. Uso altamente recomendado para features maiores, que demandam muitas regras.
2. Red, Green, Refactor
1.2. Red: Escrever um teste que falhe.
1.3. Green: Escrever o mínimo de código que faça o teste passar.
1.4. Refactor: Refatorar o código para melhorar a legibilidade e performance.