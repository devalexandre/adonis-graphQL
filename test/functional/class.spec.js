'use strict'

const { test } = use('Test/Suite')('Class')

const Class = use('App/Models/Class')

test('list all user of classes', async ({ assert }) => {
  const classes =  Class.find(1)
  assert.isNotNull(classes,'esta pegando o curso')
})

test('get all users of classes', async({assert}) =>{

  const classes = await Class.find(1)
  const users = await classes.users().fetch()

  assert.isNotNull(users,'esta pegando os alunos')
})

test('get all course of classes', async({assert}) =>{

  const classes = await Class.find(1)
  const courses = await classes.courses().fetch()

  assert.isNotNull(courses,'esta pegando as classes')
})


test('get all lessons of classes', async({assert}) =>{

  const classes = await Class.find(1)
  const lessons = await classes.lessons().fetch()

  assert.isNotNull(lessons,'esta pegando as classes')
})