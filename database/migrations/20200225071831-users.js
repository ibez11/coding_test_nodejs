module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.createTable('users', {
  email_id: {
    type: Sequelize.STRING(126),
    primaryKey: true,
    defaultValue: '',
    allowNull: false,
  }
}),
down: queryInterface => queryInterface.dropTable('users')
}