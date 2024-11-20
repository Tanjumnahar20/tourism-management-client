/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useUrl = () => {

    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(()=>{
        fetch('https://tourism-maanagement-server.vercel.app/places')
        .then(res=>res.json())
        .then(data=>{
            // console.log('data in hooks', data);
            setPlaces(data);
            setLoading(false)
        })
    })

    return {places, loading};
};

export default useUrl;