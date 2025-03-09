Async Data Fetching 

Real-World Example

Imagine you are developing an e-commerce website like Amazon. When a user logs in, the system needs to fetch two important pieces of information:

1.User Profile Information (Name, Email, Address)
2.Order History (Past Purchases)

However, these two pieces of data come from different sources (databases or APIs). The system must request both and wait for their responses before displaying them to the user.

In this code:

    fetchUserData simulates fetching user profile details.
    fetchOrderDetails simulates fetching the user's order history.
    fetchData waits for both requests to complete and returns them together.
    getData initiates the process and logs the data.

Example Output After 1 Second

{
  userData: 'Fetched: User Data for User ID: 101',
  orderData: 'Fetched: Order details for User ID: 101'
}

This demonstrates how asynchronous functions help handle API calls efficiently in real-world applications.
