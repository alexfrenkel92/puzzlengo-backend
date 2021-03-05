'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

// Route.get('/', 'TaskController.index')
// Route.post('tasks', 'TaskController.store')
// Route.delete('tasks/:id', 'TaskController.destroy')

Route.group(() => {
    Route.post('login', 'Auth/AuthenticationController.login')
    Route.post('register', 'Auth/AuthenticationController.register')
    Route.get('me', 'Auth/AuthenticationController.me').middleware(['auth'])
    Route.post('postcard', 'TangoCardController.orderCard')
    Route.get('/', 'TangoCardController.baseUrl')
  }).prefix('api')
