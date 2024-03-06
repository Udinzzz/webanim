

const Pagination = ({page, lastPage, setPage}) =>{
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    const handleNextPage =()=>{
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage =()=>{
        if (page > 1){setPage((prevState) => prevState - 1)
            scrollTop()}
        if (page == 1){alert("anda sudah mencapai halaman 1")}
        
    }

    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-white text-xl">
        { page <= 1 ? null : 
            <button onClick={handlePrevPage} className="transisison-all hover:text-indigo-500">Prev</button>
        }
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? null :
            <button onClick={handleNextPage} className="transisison-all hover:text-indigo-500">Next</button>
            }
        </div>
    )
}
export default Pagination