<script>
    export let plants;
</script>
  
{#each plants as plants (plants.title)}
  <div>
    <h3>{plants.title}</h3>
  </div>
{/each}
  
<style>
  div {
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
  }
</style>