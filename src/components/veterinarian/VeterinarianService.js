import { api } from "../utils/api";


export async function getVeterinarians() {
    try {
        const result = await api.get("/veterinarians/get-all-veterinarians");
        return result.data;
    } catch (error) {
        // Gérer l'erreur de manière appropriée (par exemple, en loggant ou en affichant un message spécifique)
        console.error("Erreur lors de la récupération des vétérinaires", error);
        throw new Error("Impossible de récupérer les vétérinaires.");
    }
}







