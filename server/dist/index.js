var _a;
import express from "express";
import "dotenv/config";
const app = express();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
app.get("/", (req, res) => {
    return res.send("Hello World");
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
//# sourceMappingURL=index.js.map