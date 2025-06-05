<script>
  let backgroundColor = "transparent";
  let snakeColor = "#0E784D";
  let letterColor = "#2C3371";
  let gridSize = 36;
  let letterOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-_.".split("");
  let pixelSize = 15;
  let username = "";
  let speed = 250;
  
  let grid = [];
  

  //
  function initializeGrid(size) {
      let tempLetters = [];
      letterOptions.forEach((letter) => {
          let index;
          do {
              index = Math.floor(Math.random() * size * size);
          } while (tempLetters.some((l) => l.id === index));
          tempLetters.push({ letter, id: index });
      });
      
      grid = [];
      let k = 0;
      for (let i = 0; i < size; i++) {
          let row = [];
          for (let j = 0; j < size; j++) {
              let letterPixel = tempLetters.find((l) => l.id === k);
              row.push(letterPixel ? { color: letterColor, letter: letterPixel.letter } : { color: backgroundColor, letter: "" });
              k++;
          }
          grid.push(row);
      }
  }
  
  initializeGrid(gridSize);
  
  let snakeX = 0;
  let snakeY = 0;
  let directionX = 0;
  let directionY = 0;
  let intervalId = null;
  
  function handleKeyPress(event) {
      switch (event.key) {
          case "ArrowUp":
              directionY = -1;
              directionX = 0;
              break;
          case "ArrowDown":
              directionY = 1;
              directionX = 0;
              break;
          case "ArrowLeft":
              directionX = -1;
              directionY = 0;
              break;
          case "ArrowRight":
              directionX = 1;
              directionY = 0;
              break;
      }
      
      if (intervalId) clearInterval(intervalId);
      
      intervalId = setInterval(() => {
          let nextX = snakeX + directionX;
          let nextY = snakeY + directionY;
          
          if (nextY >= 0 && nextY < gridSize && nextX >= 0 && nextX < gridSize) {
              snakeX = nextX;
              snakeY = nextY;
          } else {
              username = "";
              directionX = 0;
              directionY = 0;
          }
      }, speed);
  }
  
  function handleLetterCollision(pixel) {
      username += pixel.letter;
      let newX, newY;
      do {
          newX = Math.floor(Math.random() * gridSize);
          newY = Math.floor(Math.random() * gridSize);
      } while (grid[newY][newX].letter !== "");
      
      grid[newY][newX] = { color: letterColor, letter: pixel.letter };
      pixel.color = backgroundColor;
      pixel.letter = "";
  }
</script>

<svelte:window on:keydown|preventDefault={handleKeyPress} />
<p>USERNAME: {username}</p>
<main>
  <div class="grid">
      {#each grid as row, rowIndex}
          <div class="row">
              {#each row as pixel, colIndex}
                  {#if rowIndex === snakeY && colIndex === snakeX}
                      {#if pixel.letter !== ""}
                          {handleLetterCollision(pixel)}
                      {/if}
                      <div class="pixel" style="background: {snakeColor}; width: {pixelSize}px; height: {pixelSize}px;">
                          {Math.abs(directionX) === 1 ? (directionX === 1 ? ">" : "<") : (directionY === 1 ? "v" : "^")}
                      </div>
                  {:else}
                      <div class="pixel" style="background: {pixel.color}; width: {pixelSize}px; height: {pixelSize}px;">
                          {pixel.letter}
                      </div>
                  {/if}
              {/each}
          </div>
      {/each}
  </div>
</main>

<style>
  main {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      min-height: 100vh;
  }
  .grid {
      display: grid;
      grid-gap: 0;
      border: #110103 solid 1px;
      margin-top: 20px;
      background-color: transparent;
  }
  .row {
      display: flex;
  }
  .pixel {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 70%;
      transition: background 0.1s;
      text-align: center;
  }
</style>
