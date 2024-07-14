import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

export const db = await connectToDB('postgresql:///animals');



export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
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
        type: DataTypes.VARCHAR(30),
        allowNull: false
      },
      lname: {
        type: DataTypes.VARCHAR(30),
        allowNull: false
      },
      email: {
        type: DataTypes.VARCHAR(30),
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
        type: DataTypes.VARCHAR(30),
        allowNull: false,
      },
      species: {
        type: DataTypes.VARCHAR(30),
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
  
  export class Rating extends Model {
    [util.inspect.custom]() {
      return this.toJSON();
    }
  }
  
  Human.hasMany(Animal, { foreignKey: 'humanId' });
  Animal.belongsTo(Human, { foreignKey: 'humanId' });