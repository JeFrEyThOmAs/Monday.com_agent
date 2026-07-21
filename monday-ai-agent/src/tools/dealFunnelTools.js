import { tool } from "@langchain/core/tools";
import { z } from "zod";

import {
    getAllDeals,
    getDealByName,
    getDealsByStatus,
    getDealsByOwner,
    getDealsBySector,
    getDealsByStage,
    getDealsByProbability,
} from "../services/dealFunnelService.js";

// ----------------------------------------------------
// Get All Deals
// ----------------------------------------------------

export const getAllDealsTool = tool(
    async () => {
        const deals = await getAllDeals();
        return JSON.stringify(deals);
    },
    {
        name: "get_all_deals",
        description: "Returns all deals from the Deal Funnel board.",
        schema: z.object({}),
    }
);

// ----------------------------------------------------
// Get Deal By Name
// ----------------------------------------------------

export const getDealByNameTool = tool(
    async ({ name }) => {
        const deal = await getDealByName(name);
        return JSON.stringify(deal);
    },
    {
        name: "get_deal_by_name",
        description: "Find a deal by its name.",
        schema: z.object({
            name: z.string(),
        }),
    }
);

// ----------------------------------------------------
// Get Deals By Status
// ----------------------------------------------------

export const getDealsByStatusTool = tool(
    async ({ status }) => {
        const deals = await getDealsByStatus(status);
        return JSON.stringify(deals);
    },
    {
        name: "get_deals_by_status",
        description: "Returns deals having a particular deal status.",
        schema: z.object({
            status: z.string(),
        }),
    }
);

// ----------------------------------------------------
// Get Deals By Owner
// ----------------------------------------------------

export const getDealsByOwnerTool = tool(
    async ({ owner }) => {
        const deals = await getDealsByOwner(owner);
        return JSON.stringify(deals);
    },
    {
        name: "get_deals_by_owner",
        description: "Returns deals owned by a specific owner.",
        schema: z.object({
            owner: z.string(),
        }),
    }
);

// ----------------------------------------------------
// Get Deals By Sector
// ----------------------------------------------------

export const getDealsBySectorTool = tool(
    async ({ sector }) => {
        const deals = await getDealsBySector(sector);
        return JSON.stringify(deals);
    },
    {
        name: "get_deals_by_sector",
        description: "Returns deals belonging to a sector.",
        schema: z.object({
            sector: z.string(),
        }),
    }
);

// ----------------------------------------------------
// Get Deals By Stage
// ----------------------------------------------------

export const getDealsByStageTool = tool(
    async ({ stage }) => {
        const deals = await getDealsByStage(stage);
        return JSON.stringify(deals);
    },
    {
        name: "get_deals_by_stage",
        description: "Returns deals in a particular deal stage.",
        schema: z.object({
            stage: z.string(),
        }),
    }
);

// ----------------------------------------------------
// Get Deals By Closure Probability
// ----------------------------------------------------

export const getDealsByProbabilityTool = tool(
    async ({ probability }) => {
        const deals = await getDealsByProbability(probability);
        return JSON.stringify(deals);
    },
    {
        name: "get_deals_by_probability",
        description: "Returns deals having a given closure probability.",
        schema: z.object({
            probability: z.string(),
        }),
    }
);

// ----------------------------------------------------
// EXPORT ALL DEAL TOOLS
// ----------------------------------------------------

export const dealTools = [
    getAllDealsTool,
    getDealByNameTool,
    getDealsByStatusTool,
    getDealsByOwnerTool,
    getDealsBySectorTool,
    getDealsByStageTool,
    getDealsByProbabilityTool,
];