const fs = require("fs");

fs.readFile("users.json", "utf-8", (err,data)=>{
    if(err){
        throw err;
    } else{
        var name = "Sanja";
        var parsedJSON = JSON.parse(data);
        var flag = false;
        for(let i=0; i<parsedJSON.length; i++){
            if(name === parsedJSON[i].name){
                flag = true;
            }
        }
        if(!flag){
            console.log("Imeto ne postoi");
        } else{
            console.log("Imeto postoi");
        }
    }
})