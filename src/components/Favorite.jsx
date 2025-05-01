import { useFavContext } from "../contexts/FavoriteContext"
import { ProductCard } from "./ProductCard"

export function Favorite() {
    const { favorites } = useFavContext()
    if (favorites) {
        return (
            <div className="container mt-4">
                <h2>Your Favorite Items</h2>
                <div className="row">
                    {favorites.map((data) => (
                        <div className="col-md-4 mb-4" key={data.id}>
                            <ProductCard data={data} />
                        </div>
                    ))}
                </div>
            </div>
            )
    }
    return (
        <>
            <h1>You dont have favorite items in list</h1>
        </>
    )
}