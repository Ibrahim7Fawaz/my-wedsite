import{s as x,n as o}from"../chunks/scheduler.Bnzw7RF6.js";import{S as h,i as b,e as d,s as u,c as r,a as g,g as v,b as m,d as s,f as l}from"../chunks/index.CK8hOepm.js";function f(p){let n,i,e,c=`<head><meta charset="UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>Box Layout</title> <style>.container {
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
    }</style></head> <body><div class="container"><div class="long-box"></div> <div class="box-container" id="boxContainer"></div></div> <script>document.addEventListener("DOMContentLoaded", () => {
      
      const container = document.getElementById("boxContainer");

      
      for (let i = 0; i < 3; i++) {
        
        const box = document.createElement("div");
        
        
        box.classList.add("box");
        
        
        container.appendChild(box);
      }
    });<\/script></body>`;return{c(){n=d("!DOCTYPE"),i=u(),e=d("html"),e.innerHTML=c,this.h()},l(t){n=r(t,"!DOCTYPE",{html:!0}),i=g(t),e=r(t,"HTML",{lang:!0,"data-svelte-h":!0}),v(e)!=="svelte-z3kkdy"&&(e.innerHTML=c),this.h()},h(){m(n,"html",""),m(e,"lang","en")},m(t,a){s(t,n,a),s(t,i,a),s(t,e,a)},p:o,i:o,o,d(t){t&&(l(n),l(i),l(e))}}}class _ extends h{constructor(n){super(),b(this,n,null,f,x,{})}}export{_ as component};
