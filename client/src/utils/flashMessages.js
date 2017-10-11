import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './types';

export default {
  addFlashMessage: function(message) {
    return {
      type: ADD_FLASH_MESSAGE,
      message
    }
  },
  deleteFlashMessage: function(id) {
    return {
      type: DELETE_FLASH_MESSAGE,
      id
    }
  }
};