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

// re-render stacks with tags only

// render projects
var projectDiv = document.getElementById("project-render")
readJson('./data/projects.json').then(projects =>{
    for (let project of projects){
        projectDiv.innerHTML += `
        <h4 class="project">${project.name}</h4>
        <p class="info">${project.period} &#183 ${project.role} &#183 ${project.employer}</p>
        <p class="caption">${project.description}</p>
        <p class="detail hidden">${project.detail}</p>
        `
        for (let stack of project.stack){
            console.log(stack)
            projectDiv.innerHTML +=`<sl-tag type="primary" size="small">${stack}</sl-tag>`
        }
    }

})


var copyOnclickEl = document.querySelectorAll("[data-copy]")
for (let el of copyOnclickEl){
    var copyThis = el.dataset.copy
    el.addEventListener('click',()=>{
        navigator.clipboard.writeText(copyThis).then(
            alert(copyThis + " is copied to the clipboard")
        )
    })
}