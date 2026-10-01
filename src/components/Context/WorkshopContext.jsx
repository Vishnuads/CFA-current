import BASE_URL from '@/api'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const workshopContext = createContext();

export function WorkshopProvider({ children }) {
    const [data, setData] = useState([]);
    const [eventData, setEventData] = useState([]);

    const getWorkshops = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/workshops/get`);
            setData(res.data.data);
        }
        catch (err) {
            console.error("Error fetching workshops:", err);
        }
    }

    const getEvents = async ()=>{
        try{
            const res = await axios.get(`${BASE_URL}/api/events/get`);
            setEventData(res.data.data);
        }
        catch (err) {
            console.error("Error fetching events:", err);
        }
    }

    useEffect(() => {
        getWorkshops();
        getEvents();
    }, []);

    return (
        <workshopContext.Provider value={{
            data,eventData
        }}>
            {children}
        </workshopContext.Provider>
    )
}
