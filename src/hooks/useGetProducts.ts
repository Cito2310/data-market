import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../types/product";

export const useGetProducts = () => {
    const urlDataProduct = "http://localhost:8080/api/product";

    const [products, setProducts] = useState([] as Product[]);

    useEffect(() => {
        const getProducts = async() => {
            const resp = await axios.get(urlDataProduct);
            setProducts( resp.data );
        }
        getProducts();
    }, [])

    return {
        products
    }
}