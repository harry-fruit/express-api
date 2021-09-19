import "module-alias/register";
import express from "express";
import { userRouter } from "@/src/modules/user/router";

export const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes Here
app.use("/users", userRouter);

app.listen(port, () => console.log(`Listen at http://localhost:${port}`));
