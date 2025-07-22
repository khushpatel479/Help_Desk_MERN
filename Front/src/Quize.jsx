import React, { useState } from 'react'

const Quize = () => {
    const[curr, securr] = useState(0)
    const[score,setscore] = useState(0)



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


function lpo(item)
{
  console.log(item)
}

  return (
    <>
    <div>
{que.map((item,index)=>
    {
        if(index === curr)
        {
            return(<>
            <p onClick={()=>{lpo(item)}}>{item.question}</p>
            {item.options.map((item,index)=>
            {
                
                return(
                    <p>{item}</p>
                )
            })}
            </>)
        }
    }
)}

    </div>
    </>
  )
}

export default Quize