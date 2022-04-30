import React,{useState} from 'react'

const Design = () => {
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
let lastq=state.questions[0]
console.log(lastq.answers.filter(t=>t.id!==lastq.answerId).pop().push(state.questions[0].answers.find((y)=>y.id===lastq.answerId)))

  return (
    <div className='container '>
      
     

    </div>
  )
}

export default Design
