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
        <AnimeList api={topAnime}/>
        <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}
export default Page