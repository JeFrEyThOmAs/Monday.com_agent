import { z } from "zod";
import { tool } from "@langchain/core/tools";

import {
    getTasks,
    getTaskById,
    getTasksByPriority,
    getTasksByStatus,
    getTasksByOwner
} from "../services/mondayService.js";


// ----------------------------------
// TOOL 1
// GET ALL TASKS
// ----------------------------------

export const getAllTasksTool = tool(

    async () => {

        const tasks = await getTasks();

        return JSON.stringify(tasks);

    },

    {

        name: "get_all_tasks",

        description:
            "Returns all tasks from the Monday board.",

        schema: z.object({})

    }

);


// ----------------------------------
// TOOL 2
// GET TASKS BY STATUS
// ----------------------------------

export const getTasksByStatusTool = tool(

    async ({ status }) => {

        const tasks =
            await getTasksByStatus(status);

        return JSON.stringify(tasks);

    },

    {

        name: "get_tasks_by_status",

        description:
            "Returns all tasks having the given status. Example statuses: Done, Working on it, Stuck.",

        schema: z.object({

            status: z.string()

        })

    }

);


// ----------------------------------
// TOOL 3
// GET TASKS BY PRIORITY
// ----------------------------------

export const getTasksByPriorityTool = tool(

    async ({ priority }) => {

        const tasks =
            await getTasksByPriority(priority);

        return JSON.stringify(tasks);

    },

    {

        name: "get_tasks_by_priority",

        description:
            "Returns tasks having the given priority. Example priorities: High, Medium, Low.",

        schema: z.object({

            priority: z.string()

        })

    }

);


// ----------------------------------
// TOOL 4
// GET TASKS BY OWNER
// ----------------------------------

export const getTasksByOwnerTool = tool(

    async ({ owner }) => {

        const tasks =
            await getTasksByOwner(owner);

        return JSON.stringify(tasks);

    },

    {

        name: "get_tasks_by_owner",

        description:
            "Returns all tasks assigned to a particular owner.",

        schema: z.object({

            owner: z.string()

        })

    }

);


// ----------------------------------
// TOOL 5
// GET TASK BY ID
// ----------------------------------

export const getTaskByIdTool = tool(

    async ({ id }) => {

        const task =
            await getTaskById(id);

        return JSON.stringify(task);

    },

    {

        name: "get_task_by_id",

        description:
            "Returns a single task using its id.",

        schema: z.object({

            id: z.string()

        })

    }

);



// ----------------------------------
// EXPORT ALL TOOLS
// ----------------------------------

export const tools = [

    getAllTasksTool,

    getTasksByStatusTool,

    getTasksByPriorityTool,

    getTasksByOwnerTool,

    getTaskByIdTool

];