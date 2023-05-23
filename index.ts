// @ts-ignore
import fs from 'fs';

function distancesLess(path:string, criteria: number):string[]{
    if(fs.lstatSync(path).isDirectory()){
        let result:string[]=[];
        for(let subpath of fs.readdirSync(path)){
            let values=distancesLess(path+"/"+subpath, criteria);
            for(let value of values){
                result.push(value);
            }
        }
        return result;
    }
    let amount=parseInt(fs.readFileSync(path, "utf-8"));
    return amount<criteria?[path]:[];
}
function distancesMore(path:string, criteria: number) :string[]{
        if(fs.lstatSync(path).isDirectory()){
            let result:string[]=[];
            for(let subpath of fs.readdirSync(path)){
                let values=distancesMore(path+"/"+subpath, criteria);
                for(let value of values){
                    result.push(value);
                }
            }
            return result;
        }
        let amount=parseInt(fs.readFileSync(path, "utf-8"));
        return amount>criteria?[path]:[];
}
function distancesLessAndMore(lessThan:number, moreThan:number, path:string) :number {
    let i;
    let count = 0
    const less = distancesLess(path, lessThan)
    const more = distancesMore(path, moreThan)

    for (i = 0; i < less.length; i++) {
        if (less[i] !== undefined) {
            count++;
        }
    }
    for (i = 0; i < more.length; i++) {
        if (more[i] !== undefined) {
            count++;
        }
    }
    console.log(distancesLess(path, lessThan));
    console.log(distancesMore(path, moreThan));
    return count
}
console.log(distancesLessAndMore(50,100,"./teekond2"))
