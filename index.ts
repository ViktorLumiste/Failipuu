// @ts-ignore
import fs from 'fs';

function distanceSum(path:string):number{
    if(fs.lstatSync(path).isDirectory()){
        let sum: number=0;
        for(let subpath of fs.readdirSync(path)){
            sum+=distanceSum(path+"/"+subpath);
        }
        return sum;
    }
    return parseInt(fs.readFileSync(path, "utf-8"));
}

function carDistance(path:string, number:string){
    let sum: number=0;
    if(fs.lstatSync(path).isDirectory()){
        for(let subpath of fs.readdirSync(path)){
            if (subpath == number){
                sum+=parseInt(fs.readFileSync(path+"/"+subpath, "utf-8"))
            }
        }
        return sum
    carDistance(path,number)
}
}

function distanceMax(path:string):number{
    if(fs.lstatSync(path).isDirectory()){
        let max: number=0;
        for(let subpath of fs.readdirSync(path)){
            let value=distanceMax(path+"/"+subpath);
            if(value>max){
                if(max==0){max=value;}
                max=value>max?value:max;
            }
        }
        return max;
    }
    return parseInt(fs.readFileSync(path, "utf-8"));
}
function distanceMaxByNumber(path:string, number:string):number{
    if(fs.lstatSync(path).isDirectory()){
        let max: number=0;
        for(let subpath of fs.readdirSync(path)){
            let value=distanceMaxByNumber(path+"/"+subpath,number);
            if(value>max && subpath == number){
                if(max==0){max=value;}
                max=value>max?value:max;
            }
        }
        return max;
    }
    return parseInt(fs.readFileSync(path, "utf-8"));
}
console.log(distanceSum("./teekond2/neljapaev"));
console.log(distanceMaxByNumber("./teekond2/neljapaev",'323ABC.txt'));
console.log(carDistance("./teekond2", '123ABC.txt'));