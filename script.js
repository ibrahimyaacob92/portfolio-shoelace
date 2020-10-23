const professionGlitch = [
    "Chef",
    "Engineer",
    "Con Man",
    "Clown",
    "Doctor",
    "Husband",
    "Janitor",
    "Student"
]

var glitch = document.getElementById("glitch")
var currentVal = ""
var i = 0
setInterval(()=>{
    currentVal = professionGlitch[i]
    if(currentVal == undefined){
        i = -1
    }
    i++
    glitch.innerText =currentVal
    },
100)