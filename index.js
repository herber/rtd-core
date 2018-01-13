const pathToRegexp = require('path-to-regexp');

module.exports = (options) => {
  options = options || {};

  return (path) => {
    let keys = [];
    const exp = pathToRegexp(path, keys, options);

    return (pathname, params) => {
      const m = exp.exec(pathname);
      if (!m) return false;

      params = params || {};

      let key;
			let param;
			
      for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        param = m[i + 1];

        if (!param) continue;

        params[key.name] = decodeParam(param);

        if (key.repeat) params[key.name] = params[key.name].split(key.delimiter);
      }

      return params;
    };
  };
}

const decodeParam = (param) => {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    throw new Error('Could not decode params');
  }
}
