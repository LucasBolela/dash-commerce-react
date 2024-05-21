import api from "../axiosConfig";

export async function getListCategories() {
    return await api.get(`/categories/`)
}