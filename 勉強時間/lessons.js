fetch("data.json")
.then(response => response.json())
.then(data => {
    console.log(data.Lessons.length)
    const HTML_List = document.getElementById("lessons_list")
    for(var i = 0; i < data.Lessons.length; i++){
        HTML_List.innerHTML += `<a href="exercise.html" onclick="A_Click(${i});">${data.Lessons[i].Lesson} - ${data.Lessons[i].Title}</a>`
    }
})

function A_Click(index){
    localStorage.LessonIndex = index
}