
const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../db/connection");

const { firstUpper, setApproval} = require("./modelHelpers");

const beforeUpdateFunc = async (test) => {
    // test.update_counter += 1;
    await console.log(`This is the hook: ${test}.`)
}; 

const Test = connection.define("Test", 
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        isTrue: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        update_counter: {
            type: DataTypes.INTEGER,
            allowNull: true, 
            unique: false,
            
        },
    }
    
);

const Counter = connection.define("Counter", 
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: false,
        }
    }
);

// const  Movie = connection.define("Movies", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       get() {
//             const rawValue = this.getDataValue('title');
//             return firstUpper(rawValue);
//             }
//     },
//      actor: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       get() {
//         const rawValue = this.getDataValue('actor');
//         return firstUpper(rawValue);
//         }
//     },
//     approval: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       get() {
//         const rawValue = this.getDataValue('approval');
//         return firstUpper(rawValue);
//         }
//     },
//     rating: {
//       allowNull: false,
//       type: DataTypes.STRING,
//       set(value) {
//         this.setDataValue('approval', setApproval(value));
//         this.setDataValue('rating', value);
//       }
//     }
//   })


Test.afterUpdate((test, options) => {
    console.log("after update hit");
    test.update({update_counter: test.update_counter + 1});
});



module.exports = {
    Test,
    Counter,
    
};