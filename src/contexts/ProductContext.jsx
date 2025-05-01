import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext()

export function ProductProvider({children}) {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProduct(data)
            } catch (err) {
                console.log("Error while fetching : " + err)
            }
        }
        fetchApi()
    }, [])
    return (
        <ProductContext.Provider value={{ product }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext)
