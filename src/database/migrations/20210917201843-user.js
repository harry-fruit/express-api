"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        unique: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      profilePic: {
        type: Sequelize.TEXT,
        allowNull: true,
        field: 'profile_pic'
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
        field: 'is_active'
      },
      status: {
        type: Sequelize.STRING(500),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  },
};
