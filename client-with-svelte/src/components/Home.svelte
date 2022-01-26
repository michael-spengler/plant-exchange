<script>
  export let name;
  let searchTerm = "";

  function search() {
    alert(`I'm looking for ${searchTerm}`);
  }
</script>

<h1>Hello {name}!</h1>
<p>Which plant are you looking for?</p>

<!-- svelte-ignore a11y-autofocus -->
<input bind:value={searchTerm} placeholder="start typing..." autofocus />

<button on:click={search}> Go </button>
<link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
/>

<style>
  h1 {
    color: #0d750d;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
