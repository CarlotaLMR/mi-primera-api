// los datos de prueba
import type { Quote } from './quote.js'

export const quotes: Quote[] = [
  { text: 'Primero haz que funcione, luego hazlo bien y después hazlo rápido.', author: 'Kent Beck' },
  { text: 'La simplicidad es un requisito previo de la fiabilidad.', author: 'Edsger W. Dijkstra' },
  { text: 'Los programas se escriben para que los lean personas.', author: 'Harold Abelson' },
]
// Quote[] significa «un array de Quote». Si te equivocas en una propiedad, por ejemplo escribiendo autor en lugar de author, el editor la marca en rojo.


// DUDA: ¿le puedo meter una frase del día distinta desde alguna API?
// O desde una BD mía para que me los traiga execute?? (¿desde api/src/quotes/get-quote-of-the-day.ts - el caso de uso?)
// Mola el rollo motivacional.