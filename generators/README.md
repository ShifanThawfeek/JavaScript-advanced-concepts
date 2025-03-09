JavaScript Generators

🔍 Explanation (Step by Step)

1.fetchProducts(page)
    Simulates an API call that fetches products for a specific page.
    Uses setTimeout to mimic a delay like a real network request.
    Returns 3 products per page.
    Stops returning data after page 4 (simulating an API limit).

2.productGenerator()
    Uses async function* to create a generator.
    Starts at page 1 and fetches products.
    Yields fetched products one page at a time.
    Stops when there are no more products.

3.displayProducts()
    Calls productGenerator() to get the generator instance.
    Uses for await...of to iterate over the generator results asynchronously.
    Displays fetched products as they arrive.

✅ Why Use Generators Here?
    ✔ Efficient: Fetches only the required data, avoiding unnecessary API calls.
    ✔ Memory-friendly: Doesn’t store all data at once, only loads one page at a time.
    ✔ Dynamic: Works well for infinite scrolling or paginated lists.
    ✔ Realistic: Mimics a real-world scenario where data comes in chunks.

🚀 How This Would Work in a Real App
    Imagine an infinite scrolling product page.
    Instead of fetching all products at once, the website calls the API page by page.
    When the user scrolls down, the next batch of products is fetched automatically.
