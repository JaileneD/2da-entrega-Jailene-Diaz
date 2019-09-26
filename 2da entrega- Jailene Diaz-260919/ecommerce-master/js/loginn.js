function datos() {
    var name = document.getElementById("name").value;

    //var password = document.getElementById("password");
  //hacer el sessionStorage 
          sessionStorage.setItem("name", name);
}

function agregar() {
     //acceder al dato sessionsStorage.getItem
  //agregar ese dato al HTML correspondiente.

    var data = sessionStorage.getItem("name");

  let container = "";
      
  container +=  `
     <div>
     <a class="nav-link">` + data + `</a>
     </div>
      `
      
      document.getElementById("usuario").innerHTML = container;
      
}

//programaos el evento de cuando el documento esta cargado y llamaos a la funcion agregar.  

document.addEventListener("DOMContentLoaded", function(e){
       agregar();

});
