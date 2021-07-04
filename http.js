const  http =require('http')

const server= http.createServer((req,res)=>{
    if(req.url ==='/'){
     res.end("welcome to home page")
    }
   if(req.url === '/about'){
       res.end("welcome to about page")
   }
   res.end(`<h1>Oops </h1>
            <p>We cant seen to find page you are looking for </p>
            <a href="/">back Home</a>
   `)
    // console.log(req)
    // res.write('welcome to homepage')
    // res.end();
})

server.listen(5000)