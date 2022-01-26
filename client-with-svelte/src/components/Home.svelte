<script>
  import Search from "./Search.svelte";

  export let name;
  

  
  let count = 0;

  function incrementCount() {
    count += 1;
  }
</script>

<h1>Hello {name}!</h1>
<p>Which plant are you looking for?</p>

<Search/>


<style>
  h1 {
    color: #0F5132;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  p {
    color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
  }
</style>
