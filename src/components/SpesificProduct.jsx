import { useParams } from "react-router-dom"
import { useProductContext } from "../contexts/ProductContext";

export function SpesificProduct() {
    const {id} = useParams();
    const {product} = useProductContext()
    const matchingProduct = product.find((products) => products.id === parseInt(id));
    return (
        <>  
            <h2>This product id : {id}</h2>
            <div className="card h-100" style={{ maxWidth: "18rem" }}>
            <div className="img-container text-center py-2">
                <img src={matchingProduct.image} className="img-fluid" style={{ maxHeight: "150px", width: "auto" }} alt={matchingProduct.title} />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{matchingProduct.title}</h5>
                <p className="card-text text-truncate">{matchingProduct.description}</p>
                <p className="card-text">{matchingProduct.category}</p>
            </div>
        </div>
        </>
    )
}