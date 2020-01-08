'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('password', 'ForgotPasswordController.store')
Route.put('password', 'ForgotPasswordController.update')

Route.get('files/:id', 'FileController.show')

Route.group(() => {
  Route.post('files', 'FileController.store')

  Route.resource('projects', 'ProjectController').apiOnly()
  Route.resource('projects.tasks', 'TaskController').apiOnly() // cria rotas "localhost/:project/tasks" pois tasks são filhos de project
}).middleware(['auth']) // Rotas acessíveis apenas quando o usuário estiver logado
