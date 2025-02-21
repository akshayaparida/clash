var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
import 'module-alias/register.js';
import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import { emailQueue, emailQueueName } from "./config/queue.js";
import Routes from "./routes/index.js";
const app = express();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//view engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
// Routes
app.use(Routes);
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const html = yield ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
        name: "Akshaya Parida",
        message: "We are thrilled to have you with us. Enjoy the clash!"
    });
    yield emailQueue.add(emailQueueName, { to: "akparida28@gmail.com", subject: "Welcome to Clash", html: html });
    return res.json({ msg: "Email sent" });
}));
import "./jobs/EmailJob.js";
app.listen(port, () => console.log(`Server is running on port ${port}`));
//# sourceMappingURL=index.js.map