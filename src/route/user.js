// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const { User } = require('../class/user')

// ================================================================

router.get('/user-list', function (req, res) {
  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('user-list', {
    // вказуємо назву контейнера
    name: 'user-list',
    // вказуємо назву компонентів
    component: ['back-button'],

    // вказуємо назву сторінки
    title: 'User list',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {},
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/user-list-data', function (req, res) {
  const list = User.getList()

  console.log('list in route: ', list)

  if (list.length === 0) {
    return res.status(400).json({
      message: 'Список користувачів порожній',
    })
  }

  return res.status(200).json({
    // list: list.map((item) => ({
    //   id: item.id,
    //   email: item.email,
    //   role: item.role,
    // })),
    list: list.map(({ id, email, role }) => ({
      id,
      email,
      role,
    })),
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
