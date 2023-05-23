module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    job_title: {
      type: Sequelize.STRING
    },
    Phone_no: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Employee;
};
