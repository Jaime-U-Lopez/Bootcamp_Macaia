// Array de Objetos :
const listUser = [
  {
    Nombre: "Orlando Lopez",
    Número_de_documento: 2,
    Contraseña: "1",
    Tipo_de_usuario: 1,
    activo: false,
  },
  {
    Nombre: "Maria Fernanda Sepulveda",
    Número_de_documento: 112,
    Contraseña: "1111",
    Tipo_de_usuario: 2,
    activo: false,
  },
  {
    Nombre: "Santiago Sepulveda",
    Número_de_documento: 1,
    Contraseña: "1",
    Tipo_de_usuario: 2,
    activo: false,
  },
];

const EfectivoCajero = [
  {
    Cien: 0,
    Cincuenta: 0,
    Veinte: 0,
    Diez: 0,
    Cinco: 0,
  },
];

const UnidadesRetiro = [
  {
    Cien: 0,
    Cincuenta: 0,
    Veinte: 0,
    Diez: 0,
    Cinco: 0,
  },
];

// programa de login

/* let PagoRestante = 0;

let totalCinco = 0;
let totalDiez = 0;
let totalVeinte = 0;
let totalCincuenta = 0;
let totalCien = 0;
let TotalCajero = 500000; */
let valorRetiroInicial = 0;
let valorRetiroSaldo = 0;
let correr = false;

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
        if (TypeUser === 2) {
          alert(`Login exitoso ¡  Bienvenido  administrador : ${NameUser}. `);
          AdmonCajero();
        } else {
          alert(`Login exitoso ¡  Bienvenido cliente : ${NameUser}. `);
          retiro();
        }

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

   let valorCinco = EfectivoCajero[0].Cinco =  EfectivoCajero[0].Cinco + isNaN(setBilleteCinco) ? 0: setBilleteCinco  ;
    console.log(valorCinco)
    EfectivoCajero[0].Diez =
      EfectivoCajero[0].Diez + isNaN(setBilleteDiez) ? 0 :setBilleteDiez ;
    EfectivoCajero[0].Veinte =
      EfectivoCajero[0].Veinte + isNaN(setBilleteVeinte) ? 0: setBilleteVeinte  ;
    EfectivoCajero[0].Cincuenta =
      EfectivoCajero[0].Cincuenta + isNaN(setBilleteCincuenta) ? 0:setBilleteCincuenta  ;
    EfectivoCajero[0].Cien =
      EfectivoCajero[0].Cien + isNaN(setBilleteCien) ? 0 : setBilleteCien;

    EfectivoCajero ? conversionDinero() : console.log("Cajero Vacio ");

    const mensajeNuevoLote = confirm(
      "Desea realizar otra Recarga de dinero ? "
    );
    if (mensajeNuevoLote) {
      login();
      AdmonCajero();
    } else {
      alert("Hasta Luego Administrador ");
      login();
    }

    return;
  } else {
    return;
  }
};

const retiro = () => {
  if (TotalCajero <= 0) {
    console.log("Cajero en mantenimiento, vuelva pronto.");
    login();
    return;
  } else {
    const valorRetiro = parseInt(
      prompt(
        "Que cantidad desea retirar, solo numeros enteros valor minimo  5000 ? "
      )
    );

    console.log("Retiro solicitado: " + valorRetiro);
    let saldoCajero=  saldo()
    if(valorRetiro<= saldoCajero && valorRetiro >=5000 ){

      OperacionRetiro(valorRetiro);

    }else{

      alert(" Lo sentimos esa cantidad no la podemos entregar valide por favor nuevamente")
      console.log("Retiro Cancelado por el cajero ")
      login();
    }

    
  }
};

const saldo = () => {
  let valorActual = 0;
  let total = 0;
  for (let v of EfectivoCajero) {
    valorActual =
      valorActual +
      v.Cinco * 5000 +
      v.Diez * 10000 +
      v.Veinte * 20000 +
      v.Cincuenta * 50000 +
      v.Cien * 100000;
    total += valorActual;

   
    return total;
  }
};

const OperacionRetiro = (valor) => {
  const val = [100000, 50000, 20000, 10000, 5000];

  let denominacion = 0;

  for (let index = 0; index < val.length; index++) {
    const element = val[index];
    denominacion = element;

    let saldo = saldoRetiros();
    let valorInicial = valor - saldo;

    let cantidad = parseInt(
      valorInicial > 0 ? valorInicial : valor / denominacion
    );

    let valorActualCien = EfectivoCajero[0].Cien;
    let valorActualCincuenta = EfectivoCajero[0].Cincuenta;
    let valorActualVeinte = EfectivoCajero[0].Veinte;
    let valorActualDiez = EfectivoCajero[0].Diez;
    let valorActualCinco = EfectivoCajero[0].Cinco;

    switch (denominacion) {
      case 100000:
        if (cantidad <= valorActualCien) {
          const nuevoValor = valorActualCien - cantidad;
          const totalBilLetes = cantidad * valor;

          if (UnidadesRetiro[0].Cien === 0) {
            EfectivoCajero[0].Cien = nuevoValor;
            UnidadesRetiro[0].Cien = 0 + cantidad;
          }
        } else if (valorActualCien > 0 && valorInicial >=denominacion) {
          const nuevoValor = 0;
          const totalBilLetes = valorActualCien * denominacion;
        
          if (UnidadesRetiro[0].Cien === 0 ) {
            EfectivoCajero[0].Cien = nuevoValor;
            UnidadesRetiro[0].Cien = valorActualCien;
          }
        }

        break;

      case 50000:
        if (cantidad <= valorActualCincuenta) {
          const nuevoValor = valorActualCincuenta - cantidad;
          const totalBilLetes = cantidad * valor;

          if (UnidadesRetiro[0].Cincuenta === 0) {
            EfectivoCajero[0].Cincuenta = nuevoValor;
            UnidadesRetiro[0].Cincuenta = 0 + cantidad;
          }
        } else if (valorActualCincuenta > 0 && valorInicial >=denominacion) {
          const nuevoValor = 0;
          const totalBilLetes = valorActualCincuenta * denominacion;

          if (UnidadesRetiro[0].Cincuenta === 0) {
            EfectivoCajero[0].Cincuenta = nuevoValor;
            UnidadesRetiro[0].Cincuenta =
              UnidadesRetiro[0].Cincuenta + valorActualCincuenta;
          }
        }

        break;

      case 20000:
        if (cantidad <= valorActualVeinte) {
          const nuevoValor = valorActualVeinte - cantidad;
          const totalBilLetes = cantidad * valor;

          if (UnidadesRetiro[0].Veinte === 0) {
            EfectivoCajero[0].Veinte = nuevoValor;
            UnidadesRetiro[0].Veinte = 0 + cantidad;
          }
        } else if (valorActualVeinte > 0) {
          const nuevoValor = 0;
          const totalBilLetes = valorActualVeinte * denominacion;

          if (UnidadesRetiro[0].Veinte === 0  && valorInicial >=denominacion) {
            EfectivoCajero[0].Veinte = nuevoValor;
            UnidadesRetiro[0].Veinte = valorActualVeinte;
          }
        }

        break;

      case 10000:
        if (cantidad <= valorActualDiez) {
          const nuevoValor = valorActualDiez - cantidad;
          const totalBilLetes = cantidad * valor;

          if (UnidadesRetiro[0].Diez === 0) {
            EfectivoCajero[0].Diez = nuevoValor;
            UnidadesRetiro[0].Diez = 0 + cantidad;
          }
        } else if (valorActualDiez > 0) {
          const nuevoValor = 0;
          const totalBilLetes = valorActualDiez * denominacion;

          if (UnidadesRetiro[0].Diez === 0 && valorInicial >=denominacion) {
            EfectivoCajero[0].Diez = nuevoValor;
            UnidadesRetiro[0].Diez = valorActualDiez;
          }
        }

        break;

      case 5000:
        if (cantidad <= valorActualCinco) {
          const nuevoValor = valorActualCinco - cantidad;
          const totalBilLetes = cantidad * valor;

          if (UnidadesRetiro[0].Cinco === 0) {
            EfectivoCajero[0].Cinco = nuevoValor;
            UnidadesRetiro[0].Cinco = 0 + cantidad;
          }
        } else if (valorActualCinco > 0 && valorInicial >=denominacion) {
          const nuevoValor = 0;
          const totalBilLetes = valorActualCinco * denominacion;

          if (UnidadesRetiro[0].Cinco === 0) {
            EfectivoCajero[0].Cinco = nuevoValor;
            UnidadesRetiro[0].Cinco = valorActualCinco;
          }
        }

      default:
        break;
    }
  }

  for( let u of UnidadesRetiro){

    let cinco= u.Cinco;
    let diez= u.Diez;
    let veinte= u.Veinte;
    let cincuenta= u.Cincuenta;
    let cien= u.Cien;

    console.log(`Se entraga cantidad de Billetes de 100 COP : ${cien} por valor de : ${cien*100000} `  )

    console.log(`Se entraga cantidad de Billetes de 50 COP : ${cincuenta}   por valor de $:  ${cincuenta*50000}` )
    console.log(`Se entraga cantidad de Billetes de 20 COP : ${veinte} por valor de $: ${veinte*20000}` )
    console.log (`Se entraga cantidad de Billetes de 10 COP : ${diez} por valor de $: ${diez*10000}` )
    console.log (`Se entraga cantidad de Billetes de 5 COP : ${cinco} por valor de $: ${cinco*5000}` )
  }


 let totalRetiro=saldoRetiros();
  console.log("Valor Retirado y entregado : " + totalRetiro )
};

const saldoRetiros = () => {
  let valorActual = 0;
  let total = 0;

  for (let v of UnidadesRetiro) {
    valorActual =
      valorActual +
      v.Cinco * 5000 +
      v.Diez * 10000 +
      v.Veinte * 20000 +
      v.Cincuenta * 50000 +
      v.Cien * 100000;
    total += valorActual;
  }

  return total;
};


const conversionDinero = () => {
  totalCinco = 0;
  totalDiez = 0;
  totalVeinte = 0;
  totalCincuenta = 0;
  totalCien = 0;
  TotalCajero = 0;
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

const cajeroAutomatico = () => {
  const mejsajeBienvenida = alert("Bienvenido al Cajero Automatico Gana Gana");
  login();
};


cajeroAutomatico()
