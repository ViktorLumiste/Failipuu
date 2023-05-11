// @ts-ignore
import fs from 'fs';
function algabKahega(element:string) {
    return (Array.from(element)[0] == '1')
}

let filenames:string[] = fs.readdirSync('kolmapaev');
let filecount:number = (fs.readdirSync('kolmapaev')).length;
let fileone:string[] = (fs.readdirSync('kolmapaev')).filter(algabKahega);
let fileonecount:number = fileone.length;
console.log(filenames);
console.log(filecount);
console.log(fileonecount);