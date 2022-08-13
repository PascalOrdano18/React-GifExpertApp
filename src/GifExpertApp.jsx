import { useState } from "react"
import { AddCategory, GifGrid } from "./components"



export const GifExpertApp = () => {
 
    const [categories, setCategories] = useState([ 'Coscu' ])
 

    const addCategory = ( newCategory) => {

        if( categories.includes(newCategory) ) return


        setCategories( [ newCategory, ...categories ] )

    }

    return (
    <>

        <h1>Gif Expert App</h1>


        <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory={ addCategory }
        />



            {
                categories.map( category => (
                    
                        <GifGrid
                            key={ category }
                            category={ category } />
                    ))
            
            }

    </>

)
}

