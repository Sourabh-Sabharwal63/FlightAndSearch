'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name:"John F. Kennedy International Airport (JFK)",
        address:"New york",
        cityId:"12",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"LaGuardia Airport (LGA)",
        address:"New york",
        cityId:"12",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"Newark International Airport (EWR)",
        address:"New york",
        cityId:"12",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"BenThorn",
        address:"New york",
        cityId:"12",
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
