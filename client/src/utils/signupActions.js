import axios from 'axios';

export default {
  userSignupRequest: function(userData) {
    return axios.post('/api/users', userData);
  },
  isUserExists: function(username) {
    return axios.get(`/api/users/${username}`);
  }
};