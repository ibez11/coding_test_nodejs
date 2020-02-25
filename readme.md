# ```Coding Test```(:fire::fire::fire:);

## Contents
  * [Installation](#installation)


## Installation

```bash
git clone https://github.com/ibez11/coding_test_nodejs
cd coding_test_nodejs
npm install
```
Then,
```bash
node_modules/.bin/sequelize db:migrate
```
Finally run
```bash
npm start
```

If not running
```bash
npm install -g node-dev
```

## List API Url
```bash
1. http://localhost:8000/api/register 

•	Endpoint: POST /api/register
•	Success response status: 204 No Content

2. http://localhost:8000/api/assign

•	Endpoint: POST /api/assign
•	Success response status: 204 No Content

3. http://localhost:8000/api/unassign

•	Endpoint: POST /api/unassign
•	Success response status: 204 No Content

4. http://localhost:8000/api/tasks/common
•	Endpoint: GET /api/tasks/common
•	Success response status: 200
```