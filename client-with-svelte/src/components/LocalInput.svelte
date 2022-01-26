<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let title ='';

    const onTitleChange = e => {
        title = e.target.value;
    }


    const submitPlant = () => {
        if (title) {
        dispatch('submitPlant', {
            plant: {title}
        });
        title = '';
        }
    }
</script>

<div class='main'>
    <input 
      placeholder="Plant" 
      type='text' 
      value={title}
      on:keyup={onTitleChange}
    />

    <button on:click={submitPlant} disabled={!title}>Submit</button>
</div>

<style>
    input {
        width: 30%;
    }
</style>