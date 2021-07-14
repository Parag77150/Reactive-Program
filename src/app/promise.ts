function IsBreadAvailable() 
{
  return false;
}
function isEggAvailable() 
{
  return false;
}
function bringbread(){
    return new Promise((resolve, reject) => {
        if(IsBreadAvailable())
        {
            resolve ('bread is available')
        }
        else if(isEggAvailable())
        {
            resolve('egg is available')
        }
        else{
            reject('egg and bread both are not available')
        }
    })
  }

async function final() {
try{
    const nyData= await bringbread()
     return nyData
   }catch(e)
   {
    return Promise.reject(e)
    }
}

final().then(data=>{
  console.log(data)
}).catch(err=>{
  console.log(err)
})

