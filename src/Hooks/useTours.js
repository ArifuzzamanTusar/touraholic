import { useEffect, useState } from "react"

const useTour = () =>{
    const [tour, setTour] = useState([]);
    useEffect( () => {
            fetch('data/tour.json')
            .then(res => res.json())
            .then(data => setTour(data))
    }, []);

    return[tour,setTour];
}
export default useTour;