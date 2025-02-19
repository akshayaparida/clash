import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import { sendMail } from "./config/mail.js"; 


const app: Application = express();
const port = process.env.PORT ?? 8000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", async (req: Request, res: Response) => {
  const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
    name: "Akshaya Parida",
    message: "We are thrilled to have you with us. Enjoy the clash!"
  });
  await sendMail("akparida28@gmail.com", "Welcome to Clash", html);
  return res.json({ msg: "Email sent" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));