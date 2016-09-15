'use strict'

let model = require('./models')
  //
  // model.Students.create({
  //   first_name: 'Tevin',
  //   last_name: 'Wibiesono',
  //   gender: 'male',
  //   phone: '0123456789012',
  //   email: 'tev@gmail.com',
  //   birthday: '1990-11-10'
  // })

// model.Students.create({
//   first_name: 'Bana',
//   last_name: 'Lubis',
//   gender: 'male',
//   phone: '01234567890',
//   email: 'bana@gmail.com',
//   birthday: '1993-12-11'
// })
//
// model.Students.create({
//   first_name: 'Lilianti',
//   last_name: 'wibiesono',
//   gender: 'female',
//   phone: '01234567890423',
//   email: 'Lilianti@gmail.com',
//   birthday: '1987-03-25'
// })

console.log('\n\n-----------------');
console.log('Menu Available : ')
console.log('-----------------\n');
console.log('[1] allData : to show all data')
console.log('[2] migrasi : migrasi full name')
console.log('\n\n-----------------\n\n')

model.Students.allData({})
  //model.Students.migrasi({}) // untuk pindahkan first_name & last_name ke full_name
