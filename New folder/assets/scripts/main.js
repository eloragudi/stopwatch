const time = document.querySelector('.watch .counter')
const start = document.getElementById('btn-1')
const stop = document.getElementById('btn-2')
const reset = document.getElementById('btn-3')

let second = 0;
let interval = null;

function timer() {
    second++

    let hrs = Math.floor(second / 3600);
    let min = Math.floor((second - (hrs * 60)) / 60);
    let secs = Math.floor(second % 60);

    if (hrs < 10) {
        hrs = '0' + hrs
    }
    if (min < 10) {
        min = '0' + min
    }
    if (secs < 10) {
        secs = '0' + secs
    }

    time.innerText = `${hrs}:${min}:${secs}`
}
start.addEventListener('click', function () {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000)
})

stop.addEventListener ('click', function() {
    clearInterval(interval)
    interval = null
    window.location
})


reset.addEventListener('click', function(){
    clearInterval(interval)
    interval = null
    second = 0
    time.innerText = '00:00:00'
})