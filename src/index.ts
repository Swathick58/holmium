import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()


app.get('/ping', (c) => {
  return c.json({ pong: 'Hello, World' })
});
app.get("/platform",(c)=>{
  return c.json({platform:"Heelo World"});

});
app.get("/generate",(c)=>{
  const randomnumber=Math.floor(Math.random()*100)
  return c.text(`random rumber:${randomnumber}`)
})


export default app

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
