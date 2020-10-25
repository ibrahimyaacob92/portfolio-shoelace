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

async function readJson(url){
    const response = await fetch(url)
    const data = await response.json()
    return data
}

// render the stacks
var stackDiv = document.getElementById("stack-render")
readJson('./data/mystack.json').then(data =>{
    console.log(data)
    let stackList = Object.keys(data)
    for (let stack of stackList){
        stackDiv.innerHTML += `<h4>${stack}</h4>`
        let caption = data[stack].caption
        stackDiv.innerHTML += `<p class="caption">${caption}</p>`
        let modules = data[stack].modules
        
        for (let module of modules){
            stackDiv.innerHTML += `<sl-tag type="primary" size="small">${module}</sl-tag>`
        }
    }
})