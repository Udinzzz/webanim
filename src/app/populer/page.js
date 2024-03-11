"use client"
import { useEffect, useState } from "react"
import HeaderMenu from "../Utilities/HeaderMenu"
import Pagination from "../Utilities/Pagination"
import AnimeList from "../Components/AnimeList"
import { getAnimeResponse } from "@/libs/api-libs"


const Page = () =>{
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async()=> {
        const populerAnime = await getAnimeResponse("top/anime", `page=${page}`) 
        setTopAnime(populerAnime)
    }

    useEffect(() =>{
        fetchData()
    }, [page])

    return(
        <>
        <HeaderMenu title={`ANIME TER-POPULER #${page}`}/>
        <div className="grid grid-cols-5 gap-3 max-sm:grid-cols-2">
        <AnimeList api={topAnime}/>
        </div>
        <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}
export default Page