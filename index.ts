// @ts-ignore
import fs from 'fs';

function display(path:string):void{
    if(fs.lstatSync(path).isDirectory()){
        for(let subpath of fs.readdirSync(path)){
            if (subpath == '123ABC.txt'){
                console.log(path+"/"+subpath +' '+ fs.readFileSync(path+"/"+subpath));
            }
            display(path+"/"+subpath);
        }
    }
}

display("./teekond2/neljapaev");