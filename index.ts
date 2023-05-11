// @ts-ignore
import fs from 'fs';
function sumDirectoryData(dirname:string):number{
    let sum: number=0;
    let dirnames:string[] = fs.readdirSync(dirname);

    for(let dirnam of dirnames){

        let filenames:string[] = fs.readdirSync(dirname+'/'+dirnam);

        for(let filename of filenames){
            let contents:string=fs.readFileSync(dirname+"/"+dirnam+"/"+filename, "utf-8");
            sum+=parseInt(contents);
        }
    }
    return sum;
}
function maxDirectoryData(dirname:string){
    let max: string ='';
    let max1n: string='';
    let max1d: number=0;
    let max2n: string='';
    let max2d: number=0;
    let dirnames:string[] = fs.readdirSync(dirname);

    for(let dirnam of dirnames){

        let filenames:string[] = fs.readdirSync(dirname+'/'+dirnam);

        for(let filename of filenames){
            let contents:string=fs.readFileSync(dirname+"/"+dirnam+"/"+filename, "utf-8");
            if (dirnam == 'kolmapaev' && parseInt(contents)>max1d){
                max1d = parseInt(contents)
                max1n = filename
            } else if(dirnam == 'neljapaev' && parseInt(contents)>max2d){
                max2d = parseInt(contents)
                max2n = filename
            }
        }
    }
    max = (`${max1n}-${max1d} \n${max2n}-${max2d}`  )
    return max
}
console.log(sumDirectoryData("teekond1"));
console.log(maxDirectoryData("teekond1"));