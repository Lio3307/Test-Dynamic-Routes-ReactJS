import { useContext, useEffect, useState, createContext } from "react"

const FavContext = createContext();

export const useFavContext = () => useContext(FavContext);
export function FavProvider({children}) {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storageLocal = localStorage.getItem('favorites');
        if(storageLocal) {
            setFavorites(JSON.parse(storageLocal))
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

     const addFavs = (items) => {
        setFavorites(currentValue => [...currentValue, items])
     }

     const removeFavs = (itemsId) => {
        setFavorites(currentValue => currentValue.filter(value => value.id !== itemsId))
     }

     const isFavs = (itemsId) => {
        return favorites.some(fav => fav.id === itemsId)
     }

     const value = {
        favorites,
        addFavs,
        removeFavs,
        isFavs
     }

    return (
        <FavContext.Provider value={value}>
            {children}
        </FavContext.Provider>
    )
}