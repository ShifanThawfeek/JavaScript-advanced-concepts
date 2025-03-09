async function fetchData(userId, delay) {
    try {
      const userData = await fetchUserData(userId, delay);
      const orderData = await fetchOrderDetails(userId, delay);  // Fix: pass userId instead of userData
      return { userData, orderData };
    } catch (error) {
      console.log(error);
    }
  }
  
  function fetchUserData(userId, delay) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(`Fetched: User Data for User ID: ${userId}`);
      }, delay);
    });
  }
  
  function fetchOrderDetails(userId, delay) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(`Fetched: Order details for User ID: ${userId}`);
      }, delay);
    });
  }
  
  async function getData() {
    const Data = await fetchData(101, 1000);
    console.log(Data);
  }
  
  getData();
  