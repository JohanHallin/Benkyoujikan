var data = null
var lessonIndex = localStorage.LessonIndex
var questionType = 0
var index = 0

fetch("data.json")
.then(response => response.json())
.then(dataRead =>{
    data = dataRead
    console.log(data.Lessons[lessonIndex])
    document.getElementById("title").innerHTML = `勉強時間 - ${data.Lessons[lessonIndex].Lesson} - ${data.Lessons[lessonIndex].Title} - Exercise`
})

function Random(val1, val2){
    return Math.round(Math.min(val1, val2) + (Math.max(val1, val2) - Math.min(val1, val2)) * Math.random())
}

function checkAnswer(){
    
    switch(questionType){
        case 0:
            if(document.getElementById("user_answer").value == data.Lessons[lessonIndex].Vocab[index].Kana){
                newQuestion()
            }
            break
        case 1:
            if(document.getElementById("user_answer").value == data.Lessons[lessonIndex].Vocab[index].English){
                newQuestion()
            }
            break
        case 2:
            if(document.getElementById("user_answer").value == data.Lessons[lessonIndex].Vocab[index].Kana){
                newQuestion()
            }
            break
        case 3:
            newQuestion()
            break
    }
}

function newQuestion(){
    index = Random(0, data.Lessons[lessonIndex].Vocab.length)

    if(data.Lessons[lessonIndex].Vocab[index].Kanji != null){
        questionType = Random(0, 3)
    }else{
        questionType = Random(0, 1)
    }
    
    switch(questionType){
        case 0:
            document.getElementById("question").innerHTML = `Write "${data.Lessons[lessonIndex].Vocab[index].English}" with kana`
            break
        case 1:
            document.getElementById("question").innerHTML = `Write "${data.Lessons[lessonIndex].Vocab[index].Kana}" in English`
            break
        case 2:
            document.getElementById("question").innerHTML = `Write "${data.Lessons[lessonIndex].Vocab[index].Kanji}" in Kana`
            break
        case 3:
            document.getElementById("question").innerHTML = `Write "${data.Lessons[lessonIndex].Vocab[index].Kana}" in Kanji (on paper)`
            break
    }
}