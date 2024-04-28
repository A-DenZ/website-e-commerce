"use client"

import { createContext, useContext, useState } from "react";


interface IcontextType{
    categoryFilters: string[],
    setCategoryFilters: React.Dispatch<React.SetStateAction<string[]>>,
    sort: string,
    setSort: React.Dispatch<React.SetStateAction<string>>
}

export const INITAL_FILTER_DATA = {
    categoryFilters: [],
    setCategoryFilters: () => {},
    sort:'',
    setSort:()=>'',
}

const FilterContext = createContext<IcontextType>(INITAL_FILTER_DATA);


export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [categoryFilters, setCategoryFilters] = useState([]) 
    const [sort, setSort] = useState('-createdAt')
    return (
        <FilterContext.Provider value={{
            categoryFilters,
            setCategoryFilters,
            sort,
            setSort
        }}>
            {children}
        </FilterContext.Provider>
    )
}


export const useFilter = () => useContext(FilterContext)