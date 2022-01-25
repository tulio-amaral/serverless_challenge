# Serverless Challenge

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).


## Instalação

> **Requerimentos**: NodeJS `lts/fermium (v.14.15.0)`. Se você usar o nvm [nvm](https://github.com/nvm-sh/nvm), rode `nvm use` para garantir que você esteja na mesma versão que o lambda. <br/> `Serverless framework`: para instalar basta executar `npm install -g serverless` 

## Baixando o projeto

- Rode `https://github.com/tulio-amaral/serverless_challenge.git` para baixar o projeto do GitHub            

## Iniciando o server

- Rode `yarn` para instalar as dependências
- Rode `yarn dynamodb:install` para instalar o dynamoDB localmente
- Rode `yarn dynamodb:start` para iniciar o dynamoDB localmente
- Rode `yarn dev` para inicializar o servidor localmente
- Rode `yarn test` para inicializar os testes

## Chamando os end-points

Ao inicializar o servidor localmente, será disponibilizado o endereço como baseURL `http://localhost:3000/dev` para ser chamado.

- Para criar um novo usuário, deve enviar uma requisição do tipo POST para `http://localhost:3000/dev/users` com um JSON contendo as informações de `name, age, role`

- Para buscar informações sobre todos os usuarios, enviar uma requisição do GET para `http://localhost:3000/dev/users`

- Para buscar informações sobre um usuário, enviar uma requisição do tipo GET para `http://localhost:3000/dev/users/:userId`, onde userId é o ID do usuário

- Para deletar informações sobre um usuário, enviar uma requisição do tipo DELETE para `http://localhost:3000/dev/users/:userId`, onde userId é o ID do usuário

- Para atualizar informações sobre um usuário, enviar uma requisição do tipo PUT para `http://localhost:3000/dev/users/:userId`, onde userId é o ID do usuário. Enviar junto à requisição um JSON contendo as informações de `name, age, role`
