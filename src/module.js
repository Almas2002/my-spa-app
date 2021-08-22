console.log("Module")

async function start() {
   return await Promise.resolve('async ')
}
start().then(data=>console.log(data))