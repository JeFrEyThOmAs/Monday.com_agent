// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const API_URL = "https://api.monday.com/v2";

// const headers = {
//     Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjY4NDg1MDIzNCwiYWFpIjoxMSwidWlkIjoxMTA0NzAzODUsImlhZCI6IjIwMjYtMDctMjFUMDg6MDk6NDYuMDAwWiIsInBlciI6Im1lOndyaXRlIiwiYWN0aWQiOjM2MTMxMjQ0LCJyZ24iOiJhcHNlMiJ9.YT8w8wVrxqhvJEAKifOYObX6DtdPVlz4cZBeyo5KM7s",
//     "Content-Type": "application/json",
// };

// // Fetch all tasks from the board
// export async function getTasks() {
//     const query = `
//     {
//       boards(ids: 5030092594) {
//         id
//         name

//         items_page {
//           items {
//             id
//             name

//             column_values {
//               id
//               text
//             }
//           }
//         }
//       }
//     }
//     `;

//     try {
//         const response = await axios.post(
//             API_URL,
//             { query },
//             { headers }
//         );

//         const items = response.data.data.boards[0].items_page.items;

//         // Convert the GraphQL response into clean JS objects
//         const tasks = items.map((item) => {
//             const task = {
//                 id: item.id,
//                 name: item.name,
//             };

//             item.column_values.forEach((column) => {
//                 task[column.id] = column.text;
//             });

//             return task;
//         });

//         return tasks;
//     } catch (error) {
//         console.error(
//             error.response?.data || error.message
//         );
//         throw error;
//     }
// }

import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_URL = "https://api.monday.com/v2";

const headers = {
    Authorization: process.env.MONDAY_API_KEY,
    "Content-Type": "application/json",
};

// ---------------------------
// Fetch all tasks
// ---------------------------
export async function getTasks() {
    const query = `
    {
      boards(ids: 5030092594) {
        id
        name

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
            { headers }
        );

        const items = response.data.data.boards[0].items_page.items;

        return items.map((item) => {
            const task = {
                id: item.id,
                name: item.name,
            };

            item.column_values.forEach((column) => {
                task[column.id] = column.text;
            });

            return task;
        });

    } catch (error) {
        console.error(error.response?.data || error.message);
        throw error;
    }
}

// ---------------------------
// Get one task
// ---------------------------
export async function getTaskById(id) {
    const tasks = await getTasks();

    return tasks.find(task => task.id === id);
}

// ---------------------------
// Get tasks by status
// ---------------------------
export async function getTasksByStatus(status) {
    const tasks = await getTasks();

    return tasks.filter(
        task =>
            task.project_status.toLowerCase() === status.toLowerCase()
    );
}

// ---------------------------
// Get tasks by priority
// ---------------------------
export async function getTasksByPriority(priority) {
    const tasks = await getTasks();

    return tasks.filter(
        task =>
            task.priority.toLowerCase() === priority.toLowerCase()
    );
}

// ---------------------------
// Get tasks by owner
// ---------------------------
export async function getTasksByOwner(owner) {
    const tasks = await getTasks();

    return tasks.filter(
        task =>
            task.project_owner.toLowerCase() === owner.toLowerCase()
    );
}