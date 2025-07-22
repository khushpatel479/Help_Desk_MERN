// function fib(n)
// {
//     let a = 0 , b= 1
//     for(let i = 0 ; i < n ; i++)
//     {
//         console.log(a)
//         let n = a+b
//         a=b
//         b=n


        
//     }
// }

// console.log(fib(10))



// let str = "hello world"


// function convertUpper(str)
// {
//     let arr = []
//     arr = str.split(" ")
//     for(let i = 0 ; i < arr.length ; i++)
//     {
//         console.log(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
        
//     }
// }

// convertUpper("khush paetl")

// finzero

// let arr = [2,3,0,11,34,5]
// let ind = arr.indexOf(0)

// console.log(arr.splice(ind,1))
// console.log(arr.splice(3,0,0))
// console.log(arr)


// let arr = [12, 34, 32, 12];
// let curr =-1;


//     setInterval(() => {
//         curr = curr+1
//         console.log(arr[curr])
//  }, 1000);


// setInterval(() => {
//     console.log(Math.floor(Math.random()*3000))
// }, 2000);



// let arr=[23,34,32,34,44,56,55,67,89,55]
// let dup = {}
// let cn  = 1
// for(let i = 0 ; i < arr.length ; i ++)
// {
//     if(dup[arr[i]]) continue
//     for(let j = i + 1 ; j<arr.length ; j ++ )
//     {
//         if(arr[i] === arr[j])
//         {
//             cn=cn+1
//             dup[arr[i]] = cn
//         }
//     }
// }
// console.log(dup)


const que = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hot Mail", "How To Make Landing-page", "Hyper Tool Multi Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What is the correct syntax to output in console?",
    options: ["console.log()", "print()", "echo()", "display()"],
    answer: "console.log()"
  },
  {
    question: "Which of these is a JavaScript framework?",
    options: ["React", "Laravel", "Django", "Flask"],
    answer: "React"
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["let", "var", "const", "All of the above"],
    answer: "All of the above"
  }
];


// let curr = -1

// let yh=setInterval(() => {
//   curr=curr+1
//   console.log(que[curr])
//   if(curr===que.length-1)
//   {
//     clearInterval(yh)
//   }
// }, 1000);


// let str = "hello khush khush"
// str.replace("khush","kush")

// console.log(str)


// Pelindrome

// let str = "madam"
// let rev = str.split("").reverse().join("")
// console.log(rev)
// if(str==rev)
// {
//   console.log("ok")
// }
// else{
//   console.log("not ok")
// }


// let num = 121
// let str = num.toString()
// let rev = str.split("").reverse().join("")
// if(num == str)
// {
//   console.log("ok")
// }
// else{
//   console.log("sorry")
// }


