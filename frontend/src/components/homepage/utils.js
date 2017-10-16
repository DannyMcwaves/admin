/**
 * this are utility functions and objects to avoid code repetition.
 */

const postDataToServer = (url, data) => {
    return window.$.ajax({
      method: 'POST',
      url: url,
      data: data,
      dataType: 'json'
    });
};

const validateArray = (array) => {
  return null;
};

export {postDataToServer, validateArray};
