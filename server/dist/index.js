var _a;
import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.get("/", (req, res) => {
    return res.render("welcome");
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
//# sourceMappingURL=index.js.map