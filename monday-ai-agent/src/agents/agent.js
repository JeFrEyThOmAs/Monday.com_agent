// import dotenv from "dotenv";
// dotenv.config();

// import { ChatGoogleGenerativeAI }
// from "@langchain/google-genai";

// import {
//     createToolCallingAgent,
//     AgentExecutor
// }
// from "langchain/agents";

// import {
//     ChatPromptTemplate
// }
// from "@langchain/core/prompts";

// import { tools }
// from "../tools/mondayTools.js";


// // ----------------------------------
// // GEMINI
// // ----------------------------------

// const llm =
// new ChatGoogleGenerativeAI({

//     model: "gemini-2.5-flash",

//     apiKey:
//         process.env.GEMINI_API_KEY,

//     temperature: 0

// });


// // ----------------------------------
// // PROMPT
// // ----------------------------------

// const prompt =
// ChatPromptTemplate.fromMessages([

//     [
//         "system",
//         `
// You are an AI Project Management Assistant.

// You help users manage tasks stored in Monday.com.

// You have access to tools that can:

// - Get all tasks
// - Get tasks by status
// - Get tasks by priority
// - Get tasks by owner
// - Get a task by its id

// Always use the available tools whenever task information is required.

// Do not make up task information.

// Answer naturally and clearly.
//         `
//     ],

//     [
//         "human",
//         "{input}"
//     ],

//     [
//         "placeholder",
//         "{agent_scratchpad}"
//     ]

// ]);


// // ----------------------------------
// // CREATE AGENT
// // ----------------------------------

// const agent =
// await createToolCallingAgent({

//     llm,

//     tools,

//     prompt

// });


// // ----------------------------------
// // EXECUTOR
// // ----------------------------------

// export const executor =
// new AgentExecutor({

//     agent,

//     tools,

//     verbose: true

// });



import dotenv from "dotenv";
dotenv.config();

import { createAgent } from "langchain";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

import { tools } from "../tools/mondayTools.js";
import { dealTools } from "../tools/dealFunnelTools.js";

// ----------------------------
// Gemini Model
// ----------------------------

const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
    model: "gemini-2.5-flash",
    temperature: 0,
    maxRetries: 2,
});

const allTools = [
    ...tools,
    ...dealTools,
];

// ----------------------------
// Agent
// ----------------------------

export const agent = createAgent({
    model,
    tools: allTools,
    systemPrompt: `
You are an AI Project Management Assistant.

You have access to multiple Monday.com boards.

You can answer questions about:

- Tasks
- Deal Funnel

Whenever the user asks about:
- tasks
- projects
- deals
- owners
- task status
- deal status
- priorities
- sectors
- deal stages
- closure probability

ALWAYS use the appropriate tool.

Never make up information.

If the required information is unavailable, clearly tell the user.

When you receive tool results:
- Summarize naturally.
- Don't dump raw JSON unless the user explicitly asks.
- Answer like a helpful project manager.
`
});