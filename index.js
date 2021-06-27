import express from "express";
const app = express();
import * as fs from 'fs';
import * as path from 'path';

const __dirname = path.resolve(path.dirname(''));
//app.use('/public', express.static(path.join(__dirname, '/public')));

app.use(express.static(path.join(__dirname, 'public')));
const port = 80;


app.get("/",function(req, res){

res.send("Hello Wordl!");
 
})

 


 app.get("*",function(req, res){
     
    var route = req.path;

    var index = path.join(__dirname+'/public'+route+'/index.html');
   // console.log("--------------"); 
    //console.log(index); 
    try {
        if (fs.existsSync(index)) {
          //file exists

          res.render(index);
        } else res.send("404");
      } catch(err) {
        console.error(err)

        res.send("404");
      }

    
     

 })

app.listen(port,()=>{

console.log("listening on port: "+port);

})
