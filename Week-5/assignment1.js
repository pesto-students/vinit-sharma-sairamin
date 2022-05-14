//Exercise5.1:Using Async/Await and Generators, create separate functions and achieve the samefunctionality. Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3()


function doTask1(time){
    return new Promise((res, rej) => {
        setTimeout(() => {
             res("resolved task 1");
        }, time)
    });
}

function doTask2(time){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("resolved task 2");
        }, time)
    })
}

function doTask3(time){
    return new Promise((res, rej) => {
        res("resolved task 3");
    }, time)
}

//getting response using async-await functionality
async function getAsyncResponse(time){
    const response1 = await doTask1(time);
    console.log(response1);

    const response2 = await doTask2(time);
    console.log(response2);

    const response3 = await doTask3(time);
    console.log(response3);
}

//getAsyncResponse(1000); //calling async functions



//asynchronous operation using async/await using generators
async function* generator(time1, time2, time3){

    const response1 = await doTask1(time1);
    yield response1;

    const response2 = await doTask2(time2);
    yield response2;

    const response3 = await doTask3(time3);
    yield response3;

    return "all promises are consumed";

}

let value = generator(1000, 2000, 3000);
value.next().then(data => console.log(data)); //resolved task 1
value.next().then(data => console.log(data)); // resolved task 2
value.next().then(data => console.log(data)); //resolved task 3
value.next();