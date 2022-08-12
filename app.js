const Productos = [
    {id: 1, pedido: "Paneles Triangulares", precio: 10000, incluye: "Un pack de 3 u"},
    {id: 2, pedido: "Paneles Hexagonales", precio: 15000, incluye: "Un pack de 4 u"},
    {id: 3, pedido: "Cartel Neon", precio: 7500, incluye: "2 mts de neon led formando un diseño"},
    {id: 4, pedido: "Esquineros Led", precio: 18000, incluye: "Un par de esquineros led"}]
  
    Productos.push ({id:5, pedido: "Lineas Led" , precio: 8500, incluye: "Lineas led formando un diseño" });
  
  function saludar (){
      alert ("¡Hola! Bienvenido a Nano Luminous");  
      nombreUsuario = prompt ("Escribe tu nombre").toLocaleUpperCase();
      saludoBienvenida = "Hola" + " " + nombreUsuario ;
      return saludoBienvenida 
  }

  alert (saludar())
  
  const opcionesLed = parseInt (prompt ("Elija que tipo de pedido le interesa: \n 1: Paneles Triangulares \n 2: Paneles Hexagonales \n 3: Cartel Neon \n 4: Esquineros Led \n 5: Lineas Led "));
  
  const cantidadUnidades = parseInt ( prompt ("Escribe la cantidad de unidades que desea"));

  for (const pedido of Productos) {

  const presu = (a,b) => pedido.precio*cantidadUnidades;
  
    if (pedido.id == opcionesLed){
       alert (nombreUsuario +"," + " Los detalles de la compra: : \n Producto a encargar:" + " " + pedido.pedido + "\n Cantidad de unidades: x" + " " + cantidadUnidades + "\n" +
       " Costo total :$" + " " +  (presu())+ "\n Incluye :"+ " " + pedido.incluye );
  }
  }


