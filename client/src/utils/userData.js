import axios from "axios";

export default {
  // Gets all food
  // getAllFood: function() {
  //   return axios.get("/api/user");
  // },
  getUser: function(token) {
    // console.log("...and the id is: ", id)
    return axios.get("/api/user/" + token);
  },
  // Gets the food with the given id
  getFood: function(id) {
    return axios.get("/api/food/" + id);
  },
  // Deletes the food with the given id
  removeFood: function(token, id, item) {
    console.log("userData.js-deleteFood:",item);
    // const urlParams = token + "/" + id + "/" + item;
    // console.log(urlParams);
    // return axios.delete("/api/user/" + urlParams );
    return axios.delete("/api/user/" + token + "/" + id + "/" + item );
  },
  // Saves a food to the database
  saveFood: function(id, foodData) {
    console.log("userData.js-saveFood:",foodData);
    return axios.post("/api/user/" + id, foodData);
  },
  // Checks for expiration data (if it exists in the database)
  checkExpiration: function(token, item) {
    console.log("userData.js-checkExpiration:",item);
    // const urlParams = token + "/" + id + "/" + item;
    // console.log(urlParams);
    // return axios.delete("/api/user/" + urlParams );
    return axios.get("/api/user/" + token + "/" + item );
  },
};
