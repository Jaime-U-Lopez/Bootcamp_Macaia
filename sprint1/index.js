//Entradas

// lista usuario con los siguientes datos
//Escribir una lista de usuarios con los siguientes datos:
// nombre, número de  documento,contraseñay  tipo  de usuario.
//El  tipo  de  usuario  será:  1: administrador, 2: cliente.Guardarla en un array de objetos.

//proceso
// login

// salida entrega de dinero

//desarrollo

// Array de Objetos :
const listUser = [
  {
    Nombre: "Orlando Lopez",
    Número_de_documento: 121,
    Contraseña: "1",
    Tipo_de_usuario: 1,
    activo:false,
  },
  {
    Nombre: "Maria Fernanda Sepulveda",
    Número_de_documento: 112,
    Contraseña: "1111",
    Tipo_de_usuario: 2,
    activo:false,
  },
  {
    Nombre: "Santiago Sepulveda",
    Número_de_documento: 1,
    Contraseña: "1",
    Tipo_de_usuario: 2,
    activo:false,
  },
];

const EfectivoCajero = [];

// programa de login

const login = () => {
  const mensajeEntrada = confirm(" Debes de hacer Log in para ingresar ");

  if (mensajeEntrada === true) {
    const SetDocumento = parseInt(
      prompt("Ingresa su numero de documento de identificación")
    );
    const SetContraseña = prompt("Ingrese su Constraseña  ");

    for (let index = 0; index < listUser.length; index++) {
      const DocumentUser = listUser[index].Número_de_documento;
      const Passwork = listUser[index].Contraseña;
      const NameUser = listUser[index].Nombre;
      const TypeUser = listUser[index].Tipo_de_usuario;
      const activo = listUser[index].activo;

      if (DocumentUser === SetDocumento && Passwork === SetContraseña) {
        TypeUser === 2
          ? alert(`Login exitoso ¡  Bienvenido  administrador : ${NameUser}. `)
          : alert(`Login exitoso ¡  Bienvenido cliente : ${NameUser}. `);
         /*  
          const indexActual=  listUser.indexOf(activo)
          listUser[indexActual]=true


          const estado= listUser[indexActual];
          console.log(listUser) */


        return;
      } else if (listUser.length - 1 === index) {
        alert("Datos Errados. El usuario no existe.");
        login();
        return;
      }
    }
  } else {
    return;
  }
};

const AdmonCajero = () => {
  const opcionIngreso = confirm("Desea Ingresar dinero al cajero");

  if (opcionIngreso) {
    const setBilleteCinco = parseInt(
      prompt("Ingrese la cantidad de billetes de $ 5.000 COP ")
    );
    const setBilleteDiez = parseInt(
      prompt("Ingrese  la cantidad billetes de $ 10.000 COP ")
    );
    const setBilleteVeinte = parseInt(
      prompt("Ingrese la cantidad billetes de $ 20.000 COP ")
    );
    const setBilleteCincuenta = parseInt(
      prompt("Ingrese la cantidad billetes de $ 50.000  COP ")
    );
    const setBilleteCien = parseInt(
      prompt("Ingrese la cantidad billetes de $ 100.000  COP ")
    );
    let tipoBillete = {
      Cinco: 0,
      Diez: 0,
      Veinte: 0,
      Cincuenta: 0,
      Cien: 0,
    };

    tipoBillete = new Object();
    tipoBillete.Cinco = isNaN(setBilleteCinco) ? 0 : setBilleteCinco;
    tipoBillete.Diez = isNaN(setBilleteDiez) ? 0 : setBilleteDiez;
    tipoBillete.Veinte = isNaN(setBilleteVeinte) ? 0 : setBilleteVeinte;
    tipoBillete.Cincuenta = isNaN(setBilleteCincuenta)
      ? 0
      : setBilleteCincuenta;
    tipoBillete.Cien = isNaN(setBilleteCien) ? 0 : setBilleteCien;

    const IngresoBilletesCajero = EfectivoCajero.push(tipoBillete);
    EfectivoCajero ? conversionDinero() : console.log("Cajero Vacio ");

    const mensajeNuevoLote = confirm(
      "Desea realizar otra Recarga de dinero ? "
    );
    if (mensajeNuevoLote) {
      login()
      AdmonCajero();

    }

    return;
  } else {
    return;
  }
};

const conversionDinero = () => {
  let totalCinco = 0;
  let totalDiez = 0;
  let totalVeinte = 0;
  let totalCincuenta = 0;
  let totalCien = 0;
  let TotalCajero = 0;
  let lote = EfectivoCajero.length;

  for (let index = 0; index < EfectivoCajero.length; index++) {
    const conveCinco = EfectivoCajero[index].Cinco;
    totalCinco += conveCinco * 5000;
    const conveDiez = EfectivoCajero[index].Diez;
    totalDiez += conveDiez * 10000;
    const conveVeinte = EfectivoCajero[index].Veinte;
    totalVeinte += conveVeinte * 20000;
    const conveCincuenta = EfectivoCajero[index].Cincuenta;
    totalCincuenta += conveCincuenta * 50000;
    const conveCien = EfectivoCajero[index].Cincuenta;
    totalCien += conveCien * 100000;
  }

  TotalCajero =
    totalCinco + totalDiez + totalVeinte + totalCincuenta + totalCien;
  console.log(" lotes cargados : " + lote);
  console.log(" Total $5.000 : " + totalCinco);
  console.log(" Total $10.000 :" + totalDiez);
  console.log(" Total $20.000 :" + totalVeinte);
  console.log(" Total $50.000 :" + totalCincuenta);
  console.log(" Total $100.000 :" + totalCien);
  console.log(" Total del cajero actualmente :" + TotalCajero);
};



const cajeroAutomatico = ()=>{
  const mejsajeBienvenida=alert("Bienvenido al Cajero Automatico Gana Gana")
  login();
  AdmonCajero();

}

const retiro = ()=>{

   if( TotalCajero <=0) {
console.log("Cajero en mantenimiento, vuelva pronto." );
login()
    return

   } else{
     const valorRetiro=  parseInt( alert("Que cantidad desea retirar, solo numeros enteros valor minimo  5000 ? "))
     const dineroEnCajero= TotalCajero;

     if(dineroEnCajero >=valorRetiro){
      
        

     }
     const disponibleDe = dineroEnCajero -valorRetiro


   }
  


}


cajeroAutomatico()
