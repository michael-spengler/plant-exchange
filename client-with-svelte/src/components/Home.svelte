<script>
  export let name;
  let searchTerm = "";

  function search() {
    if (!searchTerm){
      alert('Enter a search term first.')
    }else{
      alert(`I'm looking for ${searchTerm}`);
    }
    
  }


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

<!-- svelte-ignore a11y-autofocus -->
<input bind:value={searchTerm} placeholder="start typing..." autofocus />

<button on:click={search}> Go </button>
<link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
/>


<button on:click={incrementCount}>
	Anzahl der erstellten Anzeigen {count} {count === 1 ? 'time' : 'times'}
</button>



<style>
  h1 {
    color: #0F5132;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

</style>
