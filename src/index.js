const app = require('./app')
const connectdb = require("../src/db/db")

connectdb()


.then(() =>{
    app.listen(process.env.PORT, ()=>{
        console.log(`SERVER STARTED ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log(`Mongodb connection failed `, err);
})

