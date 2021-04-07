const pool = require("./db");
const sql = 'UPDATE public.assignment SET todo_id = $1, cat_id = $2 WHERE assignment_id=5 RETURNING *';
const data = [6,4];

pool.query (sql,data,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows[0]);
    }
    
    });
    
    pool.end();