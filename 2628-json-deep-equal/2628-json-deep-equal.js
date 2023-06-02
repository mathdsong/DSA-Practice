/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    if (o1 === o2) {
        return true;
    } else if (String(o1) !== String(o2)) {
        return false;
    } else if (Array.isArray(o1)) {
        if (o1.length !== o2.length) {
            return false;
        } else {
            for (let i = 0; i < o1.length; i++) {
                if (!areDeeplyEqual(o1[i], o2[i])) {
                    return false;
                }
            }
        }
    } else {
        if (Object.keys(o1).length !== Object.keys(o2).length) {
            return false;
        } else {
            for (const key in o1) {
                if (!areDeeplyEqual(o1[key], o2[key])) {
                    return false;
                }
            }
        }
    }
    return true;
};