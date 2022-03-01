var height = document.querySelector('#height')
var weight = document.querySelector ('#weight')
var result = document.getElementById ('result')
var submit = document.getElementById('sub')

submit.addEventListener('click', function(a){
    a.preventDefault()
    height = height.value
    weight = weight.value
    var bmi = weight / height
    result.textContent = bmi
})
function check(){
    console.log(onmouseover)
}