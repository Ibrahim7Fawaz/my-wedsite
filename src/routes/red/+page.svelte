<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title>Box Layout</title> 
  <style>
    

    .container {
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      margin-top: 20px; 
    }

    .long-box {
      width: 60%; 
      height: 100px; 
      background-color: red; 
      margin-bottom: 10px; 
    }

    .box-container {
      display: flex; 
      justify-content: center; 
      gap: 10px; 
    }

    .box {
      width: 250px; 
      height: 225px; 
      background-color: red; 
    }
  </style>
</head>
<body>

 
  <div class="container">
    
    <div class="long-box"></div>
    
    
    <div class="box-container" id="boxContainer"></div>
  </div>

  <script>
    
    document.addEventListener("DOMContentLoaded", () => {
      
      const container = document.getElementById("boxContainer");

      
      for (let i = 0; i < 3; i++) {
        
        const box = document.createElement("div");
        
        
        box.classList.add("box");
        
        
        container.appendChild(box);
      }
    });
  </script>

</body>
</html>
