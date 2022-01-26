<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let searchTerm = '';


    // const search = event => {
    //     searchTerm = event.target.value;
        
    //     if (searchTerm) {
    //     dispatch('search', {
    //         searchTerm,
    //     });
    //     } else {
    //     dispatch('clearSearch', {});
    //     }
    // }

    function searchPopup() {
    if (!searchTerm){
      alert('Enter a search term first.')
    }else{
      alert(`I'm looking for ${searchTerm}`);
    }
    
  }
</script>

<!-- svelte-ignore a11y-autofocus -->
<input 
    bind:value={searchTerm}
    placeholder="start typing..."
    autofocus
/>

<button on:click={searchPopup}> Go </button>
<link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
/>

<style>
    input {
        width: 30%;
    }
</style>