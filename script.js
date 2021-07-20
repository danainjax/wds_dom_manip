// const h1 = document.createElement('h1');
// const helloDiv = document.getElementById('hello')
// helloDiv.append(h1)
// h1.innerText = "Hello World";

// const body = document.body
// const div = document.createElement('div')

// div.innerHTML = "Hello World 2"
// body.append(div)
// const strong = document.createElement('strong')
// strong.innerText = "Hello World 3"
// div.append(strong)

const body = document.body
const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')
// spanBye.remove()
// spanHi.remove()
// div.append(spanBye)
// div.removeChild(spanHi)
spanHi.setAttribute("id", 'whatevs')
spanHi.setAttribute("id", "howdy")
spanHi.setAttribute("id", "hi")
console.log(spanHi.id)
console.log(spanHi.dataset)
spanHi.dataset.newName = "konichiwa"
console.log(spanHi.dataset)
console.log(spanHi.classList)
spanHi.classList.add("new-class")
spanHi.classList.remove("hi2")
spanHi.classList.toggle("hi2")
spanHi.classList.toggle("hi2")
spanHi.classList.toggle("hi2")
spanHi.classList.toggle("hi2")
spanHi.classList.toggle("hi2")
spanHi.classList.toggle("tacos", true)
spanHi.style.color = "red"
spanBye.style.backgroundColor = "gray"

