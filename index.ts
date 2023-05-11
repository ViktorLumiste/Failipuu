// @ts-ignore
import fs from 'fs';

let contents:string=fs.readFileSync("kolmapaev/123abc.txt", "utf-8");
let contents1:string=fs.readFileSync("kolmapaev/223abc.txt", "utf-8");
let contents2:string=fs.readFileSync("kolmapaev/323abc.txt", "utf-8");
let contentsCount:number=Array.from(contents).length
console.log(contents);
console.log(contents+contents1);
console.log(contents+contents1+contents2);
console.log(contentsCount);