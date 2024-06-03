import { useContext, useEffect } from "react"
import { useState } from "react"
import { AuthContext } from './context'
import { getImages } from './api'


const Images = () => {
    const [images, setImages] = useState([])
    const { auth } = useContext(AuthContext)

    useEffect(
        () => {
            if (auth.accessToken) {
                getImages({ auth })
                    .then(response => {
                        console.log('Get Images Success')
                        setImages(response.data)
                    })
                    .catch(error => console.log('Get Images Failure: ', error))
            }
        },
        [auth.accessToken]
    )

    return (
        <div>
            NOW WE RIOT
        </div>
    )
}

export default Images