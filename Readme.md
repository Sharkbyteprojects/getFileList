# GetFileList

These commands will list all files in the directory of your script (`__dirname`) :

example if you install it via `npm i shgetfilelist`:

`const gf=require("shgetfilelist");`

`gf(__dirname).then((s)=>{ s.forEach((r)=>{console.log(r);}); });`

example if you install it via `npm install @sharkbyteprojects/getfilelist@1.0.0 --registry=https://npm.pkg.github.com`:

`const gf=require("@sharkbyteprojects/getfilelist");`

`gf(__dirname).then((s)=>{ s.forEach((r)=>{console.log(r);}); });`
