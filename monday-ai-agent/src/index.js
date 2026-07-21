import express from "express";
import dotenv from "dotenv";
import chatRouter from "./routes/chat.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


// Routes
app.use("/chat", chatRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});