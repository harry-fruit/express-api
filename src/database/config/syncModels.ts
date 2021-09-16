import { database } from "./database";

export const syncModels = async (): Promise<void> => {
    await database.sync({ alter: true });
    console.log("All models were synchronized successfully.");
}