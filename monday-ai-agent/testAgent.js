import dotenv from "dotenv";
dotenv.config();

import { agent } from "./src/agents/agent.js";

async function main() {
    try {
        const response = await agent.invoke({
            messages: [
                {
                    role: "user",
                    content: "Show me all tasks."
                }
            ]
        });

        console.log("\n================ RESPONSE ================\n");
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

main();