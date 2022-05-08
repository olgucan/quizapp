import './App.css';

import {useState,useEffect} from "react";



function App() {
  const [state, setState] = useState({
    joker: 2, value: 0, isFinised: false, score: 0, currentQuestionIndex: 0, questions: [{
        question: 'En güzel şehir Neresidir?', answerId: 3, answers: [{
            id: 1, title: 'Ankara',
        }, {
            id: 2, title: 'İstanbul'
        }, {
            id: 3, title: 'İzmir'
        }, {
            id: 4, title: 'Adana'
        }]
    }, {
        question: 'Hangisinde eş anlamlı kelimeler vardır?', answerId: 7, answers: [{
            id: 5, title: 'kara-ak'
        }, {
            id: 6, title: 'siyah-beyaz'
        }, {
            id: 7, title: 'al-kırmızı'
        }, {
            id: 8, title: 'kuzey-güney'
        }]
    }, {
        question: 'Mustafa Kemal Atatürk kaç yılında vefat etmiştir?', answerId: 12, answers: [{
            id: 9, title: '1881'
        }, {
            id: 10, title: '1913'
        }, {
            id:11, title: '1936'
        }, {
            id: 12, title: '1938'
        }]
    }, {
        question: "React ın geliştiricisi kimdir?", answerId: 16, answers: [{
            id: 13, title: "Google",
        }, {
            id: 14, title: "Amazon",
        }, {
            id: 15, title: "Apple",
        }, {
            id: 16, title: "Facebook",
        },],
    }, {
        question: 'Dünyanın yüzölçümü en büyük ülkesi hangisidir?', answerId: 20, answers: [{
            id: 17, title: 'Türkiye'
        }, {
            id: 18, title: 'Amerika'
        }, {
            id: 19, title: 'Çin'
        }, {
            id: 20, title: 'Rusya'
        }]
    }, {
        question: "Lozan anlaşmasının gizli maddesi hangisidir?", answerId: 24, answers: [{
            id: 21, title: "2023'e kadar bor kullanılamaz",
        }, {
            id: 22, title: "Ekonomide şahlanma yasak",
        }, {
            id: 23, title: "MEB ABD tarafından yönetilecek",
        }, {
            id: 24, title: "Hiçbiri",
        },],
    }]
})
const [joker,setjoker]=useState(true)
const qlength=state.questions.length-1
//console.log(qlength)
const handleclick = (a) => {
     if  (a === myChecked){
       setState((a)=>({...a,value:a.value+10}))
       setQnumber(k=>{
         if (k===qlength){
           
           return 0
         }
        else {
          return k+1
        }} )
     }  
     else {
       setState((a)=>({...a,value:0}))
       setGame(false)
     }
}

const [game,setGame]=useState(true)
const [qNumber,setQnumber]=useState(0)
//const [myanswer,setMyanswer]=useState("")
const [myChecked,setMyChecked]=useState(0)
const [lastq,setlastQ]=useState(state.questions[qNumber])
useEffect(()=> {
   setlastQ(state.questions[qNumber])
},[state,qNumber])
//let lastq=state.questions[qNumber]

const dropone = (a) => {
   setjoker(!joker)
  
}
const fifty= () => {
   //let k =0
   let l = []
   for (let i =0;i<lastq.answers.length-1;i++){
      
       if (l.length===1){
           break
       }
       if (lastq.answers[i].id !== state.questions[qNumber].answerId  ) {
             l.push(state.questions[qNumber].answers[i])
             
       }
       
   }
   let t =lastq.answers.filter(a=>a.id===lastq.answerId)
   //l.push(t[0])
   l=[...l,...t]
   
   return setlastQ({...lastq,answers:l})
}

  return (
    <>
    <div className='app'>
      <div className='top'>
           <h1>Score {state.value } </h1>
      </div>
    { game ? (<div className='bottom'>
            <div className='question'>
            <h2>{lastq.question}</h2>
            <div className='grid'>
              {
                 
               (joker)  ?   ( lastq?.answers.map(a=>(
                      <div  key={a.id}><input   onChange={(e)=>setMyChecked(a.id)} type="radio" name={lastq.question.slice(0,4)} /> {a.title} 
                          
                      </div>))  
                      )
             
                   : [...lastq?.answers.filter(t=>t.id!==lastq.answerId).slice(0,2),state.questions[qNumber].answers.find((y)=>y.id===lastq.answerId)].map(b=>(
                      <div  key={b.id}><input   onChange={(e)=>setMyChecked(b.id)} type="radio" name={lastq.question.slice(0,4)} /> {b.title} </div>
                  
                
                  //console.log(b)
                )) 
              }
               
           
            </div>
             <button onClick={()=>dropone(qNumber)}  className='btn btn-info me-3'>Joker</button>
             <button onClick={()=>fifty()}  className='btn btn-info me-3'>Joker2</button>
             <button onClick={()=>handleclick(lastq.answerId)}  className='btn btn-danger'>Submit Answer</button>
          </div>
      </div>) : ( <div> oyun bitti </div> )}
    </div>
   
    </>
  )}
    


export default App;
