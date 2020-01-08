'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned() // só valores positivos
        .references('id') // campo da chave estrangeira
        .inTable('users') // relacionada com atabela users
        .onUpdate('CASCADE') // Altera junto com a tabela 'users'
        .onDelete('SET NULL') // Caso o users seja deletado, é colocado NULL
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
