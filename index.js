const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const ampmElement = document.getElementById('ampm')

function clockUpdate() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let ampm = "AM"
    s = s < 10 ? '0' + s : s
    m = m < 10 ? '0' + m : m
    h = h < 10 ? '0' + h : h
    if (h > 12) {
        h = '0' + (h - 12)
        ampm = 'PM'
    }


    console.log(h, m, s)
    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
    ampmElement.innerText = ampm
    setTimeout(() => {
        clockUpdate()
    }, 1000)
}
clockUpdate()