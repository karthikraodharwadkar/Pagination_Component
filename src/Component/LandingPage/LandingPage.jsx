import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import "./LandingPage.scss"

export const userContext = createContext();
export default function LandingPage() {
  const [data, setData] = useState([]);
  const [currentPage,setCurrentPage] = useState(1)

  const fetchData = async () => {
    let response = await axios.get("https://dummyjson.com/users");
    setData(response.data.users);
  };

  const itemsPerPage=10;
  const startIndex = (currentPage-1)* itemsPerPage;
  const endIndex = startIndex+ itemsPerPage;
  const totalPages = Math.ceil(data.length/itemsPerPage)

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="landingPage-container">
      <userContext.Provider value={{data,startIndex,endIndex,itemsPerPage,totalPages,currentPage,setCurrentPage}}>
        <Table />
        <Pagination/>
      </userContext.Provider>
    </div>
  );
}
