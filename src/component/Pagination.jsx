import React from 'react'

const Pagination = ({productPerPage , totalProduct , Paginate}) => {
  
    const pageNumber = [];

    for(let i=1 ; i<=Math.ceil(totalProduct/productPerPage);i++){
        pageNumber.push(i);
    }

    return (
    <nav>
        <ul className='pagination pagination-lg justify-content-center'>
            {
                pageNumber.map(number=>(
                    <li key={number} className="page-item ">
                        <a onClick={()=>Paginate(number)} href="!#" className="page-link">{number}</a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination