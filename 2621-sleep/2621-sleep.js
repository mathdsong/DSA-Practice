/**
 * @param {number} millis
 */
async function sleep(millis) {
  try {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => resolve("Success"), millis);
      } catch {
        reject;
      }
    })
  } catch {err => console.log(err)}
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */