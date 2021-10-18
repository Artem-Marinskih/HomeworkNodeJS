module.exports = function picture() {
//  console.log(process.env)
 const image = process.env.PIC
 if (process.env.PIC === undefined) console.log('error')
 if (process.env.PIC === '') console.log('error')
 console.log(process.env.PIC)
}