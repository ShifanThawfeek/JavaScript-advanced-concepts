// Simulated API call to fetch products for a given page
async function fetchProducts(page) {
    console.log(`Fetching products from page ${page}...`);
  
    // Simulate a delay as if calling a real API
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Simulated API response: Each page returns 3 products
    const products = [
      { id: page * 3 - 2, name: `Product ${page * 3 - 2}` },
      { id: page * 3 - 1, name: `Product ${page * 3 - 1}` },
      { id: page * 3, name: `Product ${page * 3}` },
    ];
  
    // Simulating API returning no data when pages are exhausted
    return page > 4 ? null : products;
  }
  
  // Generator function to fetch paginated product data
  async function* productGenerator() {
    let page = 1;
    
    while (true) {
      // Fetch products for the current page
      const products = await fetchProducts(page);
  
      // If API returns no products, stop the generator
      if (!products) {
        console.log("No more products available!");
        return;
      }
  
      // Yield the fetched products
      yield products;
  
      // Move to the next page
      page++;
    }
  }
  
  // Function to use the generator and display products
  async function displayProducts() {
    const generator = productGenerator();
  
    for await (const products of generator) {
      console.log("Fetched Products:", products);
    }
  
    console.log("Finished fetching all products!");
  }
  
  // Run the function to display paginated product data
  displayProducts();
  