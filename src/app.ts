import "module-alias/register";
import "express-async-errors"
import express, { Request, Response } from "express"
import {errorHandler, notFound} from "@/middleware/index";


const app = express()


app.get("/", (req, res) => {
    res.send("<h1>Hello, World!!</h1>")
})

// 404 middleware
app.use(notFound)
// errorHandler middleware
app.use(errorHandler)

app.listen(3000)