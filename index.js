// One
const promisesOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})
promisesOne.then(function(){
    console.log('Promise consumed')
})

// Two
new Promise(function(resolve2, reject2){
    setTimeout(function(){
        console.log('Async task 2')
        resolve2()
    })
}).then(function(){
    console.log('Asunc 2 resolved')
})

// Three
const promisesThree = new Promise(function(res,rej){
    setTimeout(() => {
        res({userName:"ari", email:"ari@gmail.com"})
    }, 1000);
})
promisesThree.then(function(user){
    console.log(user)
})

// Four
const promisesFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName:"ari2",password:"12345"})
        }else{
            reject('ERROR : Sothing wrong')
        }
    }, 1000)
})
promisesFour.then((user) => {
    console.log(user)
    return user.userName;
}).then((userName) => {
    console.log(userName)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log('The promise is either resolved or reject')
})

// Five
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName:"yoyo", password:"1234"})
        }else{
            reject('ERROR: js went wrong')
        }
    }, 1000)
})
async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error)
   }
     
}
consumePromiseFive()