var data = null
var lessonIndex = localStorage.LessonIndex
fetch("data.json")
.then(response => response.json())
.then(dataRead =>{
    data = dataRead
    console.log(data.Lessons[lessonIndex])
    document.getElementById("title").innerHTML = `勉強時間 - ${data.Lessons[lessonIndex].Lesson} - ${data.Lessons[lessonIndex].Title} - Exercise`
})
