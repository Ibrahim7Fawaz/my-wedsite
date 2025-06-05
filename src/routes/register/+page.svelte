<script>
 
    let color="white";


    function handleSubmit(){
        alert("reg")
    }


</script>


<main>
    
<div class="container">

    <form on:submit|preventDefault={handleSubmit}>
    <div style="background-color: {color}; padding: 10px; margin-bottom: 10px;">

    </div>
    <label for="colorSelect">Välj en färg:</label>
  <select id="colorSelect" bind:value={color}>
    <option value="black">Svart</option>
    <option value="red">Röd</option>
    <option value="blue">Blå</option>
    <option value="green">Grön</option>
  </select>

    <label for="name">Namn:</label>
    <input type="text" id="name" >
    <label for="epost">epost:</label>
    <input type="email" id="epost" >
    <label for="password">lösenord:</label>
    <input type="password" id="password" >
    <label for="color">favourtfaräg</label>
    <select name="color" id="color">

        <option value="blue">Blå</option>

    </select>
    <input style="display:block;" type="submit" value="Registrera">

    </form>

</div>
</main>

<style>
 main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        color: grey;
    }
    
.container{
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-color: #3a2e3b;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        
}     

option{
    color:black;
}
        
</style>
