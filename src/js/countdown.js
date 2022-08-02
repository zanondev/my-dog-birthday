const daysContainer = document.querySelector('#days')
const hoursContainer = document.querySelector('#hours')
const minutesContainer = document.querySelector('#minutes')
const secondsContainer = document.querySelector('#seconds')


const TunisBirth = new Date("26 November 2022 00:00:00 GMT-0300");

const updateCountdown = () => {
    const currentDate = new Date()
    const diference = TunisBirth - currentDate
    const days = Math.floor(diference / (24 * 60 * 60 * 1000))
    const hours = Math.floor(diference / (60 * 60 * 1000)) % 24
    const minutes = Math.floor(diference / (60 * 1000)) % 60
    const seconds = Math.floor(diference / 1000) % 60

    daysContainer.textContent = days < 10 ? '0' + days : days
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
}
setInterval(updateCountdown, 1000)
updateCountdown();

