

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.createTable('employee', { 
        id: {type:Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        firstName:{type:Sequelize.STRING, allowNull: false},
        lastName: {type:Sequelize.STRING, allowNull: false},
        contact: {type:Sequelize.INTEGER, allowNull: false},
        location: {type: Sequelize.STRING, allowNull: true},
        vaccTypeID: {type:Sequelize.INTEGER, references: {model: 'vaccineType', key: 'id'}},
        createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        },
        deletedAt: { type: Sequelize.DATE, },
      }) 
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('employees')
   
  }
};
