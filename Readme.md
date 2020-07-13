# GetFileList

These commands will list all files in the directory of your script (`__dirname`) :

`const gf=require("getfilelist");`

`gf(__dirname).then((s)=>{ s.forEach((r)=>{console.log(r);}); });`