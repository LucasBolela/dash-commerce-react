import api from "../axiosConfig";

export async function getListProducts() {
    return await api.get(`/products/`)
}