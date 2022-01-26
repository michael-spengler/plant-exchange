<script>
  import Search from "./Search.svelte";
  import Input from "./LocalInput.svelte";
  import List from "./LocalList.svelte";

  export let name;

  let plants = localStorage.getItem('plants') ? 
	  JSON.parse(localStorage.getItem('plants')) : 
	  [];

	const submitMovie = plant => {
	  const updatedPlants = [ ...plants, plant ];
	  localStorage.setItem('plants', JSON.stringify(updatedPlants));
	  plants = updatedPlants;
	}

	const clearSearch = () => {
	  plants = localStorage.getItem('plants') ? 
		JSON.parse(localStorage.getItem('plants')) : 
		[];
	};

	const search = searchTerm => {
	  const tempPlants = localStorage.getItem('plants') ? 
		JSON.parse(localStorage.getItem('plants')) : 
		[];
   
	  plants = tempPlants.filter(m => 
		m.title.toLowerCase().includes(searchTerm.toLowerCase()));
	};

</script>

<h1>Hello {name}!</h1>
<p>Which plant are you looking for?</p>

<Search/>
<!-- <List/> -->
<p>Or add a new Plant</p>
<Input/>

<style>
  h1 {
    color: #0F5132;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
