import {
    getAllDeals,
    getDealsByStatus,
    getDealsByOwner,
    getDealsBySector,
    getDealsByStage,
    getDealsByProbability,
    getDealByName,
} from "./src/services/dealFunnelService.js";

console.log(await getAllDeals());

// Uncomment these one at a time to test:

// console.log(await getDealsByStatus("Open"));

// console.log(await getDealsByOwner("OWNER_004"));

// console.log(await getDealsBySector("DSP"));

// console.log(await getDealsByStage("C. Demo Done"));

// console.log(await getDealsByProbability("High"));

// console.log(await getDealByName("Sakura"));