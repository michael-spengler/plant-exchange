<script>
  import Search from "./Search.svelte";

  export let name;
  

  
  let count = 0;

  function incrementCount() {
    count += 1;
  }
  const data = `{
  "name" : "Alex",
  "age" : 20,
  "grade" : "A"
}`;

let json = JSON.parse(data);
console.log(json);
//console.log(`Name: ${json.name}, Age: ${json.age}, Grade: ${json.grade}`);
</script>

<h1>Hello {name}!</h1>
<h3>Name: {json.name}, Age: {json.age}, Grade: {json.grade}</h3>
<p>Which plant are you looking for?</p>

<Search/>


<style>
  h1 {
    color: #0F5132;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

</style>
