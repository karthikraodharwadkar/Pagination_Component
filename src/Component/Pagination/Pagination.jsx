import React, { useContext } from 'react'
import { userContext } from '../LandingPage/LandingPage'
import "./Pagination.scss"

export default function Pagination() {
    const {totalPages,currentPage,setCurrentPage} = useContext(userContext)

    const pageNumber = (totalPages) =>{
        let page=[]
        for(let currentPage=1;currentPage<=totalPages;currentPage++){
            page.push(currentPage)
        }
        return page
    }

    const displayPageNumbers = pageNumber(totalPages)
   

    const handlePageNumberChange = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    const handleFirstPage = () =>{
        setCurrentPage(1)
    }

    const handlePreviousPage =() =>{
        setCurrentPage(currentPage-1)
    }

    const handleNextPage =() =>{
        setCurrentPage(currentPage+1)
        
    }

    const handleLastPage =() =>{
        setCurrentPage(totalPages)
    }

  return (
    <div className='pagination-container'>
        <button onClick={handleFirstPage} disabled={currentPage===1}>{"<<"}</button>
        <button onClick={handlePreviousPage} disabled={currentPage===1}>{"<"}</button>
        {displayPageNumbers.map((item,index)=>{
            return(
                <button key={index} onClick={()=>handlePageNumberChange(item)} className={currentPage===item ? "active" : ""}>{item}</button>
            )
        })}
        <button onClick={handleNextPage} disabled={currentPage===totalPages}>{">"}</button>
        <button onClick={handleLastPage} disabled={currentPage===totalPages}>{">>"}</button>
    </div>
  )
}
