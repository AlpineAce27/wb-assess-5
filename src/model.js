import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  async getFullName() {
    const humans = await Human.findAll();
    console.log(humans.fname + " " + humans.lname); // true
  }

}

Human.init(
  {
    humanId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    modelName: 'human',
    sequelize: db,
  },
);

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    birthYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: 'animal',
    sequelize: db,
  },
);

Human.hasMany(Animal, { foreignKey: 'humanId' });
Animal.belongsTo(Human, { foreignKey: 'humanId' });

export default db;