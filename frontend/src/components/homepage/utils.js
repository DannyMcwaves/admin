/**
 * this are utility functions and objects to avoid code repetition.
 */

const postDataToServer = (url, data) => {
    return window.$.post({
      url: url,
      data: data,
      dataType: 'json'
    });
};

const validateArray = (array) => {
  return null;
};

export {postDataToServer, validateArray};
