const express =require('express');
const fs =  require ('fs');
const path =require('path');
const app = express();
const port =80;
app.use(express.urlencoded({ extended: true }));
app.use('/static',express.static('static'));
app.set('veiw-engine','pug');

app.set('views',path.join(__dirname,'templates'));

app.get('/',(req,res)=>{
    res.render('index1.pug');
});


app.post('/contact',(req,res)=>{
    console.log(req.body);
     Name1=req.body.Name;
     fs.writeFileSync("out.txt",Name1)
     console.log(Name1);
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
}
)