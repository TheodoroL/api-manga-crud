# API CRUD de Mangá 📖
Esta API foi projetada para gerenciar mangás com operações CRUD (Criar, Ler, Atualizar e Deletar). Ideal para aplicações que precisam manipular dados de mangás de forma simples e eficiente.

## Funcionalidades 🚀
- CREATE: Adicione novos mangás ao seu banco de dados.
- READ: Consulte detalhes sobre mangás existentes.
- UPDATE: Atualize as informações de um mangá.
- DELETE: Remova mangás do seu banco de dados.
## Tecnologias Utilizadas 🛠️
- Express: Framework web para construção de APIs.
- Sequelize: ORM para interagir com o banco de dados.
- Zod: Biblioteca para validação de dados.
- Docker: Plataforma empregada para a configuração e execução de um banco de dados PostgreSQL.

## Como Utilizar? 🚀
Clone o Repositório:


1. primeiramente clona o repositório com git clone https://github.com/TheodoroL/api-manga-crud.git
2. após clonar o repositório, de apenas npm install para instalar as dependencia que é necessária para o uso da api
5. Após fazer isso, sobe o container utilizando o comando docker-compose up -d
4. para questão desenovlvimento, usa o comando npm run dev 
5. para colocar em produção, basta usar o comando npm build.

## Endpoints Disponíveis 📍
Cria um novo mangá.
```http
POST /mangas 
```
Obtém uma lista de todos os mangás.
```
GET /mangas
``` 
Obtém detalhes de um mangá específico.
```http 
GET /mangas/{id}
```
Atualiza todas as informações de um mangá específico.
```http
PUT /mangas/{id}
```
Atualiza pelo menos 1 uma informação especifica do mangá
```http 
PATCH /mangas/{id}
```
Remove um mangá do banco de dados.

```http 
DELETE /mangas/{id}
```
