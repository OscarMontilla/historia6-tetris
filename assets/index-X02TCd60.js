(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const f=[{color:"bg-primary",nombre:"palo",matriz:[[[1],[1],[1],[1]],[[1,1,1,1]],[[1],[1],[1],[1]],[[1,1],[1,1]]]},{color:"bg-secondary",nombre:"cuadrado",matriz:[[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]]]},{color:"bg-success",nombre:"L",matriz:[[[1,0],[1,0],[1,1]],[[1,1,1],[1,0,0]],[[1,1],[0,1],[0,1]],[[1,1,1],[0,0,1]]]},{color:"bg-danger",nombre:"L invertida",matriz:[[[0,1],[0,1],[1,1]],[[1,0,0],[1,1,1]],[[1,0],[1,0],[1,1]],[[1,1,1],[1,0,0]]]},{color:"bg-warning",nombre:"T",matriz:[[[1,1,1],[0,1,0]],[[1,0],[1,1],[1,0]],[[0,1,0],[1,1,1]],[[0,1],[1,1],[0,1]]]},{color:"bg-info",nombre:"Z",matriz:[[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]],[[1,1,0],[0,1,1]],[[0,1],[1,1],[0,1]]]},{color:"bg-dark",nombre:"Z invertida",matriz:[[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]],[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]]]}];class k{constructor(i,t=0,o=0,r=0){this.modelo=i,this.angulo=r,this.matriz=f[this.modelo].matriz[this.angulo],this.x=t,this.y=o,this.longitud=this.matriz[0].length,this.altura=this.matriz.length}girar(){this.angulo=this.angulo+1,this.angulo>3&&(this.angulo=0),this.matriz=f[this.modelo].matriz[this.angulo],this.longitud=this.matriz[0].length,this.altura=this.matriz.length}}const e={matriz:[[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],pintaPanel:()=>{const a=document.querySelector("#panel");a.innerHTML="";for(let i=0;i<e.matriz.length-1;i++){let t='<div class="fila" style="display: flex; justify-content: center;">';for(let o=1;o<e.matriz[i].length-1;o++){let r="";e.matriz[i][o]===0?r+='<div class="celda" style="background-color: #343a40; border: 1px solid black"></div>':r+='<div class="celda" style="background-color: #007bff; border: 1px solid black"></div>',t+=r}t+="</div>",a.innerHTML+=t}},borrarPieza:()=>{if(e.nuevaPieza){for(let a=0;a<e.nuevaPieza.altura;a++)for(let i=0;i<e.nuevaPieza.longitud;i++)e.nuevaPieza.matriz[a][i]&&(e.matriz[a+e.nuevaPieza.y][i+e.nuevaPieza.x]=0);e.pintaPanel()}},crearNuevaPieza:()=>{const a=Math.floor(Math.random()*7),i=f[a].matriz[0].length;let t;switch(i){case 1:t=Math.floor(Math.random()*10);break;case 2:t=Math.floor(Math.random()*9);break;case 3:t=Math.floor(Math.random()*8);break;case 4:t=Math.floor(Math.random()*7);break}const o=new k(a,t,1,0);return e.nuevaPieza=o,o},insertarPieza:()=>{for(let a=0;a<e.nuevaPieza.altura;a++)for(let i=0;i<e.nuevaPieza.longitud;i++){const t=e.nuevaPieza.matriz[a][i];t&&(e.matriz[a+e.nuevaPieza.y][i+e.nuevaPieza.x]=t)}e.pintaPanel()},moverDra:()=>{e.nuevaPieza&&e.nuevaPieza.x+e.nuevaPieza.longitud<11&&(e.borrarPieza(),e.nuevaPieza.x++,e.insertarPieza(),e.pintaPanel())},moverIzq:()=>{e.nuevaPieza&&e.nuevaPieza.x>1&&(e.borrarPieza(),e.nuevaPieza.x--,e.insertarPieza(),e.pintaPanel())},bajar:()=>{e.nuevaPieza&&e.nuevaPieza.y+e.nuevaPieza.altura<21&&(e.borrarPieza(),e.nuevaPieza.y++,e.insertarPieza(),e.pintaPanel())},iniciarMovimiento:()=>{e.movimientoInterval=setInterval(()=>{e.bajar()},1e3)},controlTeclas:()=>{document.addEventListener("keydown",a=>{switch(a.key){case"ArrowLeft":e.moverIzq(),console.log("izquierda");break;case"ArrowRight":e.moverDra(),console.log("derecha");break;case"ArrowDown":e.bajar(),console.log("abajo");break;case"ArrowUp":e.borrarPieza(),e.nuevaPieza.girar(),e.insertarPieza(),console.log("arriba");break}})}},v={template:`
  <!-- Pantalla del juego -->
  <div id="juego">
  <div class="row">
    <!-- Panel izquierda -->
    <div
      class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
    >
      <h4>Nivel: <span>2</span></h4>
      <h4>Tiempo: <span>5:22</span></h4>
      <h4>Lineas: <span>2</span></h4>
      <h4>Puntos: <span>211122</span></h4>
    </div>
    <!-- Panel central -->
    <div class="col-4 d-flex justify-content-center">
      <div id="panel" class="p-3">
       
      </div>
    </div>
    					<!-- Panel derecha -->
              <div
              class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
            >
              <div id="piezaSiguiente">
                <h4>Pieza siguiente:</h4>
                <div class="piezaSiguiente m-2">
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-dark border-secondary">x</div>
                  </div>
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-dark border-secondary">x</div>
                  </div>
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                  </div>
                </div>
                <div class="piezaSiguiente m-2">
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-dark border-secondary">x</div>
                  </div>
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-dark border-secondary">x</div>
                  </div>
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                  </div>
                </div>
                <div class="piezaSiguiente m-2">
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-dark border-secondary">x</div>
                  </div>
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-dark border-secondary">x</div>
                  </div>
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                  </div>
                </div>
              </div>
              <hr />
              <div id="piezaGuardada">
          
                <h4>Pieza guardada:</h4>
                <div class="piezaGuardada">
                  <div class="piezaSiguiente m-2">
                    <div class="fila d-flex justify-content-center">
                      <div class="celda bg-warning bg-gradient border-dark">x</div>
                      <div class="celda bg-warning border-secondary">x</div>
                    </div>
                    <div class="fila d-flex justify-content-center">
                      <div class="celda bg-warning bg-gradient border-dark">x</div>
                      <div class="celda bg-warning border-secondary">x</div>
                      
                    </div>
                   
               
                  </div>
                </div>
              </div>
            </div>
    `,script:()=>{e.pintaPanel(),e.crearNuevaPieza(),e.controlTeclas(),e.insertarPieza(),e.iniciarMovimiento()}},g={template:`
    <header class="d-flex align-items-center justify-content-center">
			<img src="logo.png" alt="logo" width="200" class="mt-5" />
		</header>
    <main class="container mt-5 bg-opacity-50 bg-dark p-2">
    <div id="intro" class="text-center p-5 text-light">
    <p>
      Tetris és un videojoc de tipus trencaclosques. Fou inventat per
      l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984,[1] mentre
      treballava a l'Acadèmia de Ciències de Moscou.
    </p>
    <h2>Instruccions:</h2>
    <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>
    <p>Amb la fletxa avall pots girar la peça</p>
    <p>
      '<strong>Ñ</strong>' per canviar la peça actual per la peça que està a
      punt de sortir (que pots veure a la columna de la dreta)
    </p>
    <p>
      Al final de la partida podràs desar la teva puntuació, i verue el
      ranking de jugadors
    </p>
    <button id="btnJugar" class="btn btn-success fs-1 mt-5">JUGAR</button>
    <hr />
  </div>
    `,script:()=>{document.querySelector("#btnJugar").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=v.template,v.script()})}},d=[{avatar:"account-avatar-profile-user-13-svgrepo-com.svg",nick:"Eric",puntos:"455",fecha:"31/12/2004"},{avatar:"account-avatar-profile-user-13-svgrepo-com.svg",nick:"David",puntos:"2",fecha:"30/05/2004"},{avatar:"account-avatar-profile-user-13-svgrepo-com.svg",nick:"Oscar",puntos:"345",fecha:"04/12/2004"}],b=(a,i)=>{let t="";const o=document.querySelector("#partidas tbody");switch(a){case"nick":return console.log("Ordenar por nick"),d.sort((r,n)=>r.nick.localeCompare(n.nick,"es",{sensitivity:"base"})),t=m(d),o.innerHTML=t,d;case"points":return console.log("Ordenar por puntos"),d.sort((r,n)=>n.puntos-r.puntos),t=m(d),o.innerHTML=t,d;default:return console.log("Ordenar por fecha"),d.sort((r,n)=>new Date(r.fecha)-new Date(n.fecha)),t=m(d),o.innerHTML=t,d}},m=a=>{let i="";return a.forEach(t=>{i+=`
            <tr>
                <td><img src="${t.avatar}" style= "width: 30px" alt=""></td>
                <td>${t.nick}</td>
                <td>${t.puntos}</td>
                <td>${t.fecha}</td>
            </tr>`}),i},p={template:`
   
    <main class="container mt-5 bg-opacity-50 bg-dark p-2">
        <!-- Pantalla tablas y ranking -->
        <div id="info" class="">
            <div id="ranking" class="m-5 p-5 bg-dark">
            </div>
            <div id="partidas" class="m-5 p-5 bg-dark">
            </div>
        </div>
    </main>
    `,script:()=>{function a(){const s=document.querySelector("#ranking");s.innerHTML=`<h2 class="text-center text-light">Ranking</h2>
                <table class="table table-dark align-middle">
                    <thead>
                        <tr class="bg-dark">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td><img style="width: 30px" src="https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg" alt="avatar" /></td>
                            <td>Paco</td>
                            <td>1255</td>
                        </tr>
                        <tr>
                            
                            <td><img style="width: 30px" src="https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg" alt="avatar" /></td>
                            <td>Manuel</td>
                            <td>1255</td>
                        </tr>
                        <tr>
                        
                            <td><img style="width: 30px" src="https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg" alt="avatar" /></td>
                            <td>Ricardo</td>
                            <td>1255</td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>`}function i(){const s=document.querySelector("#partidas");let l=`<h2 class="text-center text-light">Partidas</h2>
                <div class="input-group mb-3">
                    <button id="botonBuscar">BUSCAR</button>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Buscador"
                        aria-label="Buscador"
                        aria-describedby="button-addon2"
                        id="buscadorNick"
                    />
                    <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                    >
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nick <i id="flechaNick" class="bi bi-arrow-up-square"></i></th>
                            <th>Puntuación<i id="flechaPuntuacion" class="bi bi-arrow-up-square"></i></th>
                            <th>Fecha <i id="flechaFecha" class="bi bi-arrow-up-square"></i></th>
                        </tr>
                    </thead>
                    <tbody>`;d.forEach(c=>{l+=`<tr>
                        <td><img src="${c.avatar}" style= "width: 30px" alt=""></td>
                        <td>${c.nick}</td>
                        <td>${c.puntos}</td>
                        <td>${c.fecha}</td>
                    </tr>`}),l+=`
                    </tbody>
                    <tfoot></tfoot>
                </table>`,s.innerHTML=l}const t={avatar:"https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg",nick:"MANUEL",puntos:100,fecha:"21 MAYO 2023"};function o(s){console.log("Datos de la partida:"),console.log("Avatar:",s.avatar),console.log("Nick:",s.nick),console.log("Puntos:",s.puntos),console.log("Fecha:",s.fecha)}console.log(a),console.log(i),i(),a(),o(t),document.getElementById("botonBuscar").addEventListener("click",n);function n(){const s=document.getElementById("buscadorNick").value;console.log("nombre buscado: ",s);const l=d.filter(c=>c.nick.toLowerCase().includes(s.toLowerCase()));u(l)}function u(s){const l=document.querySelector("#partidas tbody");l.innerHTML="",s.forEach(c=>{const y=`
                    <tr>
                        <td><img src="${c.avatar}" style="width: 30px" alt=""></td>
                        <td>${c.nick}</td>
                        <td>${c.puntos}</td>
                        <td>${c.fecha}</td>
                    </tr>
                `;l.innerHTML+=y})}document.querySelector("#flechaNick").addEventListener("click",function(){console.log("Click en flechaNick"),b("nick")}),document.querySelector("#flechaPuntuacion").addEventListener("click",function(){console.log("Click en flechaPuntuacion"),b("points")}),document.querySelector("#flechaFecha").addEventListener("click",function(){console.log("Click en flechaFecha"),b("date")})}},h={template:`
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
          <button id="vistaHome" class="btn btn-success mx-2 fs-4">HOME</button>
          <button id="vistaRanking" class="btn btn-success mx-2 fs-4">RANKING</button>
          <button id="vistaJuego" class="btn btn-success mx-2 fs-4">JUEGO</button>
        </div>
      </div>
    </nav>
    `,script:()=>{document.querySelector("#vistaHome").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=g.template,g.script()}),document.querySelector("#vistaRanking").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=p.template,p.script()}),document.querySelector("#vistaJuego").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=v.template,v.script()})}};document.querySelector("header").innerHTML=h.template;h.script();document.querySelector("main").innerHTML=p.template;p.script();document.querySelector("main").innerHTML=g.template;g.script();v.script();
