// @ts-ignore
import fs from 'fs';
let startdir:string="teekond1/"
let maxd = 0
let maxn = ''
function displayDirectoryData(dirname:string){

    console.log(dirname)
    let filenames:string[] = fs.readdirSync(startdir+dirname);
    for(let filename of filenames){
        let contents:string=fs.readFileSync(startdir+dirname+"/"+filename, "utf-8");
        if (parseInt(contents) <= 30){
            contents = ''
        }
        if (parseInt(contents)>maxd){
            maxn = filename
            maxd = parseInt(contents)
        }
        console.log("  "+filename, contents);
    }

}

let dirnames:string[] = fs.readdirSync(startdir);
for(let dirname of dirnames){
    displayDirectoryData(dirname);
}
console.log(maxn, maxd)