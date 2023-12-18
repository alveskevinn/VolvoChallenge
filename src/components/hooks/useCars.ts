import axios from "axios";
import { useEffect, useState } from "react";
import { Car } from "../types/car.interface";

export default function useCars() {
    const [cars, SetCars] = useState<Car[]>([]);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_URL+"/api/cars").then(res => {
            SetCars(res.data);
        });
    }, []); 

    return {
        cars
    };
}

