const model = {
  set: function(value) {
    if (chrome.storage)
      chrome.storage.sync.set(value);
    else if (typeof(Storage) !== 'undefined')
      Object.keys(value).map(key => {
        localStorage.setItem(key, value[key]);
      });
    else
      toastr.error('No Web Storage support!');
  },
  get: function(keys, callback) {
    if (chrome.storage)
      chrome.storage.sync.get(keys, callback);
    else if (typeof(Storage) !== 'undefined')
      callback(keys.reduce((acc, key) => {
        acc[key] = localStorage.getItem(key);
        return acc;
      }, {}));
    else
      toastr.error('No Web Storage support!');
  },
};
