import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_URL = "https://api.monday.com/v2";
const DEAL_FUNNEL_BOARD_ID = "5030097370";

// -------------------------------------------------
// Fetch all deals
// -------------------------------------------------
export async function getAllDeals() {
    const query = `
        query {
            boards(ids: ${DEAL_FUNNEL_BOARD_ID}) {
                items_page {
                    items {
                        id
                        name
                        column_values {
                            id
                            text
                        }
                    }
                }
            }
        }
    `;

    try {
        const response = await axios.post(
            API_URL,
            { query },
            {
                headers: {
                    Authorization: process.env.MONDAY_API_TOKEN,
                    "Content-Type": "application/json",
                },
            }
        );

        const items = response.data.data.boards[0].items_page.items;

        const deals = items.map((item) => {
            const columns = {};

            item.column_values.forEach((col) => {
                columns[col.id] = col.text ?? "";
            });

            return {
                id: item.id,
                deal_name: item.name,
                owner_code: columns["text_mm5fj3k9"],
                client_code: columns["text_mm5fk4c8"],
                deal_status: columns["text_mm5f9bnn"],
                close_date: columns["text_mm5fpqt6"],
                closure_probability: columns["text_mm5fc916"],
                masked_deal_value: columns["text_mm5fbrcv"],
                tentative_close_date: columns["text_mm5fg805"],
                deal_stage: columns["text_mm5fy0h5"],
                product_deal: columns["text_mm5ftjq2"],
                sector: columns["text_mm5faebn"],
                created_date: columns["text_mm5fev1"],
            };
        });

        return deals;
    } catch (error) {
        console.error(
            "Error fetching deals:",
            error.response?.data || error.message
        );
        throw error;
    }
}

// -------------------------------------------------
// Get Deal By Name
// -------------------------------------------------
export async function getDealByName(name) {
    const deals = await getAllDeals();

    return deals.find(
        (deal) =>
            deal.deal_name.toLowerCase() === name.toLowerCase()
    );
}

// -------------------------------------------------
// Get Deals By Status
// -------------------------------------------------
export async function getDealsByStatus(status) {
    const deals = await getAllDeals();

    return deals.filter(
        (deal) =>
            deal.deal_status.toLowerCase() === status.toLowerCase()
    );
}

// -------------------------------------------------
// Get Deals By Owner
// -------------------------------------------------
export async function getDealsByOwner(owner) {
    const deals = await getAllDeals();

    return deals.filter(
        (deal) =>
            deal.owner_code.toLowerCase() === owner.toLowerCase()
    );
}

// -------------------------------------------------
// Get Deals By Sector
// -------------------------------------------------
export async function getDealsBySector(sector) {
    const deals = await getAllDeals();

    return deals.filter(
        (deal) =>
            deal.sector.toLowerCase() === sector.toLowerCase()
    );
}

// -------------------------------------------------
// Get Deals By Stage
// -------------------------------------------------
export async function getDealsByStage(stage) {
    const deals = await getAllDeals();

    return deals.filter(
        (deal) =>
            deal.deal_stage.toLowerCase() === stage.toLowerCase()
    );
}

// -------------------------------------------------
// Get Deals By Probability
// -------------------------------------------------
export async function getDealsByProbability(probability) {
    const deals = await getAllDeals();

    return deals.filter(
        (deal) =>
            deal.closure_probability.toLowerCase() ===
            probability.toLowerCase()
    );
}