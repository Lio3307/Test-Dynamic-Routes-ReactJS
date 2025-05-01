import { Link } from "react-router-dom"
import { useFavContext } from "../contexts/FavoriteContext"

export function ProductCard({ data }) {
    const { isFavs, addFavs, removeFavs } = useFavContext()
    const favorites = isFavs(data.id)
    function handleFavs(e) {
        e.preventDefault()
        if (favorites) {
            removeFavs(data.id)
        } else {
            addFavs(data)
        }

    }
    return (
        <div className="card h-100" style={{ maxWidth: "18rem" }}>
            <div className="img-container text-center py-2">
                <img src={data.image} className="img-fluid" style={{ maxHeight: "150px", width: "auto" }} alt={data.title} />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text text-truncate">{data.description}</p>
                <p className="card-text">{data.category}</p>
                <div className="mt-auto">
                    <button
                        className={`btn ${favorites ? "btn-danger" : "btn-primary"}`}
                        onClick={handleFavs}
                    >{favorites ? "Remove Favorite" : "Add Favorite"}</button>
                    <Link className="btn btn-primary" to={`/products/${data.id}`}>More Details</Link>
                </div>
            </div>
        </div>
    )
}