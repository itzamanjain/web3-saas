import express from 'express';
import userRouter from './routers/user.route';
import workerRouter from './routers/worker.route';

const app = express();

// postgres + prism psql psql 'postgresql://postgres:yMdjIzeVNd0FfK7j@org-synctechs-inst-testwithnode.data-1.use1.tembo.io:5432/postgres
// signin with wallet 
app.use("/v1/user",userRouter)
app.use("/v1/worker",workerRouter)


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

