<script>
    let varor = [{name:"äpple"}]
  </script>
  
  <main class="container">
    <header>Shoppinglist</header>
    <div class="categories_container">
      <section>
        <h2>
          varor att köpa 
        </h2>
      </section>
      <section>
        <h2>
          köpta varor
        </h2>

      <o1>
        <li>
          vara1
        </li>
        <li>
          vara2
        </li>
        </o1>
      <u1>
        {#each varor as vara }
        <li>
          {vara.name}
        </li>
        {/each}
        <li>
          vara2
        </li>
      </u1>


        
      </section>
 
    </div>
  </main>
  
  <style>

    


    h2{
      font-size :1.8rem;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.5) ;/* svart bakgrund med 10% opacitet */
      margin:20px 0;
      padding: 10px;
    }
    .container {
      background-color: #f0f0f0; 
      width: 60vw;
      height: 70vh;
      border-radius: 20px;
      padding: 20px;
      display: grid;
      grid-template-rows: 1fr 8fr 1fr; 
      gap: 10px; 
    }
  
    .container header {
      background-color: #f2ea04; 
      border-radius: 20px;
      padding: 10px;
      text-align: center;
      font-size: 1.5rem;
      justify-self: center; 
      align-self: center; 
    }
  
    .categories_container {
      display: grid;
      grid-template-columns: 1fr 1fr; 
      height: 100%;
      background-color: #fc0505; 
      padding: 20px;
      border-radius: 10px;
    }
    
 .categories_container section:nth-child(even){ 
    background-color: rgba(0, 0, 0, 0.1) 
  }
 
  .categories_container section:nth-child(odd){ 
    background-color: rgba(0, 0, 0, 0.3) 
  }

  
    .empty_row {
            
    }
  
    </style>
  