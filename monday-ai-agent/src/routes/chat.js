import express from "express";
import { agent } from "../agents/agent.js";

const router = express.Router();

// POST /chat
router.post("/", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                error: "Message is required",
            });
        }

        const response = await agent.invoke({
            messages: [
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        const finalMessage =
            response.messages[response.messages.length - 1];

        res.json({
            response: finalMessage.content,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: error.message,
        });
    }
});

export default router;