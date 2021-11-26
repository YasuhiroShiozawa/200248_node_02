const chalk = require('chalk')

console.log(chalk.bgRed('Hello YSE!!!'))

console.log(chalk.green('これって日本語もいけるんかな？'))

const lat = process.argv[2]
const lng = process.argv[3]

const cities = require('cities')

if (lat && lng) {
    console.log(cities.gps_lookup(lat, lng))
}
