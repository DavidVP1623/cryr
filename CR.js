let cuentaRegresiva = document.getElementById('cuenta-regresiva');

let fecha = new Date();
const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const mesAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
    'Octubre', 'Noviembre', 'Diciembre'
];

/* ---------------------------------
       FECHA y HORA EN ALERTA
  ----------------------------------*/

const mostrarFechaHora = () => {
    let ahora = new Date();
    let h = ahora.getHours();
    let m = ahora.getMinutes();
    let s = ahora.getSeconds();

    m = concatenarDigito(m);
    s = concatenarDigito(s);

    let fechaHoy = `${diaSemana[ahora.getDay()]} ${ahora.getDate()} de ${mesAnyo[ahora.getMonth()]} de ${ahora.getFullYear()}`;
    let horaActual = `${h} horas, ${m} minutos y ${s} segundos.`

    alert(`Hoy es ${fechaHoy} y son las ${horaActual}`);

}
mostrarFechaHora();

function concatenarDigito(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

/* ---------------------------------
       CUENTA REGRESIVA EN HTML
  ----------------------------------*/
function mostrarCuentaRegresiva() {
    setInterval(function () {
        let hoy = new Date();
        let finDeAnho = new Date(2023, 0);
        let ctaRegrMil = finDeAnho.getTime() - hoy.getTime();
        let diasRestantes = Math.trunc(ctaRegrMil / (1000 * 60 * 60 * 24));
        let horasRestantes = Math.trunc((ctaRegrMil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutosRestantes = Math.trunc(((ctaRegrMil % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60));
        let segundosRestantes = Math.trunc((((ctaRegrMil % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60)) / 1000);

        minutosRestantes = concatenarDigito(minutosRestantes);
        segundosRestantes = concatenarDigito(segundosRestantes);

        cuentaRegresiva.innerHTML = `Quedan ${diasRestantes} días, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos.`;
    }, 1000);
}
mostrarCuentaRegresiva();

/* 
1 segundo = 1000 milisegundos;
1 minuto = 60*1000 milisegundos;
1 hora = 60*60*1000 milisegundos;
1 día = 24*60*60*1000 milisegundos;
*/