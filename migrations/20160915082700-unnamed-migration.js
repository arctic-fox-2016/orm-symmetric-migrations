'use strict';

module.exports = {
up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Students', 'full_name', {
      type: Sequelize.STRING
    });
},

down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Students', 'full_name');
    }
};
