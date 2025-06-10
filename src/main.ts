import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { pagina } from './Ejercicio-01/Pagina.ts'
import { Calculadora } from './Ejercicio-02/Calculadora.ts'
import { Cancion } from './Ejercicio-03/Cancion.ts'
import { Empleado } from './Ejercicio-05/Empleado.ts'
import { Cuenta } from './Ejercicio-04/Cuenta.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// ejercicio #1 -------------------------------------------------------------------------------
const myPage = new pagina('Index', 'Negro', 'centro')

console.log('Ejercicio #1: propiedades de la página --------------')

// extraemos nombre, color y posicion 
console.log(myPage.getProperties());

// indicamos la posicion del titulo
console.log(myPage.titlePosition('centro'))

// extraemos todas las propiedades del DOM 
console.log(myPage.getAllProperties())

// ejericio #2 --------------------------------------------------------------------------------
console.log('\nEjercicio #2: Calculadora -------------------------')
const operaciones = new Calculadora(9, 7)

console.log(`\nLa suma de ${operaciones.getNumero1()} + ${operaciones.getNumero2()} es: ${operaciones.suma()}`);

console.log(`\nLa resta de ${operaciones.getNumero1()} - ${operaciones.getNumero2()} es: ${operaciones.resta()}`);

console.log(`\nLa multiplicacion de ${operaciones.getNumero1()} * ${operaciones.getNumero2()} es: ${operaciones.multiplicar()}`);

console.log(`\nLa división entre ${operaciones.getNumero1()} / ${operaciones.getNumero2()} es: ${operaciones.dividir()}`);

// Ejercicio #3 -------------------------------------------------------------------------------
console.log("\nEjercicio #3: La Canción ---------------------------");

const cancion = new Cancion('Bohemian Rhapsody', 'Rock', 'Freddie Mercury');

console.log(`\nEl creador de la cancion '${cancion.titulo}' es:  ${cancion.getNombreAutor()}`);

console.log(cancion.getDatosCancion());

// Ejercicio #4 -------------------------------------------------------------------------------
console.log('Ejercicio #4: Cuenta- ----------------------------------');
const cuentaBanco = new Cuenta('Sam', 'Ahorro', 12345)
console.log(cuentaBanco.getDataUser());
console.log(`deposito para la cuenta ${cuentaBanco.getNumeroCuenta()}: ${cuentaBanco.depositar(40)}`)
console.log(`datos actualaizados de la cuenta: ${cuentaBanco.getDataUser()}`)
console.log(`retiro para la cuenta ${cuentaBanco.getNumeroCuenta()}: ${cuentaBanco.retirar(10)}`)
console.log(`datos actualaizados de la cuenta: ${cuentaBanco.getDataUser()}`)



// Ejercicio #5 -------------------------------------------------------------------------------
console.log('\nEjercicio #5: Persona ---------------------------------')
const empleado = new Empleado('José', 'Castillo', 'Santa Ana, Santa Ana centro', 12345678, 25, 450)

console.log(`\n Los datos del empleado son: ${empleado.getAllData()}`);
console.log(`\n la persona ${empleado.edadMayorMenor()}`);
console.log(`\n el sueldo de ${empleado.nombre} es: ${empleado.imprimirSueldo()}`);
console.log(`\n el nuevo sueldo de ${empleado.nombre} será de: ${empleado.cargarSueldo(600)}`);
console.log(`\n Los datos actualizados del empleado son: ${empleado.getAllData()}`);

