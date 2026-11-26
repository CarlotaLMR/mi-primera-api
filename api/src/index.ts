import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { GetQuoteOfTheDay } from './quotes/get-quote-of-the-day.js' // NUEVO
import { quotes } from './quotes/quotes-data.js' // NUEVO

const app = new Hono()

const getQuoteOfTheDay = new GetQuoteOfTheDay(quotes) // NUEVO (5*)

// Hay un (1) HANDLER por cada ENDPOINT

// En el primer endpoint (/): empieza exactamente en (c) => { y termina en }

app.get('/', (c) => { // <-- Empieza aquí
  return c.text('Hello Hono!') // <-- Termina aquí
})

app.get('/quote-of-the-day', async (c) => { // NUEVO (6*)
  const quote = await getQuoteOfTheDay.execute()
  return c.json(quote)
})

app.get('/health', (c) => {
  return c.json({ "status": "ok" })
})


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})


// 5* Se crea una sola vez. El caso de uso se instancia fuera del handler, al arrancar, y se le 
// pasan los datos. El handler reutiliza esa misma instancia en cada petición.

// 6* El handler solo traduce. Es async porque espera (await) al caso de uso. No decide qué frase 
// toca: llama a execute() y responde con c.json(). Tres líneas y ningún if.