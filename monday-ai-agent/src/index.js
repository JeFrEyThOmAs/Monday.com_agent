import express from "express";

import {
    getTasks,
    getTasksByPriority,
    getTasksByStatus,
    getTaskById,
    getTasksByOwner
} from "./services/mondayService.js";

const app = express();

app.get("/", async (req, res) => {

    const highPriority = await getTasksByPriority("High");

    res.json(highPriority);

});

app.listen(3000, () => {
    console.log("Server running");
});