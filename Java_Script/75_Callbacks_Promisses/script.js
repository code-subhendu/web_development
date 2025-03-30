    // synchronous action means a task must be completed entirely before moving on to the next one, essentially blocking the execution flow until the first task finishes, while an asynchronous action allows multiple tasks to run seemingly simultaneously, where one task can start before another finishes, without blocking the program's execution flow
        // synchronous-->run one task before moving to next task
// console.log("hi")
// console.log("hell0")
// console.log("dj")
// console.log("boy")

        // Asynchronous-->one task can start before another finishes
// console.log("rohan is a hacker")    //1
// setTimeout(()=>{
//     console.log("I am the hacker!")     //4
// },0)
// setTimeout(()=>{
//     console.log("yes i am the hacker!")      //5 
// },0)
// console.log("rahul is a hacker")    //2
// console.log("ram is a hecker")      //3

        
