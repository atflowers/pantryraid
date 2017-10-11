import axios from "axios";

export default {
  // Gets all food
  getAllFood: function() {
    return axios.get("/api/food");
  },
  // Gets the food with the given id
  getFood: function(id) {
    return axios.get("/api/food/" + id);
  },
  // Deletes the food with the given id
  deleteFood: function(id) {
    return axios.delete("/api/food/" + id);
  },
  // Saves a food to the database
  saveFood: function(foodData) {
    return axios.post("/api/food", foodData);
  }
};
