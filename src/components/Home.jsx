import { ProductCard } from "./ProductCard"
import { useProductContext } from "../contexts/ProductContext"

export function Home() {
    const {product} = useProductContext();

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {product.map((data) => (
                        <div className="col-md-4 mb-4" key={data.id}>
                            <ProductCard data={data} />
                        </div>  
                    ))}
                </div>
            </div>
        </>
    )
}