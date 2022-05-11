function makeRequest() {
  console.log("making request....");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("{'message':'Hello World'}");
      } else {
        reject("an error has occurred :(");
      }
    }, 500);
  });
}

/*
makeRequest().then((resp) => console.log(resp))
  .catch((err) => console.error(err));
*/

async function makeAsyncRequest() {
  let requestResult = await makeRequest();
  console.log(requestResult);
}

makeAsyncRequest();
