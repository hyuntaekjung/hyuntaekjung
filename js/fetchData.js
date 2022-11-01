async function fetchData() {
  let result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let data = await result.json();

  console.log(data);
}
