import VideoPlayer from "@/app/Utilities/VideoPlayer"
import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const Page = async({params: {id}}) => {
    const anime =await getAnimeResponse(`anime/${id}`)
    return(
        <>
        <div>
        <h3 className="text-white px-4 py-4 text-2xl">{anime.data.title} - {anime.data.year}</h3>
        </div>
        <div className="flex gap-4 overflow-x-auto ">
            <div className="mx-1.5 px-4 text-center rounded border border-white text-white"><h3 className="text-xl text-white">Type</h3><p>{anime.data.type}</p></div>
            <div className="mx-1.5 px-2 text-center rounded border border-white text-white"><h3 className="text-xl text-white">duration</h3><p>{anime.data.duration}</p></div>
            <div className="mx-1.5 px-2 text-center rounded border border-white text-white"><h3 className="text-xl text-white">Episode</h3><p>{anime.data.episodes}</p></div>
            <div className="mx-1.5 px-2 text-center rounded border border-white text-white"><h3 className="text-xl text-white">peringkat</h3><p>{anime.data.rank}</p></div>
            <div className="mx-1.5 px-2 text-center rounded border border-white text-white"><h3 className="text-xl text-white">score</h3><p>{anime.data.score}</p></div>
            <div className="mx-1.5 px-2 text-center rounded border border-white text-white"><h3 className="text-xl text-white">favorite</h3><p>{anime.data.favorites}</p></div>
        </div>
        <div className="flex flex-nowrap max-sm:flex-col text-white p-4">
            <Image src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-full object-cover"/>
            <p className="px-3 max-sm:pt-3">{anime.data.synopsis}</p>
        </div>
        <div><VideoPlayer youtubeid={anime.data.trailer.youtube_id}/></div>
        </>
    )
}
export default Page