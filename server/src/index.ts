import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path"
import { fileURLToPath } from "url";

const app: Application = express();
const port = process.env.PORT ?? 8000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./views"))

app.get("/", (req: Request, res: Response) => {
  return res.render("welcome");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
