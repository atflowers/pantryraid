import axios from "axios";

export default {
  // Gets all food
  // getAllFood: function() {
  //   return axios.get("/api/user");
  // },
  getUser: function(id) {
    // console.log("...and the id is: ", id)
    return axios.get("/api/user/" + id);
  },
  // Gets the food with the given id
  getFood: function(id) {
    return axios.get("/api/food/" + id);
  },
  // Deletes the food with the given id
  deleteFood: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a food to the database
  saveFood: function(id, foodData) {
    // console.log(foodData);
    return axios.post("/api/user/" + id, foodData);
  }
};
