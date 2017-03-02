// Creating our driver posting model
module.exports = function(sequelize, DataTypes) {
  var driver_posts = sequelize.define("driver_posts", {
    // The password cannot be null
    id_fb: {
      type: DataTypes.STRING,
      allowNull: false
    },
    depart_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrival_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    depart_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    return_depart_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    return_arrival_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    return_depart_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    car: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return driver_posts;
};
