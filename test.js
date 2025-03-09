// Task:
// Write an asynchronous function that fetches user data and order details for a given user ID. The function should:

// Fetch user data using fetchUserData(userId, delay).
// Fetch order details using fetchOrderDetails(userId, delay).
// Return an object containing both user data and order details.
// Handle any errors that may occur during the fetching process.
// You'll need to use async/await and proper try...catch error handling.

async function fetchData(userId, delay) {
  try {
    const userData = await fetchUserData(userId,delay);
    const orderData = await fetchOrderDetails(userId,delay);
    return { userData, orderData };
  } catch (error) {
    console.log(error);
  }
}

function fetchUserData(userId, delay) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(`Fetched: Fetched User Data for User ID: ${userId}`);
      }, delay);
    });
}

function fetchOrderDetails(userId, delay) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(`Fetched: Fetched Order details for user ID: ${userId}`);
      }, delay);
    });
}

async function getData() {
  const Data = await fetchData(101,1000);
  console.log(Data);
}

getData();

