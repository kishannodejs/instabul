// QN:-1

// console.log('script start');

// setTimeout(function(){
//     console.log('setTimeout');
// }, 0);

// Promise.resolve()
// .then(function(){
//     console.log('promise1');
// })
// .then(function(){
//     console.log('promise2');
// })

// console.log('script end');

// QN:-2
// function returnPromise(){
//     return new Promise((resolve, reject) => {
//         reject('Error occured kkkkkkkkkkkkkkk');
//     })
// }


// function main(){
//     returnPromise()
//     .then(res => console.log('res ===>', res))
//     .catch(err1 => {
//         console.log('Error 1 ==>', err1);
//         throw err1;
//     })
//     .catch(err2 => {
//         console.log('Error 2 ==>', err2);
//         throw err2;
//     })
//     .catch(err3 => {
//         console.log('Error 3 ==>', err3);
//         throw err3;
//     })
// }

// main();

// QN:-3

// function returnPromise(){
//     return new Promise((resolve, reject) => {
//         reject('Error occured PPPPPPPPPPP');
//     })
// }


// function main(){
//     returnPromise()
//     .then(res => console.log('res ===>', res))
//     .catch(err1 => {
//         console.log('Error 1 ==>', err1);
       
//     })
//     .then(res2 => {
//         console.log('Second Then==>', res2);
//     })
//     .then(res3 => {
//         console.log('Third then ==>', res3);
//     })
// }

// main();

// QN:-4

// async function asyncPromise(){
//     return 2;
// }

// function main(){
//     let res = asyncPromise();
//     console.log(res);
// }

// main();

// QN:-5


// QN:-6

var p1 = () => {
    return new Promise((resolve, reject) => {
        resolve(1);
    })
}

var p2 = () => {
    return new Promise((resolve, reject) => {
        resolve(2);
    })
}

var p3 = () => {
    return new Promise((resolve, reject) => {
        resolve(3);
    })
}

var p4 = () => {
    return new Promise((resolve, reject) => {
        resolve(4);
    })
}


// Promise.all([p1, p2, p3, p4]).then((values) => {
//     console.log(values);
//   });

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));