<script>
	import LocalInput from './LocalInput.svelte';
  import LocalList from './LocalList.svelte';
	import Search from './Search.svelte';

	let plants = localStorage.getItem('plants') ? 
	  JSON.parse(localStorage.getItem('plants')) : 
	  [];

	const submitPlant = plant => {
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
  
  <div class='main'>
	<h1>Plant Exchange</h1>
  
	<Search on:search={event => search(event.detail.searchTerm)} on:clearSearch={clearSearch} />
	<LocalInput on:submitPlant={event => submitPlant(event.detail.plant)} />
	<LocalList plants={plants} />
  </div>
  
  <style>
	  .main {
	  width: 500px;
	  max-width: 100%;
	  padding: 1em;
	  margin: auto;
	  text-align: center;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
  </style>