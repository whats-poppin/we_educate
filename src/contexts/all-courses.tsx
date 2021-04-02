import React, { useState } from "react";
import { Product } from "../models/product";

export const AllCoursesContext = React.createContext<{
    allCourses: Product[],
    setAllCourses: React.Dispatch<React.SetStateAction<Product[]>>
}>(null);

export const AllCoursesProvider: React.FC = ({ children }) => {
    const [ allCourses, setAllCourses ] = useState<Product[]>([]);

    return <AllCoursesContext.Provider value={ { allCourses, setAllCourses } }>
        { children }
    </AllCoursesContext.Provider>
};