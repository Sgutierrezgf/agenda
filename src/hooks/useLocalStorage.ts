import React, { useState } from "react";

type Props ={}

const useLocalStorage = (key: string, defaultValue: unknown)=>{
    const [storage, setStorage] = useState(()=>{
        if(typeof window === 'undefined') return defaultValue

        try {
            const value = window.localStorage.getItem(key)

            if(value){
                return JSON.parse(value)
            }

            return defaultValue
        } catch (error) {
            return defaultValue
            
        }
    })

    const setStorageValue = (value: unknown) =>{
        try {
            const valueToStore = value instanceof Function ? value(storage) : value
            setStorage(valueToStore)
            if(typeof window !== 'undefined'){
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            }
        } catch (error) {
            
        }
    }
    return [storage, setStorageValue]
}

export default useLocalStorage