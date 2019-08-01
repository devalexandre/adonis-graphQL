'use strict'

const { test } = use('Test/Suite')('Course')
const Course = use('App/Models/Course')

test('list all user of course', async ({ assert }) => {
  const course =  Course.find(1)
  assert.isNotNull(course,'esta pegando o curso')
})

test('get all users of course', async({assert}) =>{

  const course = await Course.find(1)
  const users = await course.users().fetch()

  assert.isNotNull(users,'esta pegando os alunos')
})

test('get all class of course', async({assert}) =>{

  const course = await Course.find(1)
  const classes = await course.classes().fetch()

  assert.isNotNull(classes,'esta pegando as classes')
})
