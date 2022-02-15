const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();
var items =["Buy food","Eat food","cookfood"];
let workitem=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", (req, res) =>{
var today = new Date();
var options ={
  weekDay:"long",
  day:"numeric",
  month:"long"
};
var day = today.toLocaleDateString("en-IN", options);
  res.render("list",{listtitle: day , newItemadd:items});
});

app.post("/",function(req,res){
  var item =req.body.newItem;
  items.push(item);
res.redirect("/");
});

app.get("/work", function(req,res){
  res.render("list",{listtitle: "work list" , newItemadd:workitem});
});
app.post("/work",function(req,res){
  var item =req.body.newItem;
workitem.push(item);
res.redirect("/work");
})


app.listen(5000, function(){

  console.log("this server on the port 5000 is working properly.");

});
