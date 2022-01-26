<script>
  export let plants;
</script>

{#each plants as plant (plant.title)}
  <div>
    <h3>{plant.title}</h3>
    <!-- <p>Your Rating: {plant.rating}</p> -->
  </div>
{/each}

<style>
  div {
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
  }
</style>