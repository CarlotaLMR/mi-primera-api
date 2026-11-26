// el caso de uso
import type { Quote } from './quote.js'

export class GetQuoteOfTheDay { // 1
  constructor(private readonly quotes: Quote[]) {} // 2

  async execute(): Promise<Quote> {// 3
    const dayOfMonth = new Date().getDate()
    const index = dayOfMonth % this.quotes.length // 4
    return this.quotes[index]
  }
}

// ESTA ES LA PARTE QUE MÁS ME CUESTA ENTERNDER, POR LA SINTAXIS (?).
// EL ROLLO DEL HANDLER: va en
// index.ts y es el que habla HTTP y todo lo demás le importa absolutamente NADA



// ¿Por qué importo cosas desde .js cuand lo que tenemos son .ts?
// SOLUCIÓN en los apuntes: Dos errores que vas a ver en el editor
// Los imports de tus propios archivos llevan la extensión .js, aunque el archivo sea .ts.
// Es raro, pero es lo que pide Node: importas el archivo como se llamará una vez compilado.
// Los imports de librerías, como 'hono', no la llevan.



// tsx no comprueba los tipos

// pnpm dev puede arrancar aunque tengas errores de TypeScript, porque tsx solo ejecuta.
// Para comprobarlos, añade este script en la sección "scripts" de package.json:

// "typecheck": "tsc --noEmit"

//Y ejecútalo con pnpm typecheck. Si no escribe nada, no hay errores. Acostúmbrate a lanzarlo
// antes de cada commit.


// 1- Una clase por caso de uso. El nombre es un verbo más lo que hace,
// y el archivo se llama igual en minúsculas y con guiones.

// 2- Recibe sus datos en el constructor. private readonly quotes es un atajo de TypeScript: 
// declara una propiedad this.quotes que no se puede reasignar y le asigna lo que recibe. Equivale 
// a escribir private readonly quotes: Quote[] arriba y this.quotes = quotes dentro del constructor. 
// El caso de uso no sabe de dónde vienen las frases: se las dan.

// 3- Un único método, execute. Es async y devuelve una Promise aunque ahora no espere nada. 
// Cuando los datos vengan de una base de datos, leerlos será asíncrono y así no tendrás que 
// cambiar quién lo llama.

// 4- La regla de negocio vive aquí. «Cada día del mes toca una frase» es una regla, y por eso está 
// en el caso de uso y no en el handler. El % (módulo) da el resto de la división, así que el índice 
// nunca se sale del array.