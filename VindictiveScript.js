const fs = require('fs');

let time = Date.now()


const data = fs.readFileSync('DateNow.txt', 'utf8')

module.exports = function VindictiveScript() {
timePassed = Math.floor((Date.now() - data) / 1000)

    console.log(`Ну ты же уже запускал меня ${timePassed} секунд тому назад`)
}
fs.writeFileSync('DateNow.txt', time);