/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    let res = "";
    if (typeof object === 'object') {

      if (Array.isArray(object)) {
        // array:
        if (object.length !== 0) {
          res += "[";
          for (let i = 0; i < object.length; i++) {
            object[i] !== null ? res += jsonStringify(object[i]) + "," 
            : object[i] !== "" ? res += object[i] + ","
            : res += "";
          }
          res = res.slice(0, res.length - 1) + "]";
        } else {
          res = "[]";
        }

      } else {
        // object: 
        if (object !== null && typeof object !== "boolean") {
          if (Object.keys(object).length !== 0) {
            res += "{";
            for (const key in object) {
              object[key] !== null ? res += jsonStringify(key) + ":" + jsonStringify(object[key]) + "," 
              : object[key] !== "" ? res += jsonStringify(key) + ":" + object[key] + ","
              : res += "";
            }      
            res = res.slice(0, res.length - 1) + "}";
          } else {
            res = "{}";
          } 
        } else {
          res = object;
        }
        
      }

    } else {
      typeof object === "string" ?  res += '"' + object + '"' : res += object;
    }

    return res;

};