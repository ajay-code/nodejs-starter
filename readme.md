## Nodejs Starter

This is a nodejs starter repo with typescript

### Build Requirements

- node >=16.0.0
- Dev requirements
  - typescript (tsc typescript compiler)
  - tsc-alias
  - concurrently
  - nodemon

### Built with

- Nodejs
- Typescript
- Mysql
- Libraries
  - express
  - knexjs

### How to use Nodejs Starter
  1.  git clone https://github.com/ajay-code/nodejs-starter
  2.  npm install
  3.  create .env file. Setup all ENV variables
  4.  npm run genJwtKeys
  5.  npm run migrate
  6.  npm run dev (for development) OR npm run build (to build the project but not run)

### NPM commands available
  - npm run build (compiles TS to JS)
  - npm run start (runs compiled JS files)
  - npm run dev (compile with watch and start the server)
  - npm run migrate (create database tables)
    - setup DB_ ENV variables properly for it to run
  - npm run rollback (rollbacks the created tables in database)