"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Airplanes", [
      {
        model_Number: "Boeing 747 ",
        capacity: "400",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_Number: "Airbus A380 ",
        capacity: "350",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_Number: "Airbus A350 ",
        capacity: "450",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_Number: "Airbus A220",
        capacity: "200",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
