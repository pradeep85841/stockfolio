import { createRequire } from "module";
const require = createRequire(import.meta.url);

const {Pool} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'stockfolio',
  password: 'varun',
  port: 5432,
});

pool.connect(function(err){
if(err) throw err;
console.log(`connection to stockfolio DB success`);
});

export default pool;