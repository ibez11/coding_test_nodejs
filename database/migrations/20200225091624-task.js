module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.createTable('tasks', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email_id: {
    type: Sequelize.STRING,
    references: {
      model: 'users',
      key: 'email_id'
    }
  },
  name: {
    type: Sequelize.STRING(126),
    defaultValue: '',
    allowNull: false,
  }
}),
down: queryInterface => queryInterface.dropTable('tasks')
}