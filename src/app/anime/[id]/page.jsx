import VideoPlayer from "../../Utilities/VideoPlayer"
import { getAnimeResponse } from "../../../libs/api-libs"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    return (
        <>
            <div className="relative h-full w-full">
                <Image src={anime.data.images.webp.image_url} layout="fill" objectFit="cover" quality={100} alt="backround" className="absolute z-0 brightness-50" />
                <div className="relative z-10">
                    <h3 className="text-white px-4 pt-4 mx-4 text-2xl font-bold">{anime.data.title} - {anime.data.year}</h3>
                    <div className="flex flex-nowrap max-sm:flex-col text-white p-4">
                        {/* <div className=""> */}
                            <Image src={anime.data.images.webp.image_url}
                                alt={anime.data.images.jpg.image_url} width={250} height={250} className="shadow-lg shadow-white rounded-md w-full object-cover mx-3 max-sm:w-1/2" />
                                {/* </div> */}
                        <div>
                            <div className="flex overflow-x-auto max-sm:pt-3">
                                <div className="mx-1.5 px-2 text-center rounded text-white bg-indigo-900"><p>{anime.data.duration}</p></div>
                                <div className="mx-1.5 px-2 text-center rounded text-white bg-indigo-900"><p>{anime.data.episodes} episode</p></div>
                                <div className="mx-1.5 px-2 text-center rounded text-white bg-indigo-900"><p>Top {anime.data.rank}</p></div>
                                <div className="mx-1.5 px-2 text-center rounded text-white bg-indigo-900"><p>{anime.data.score}</p></div>
                            </div>
                            <p className="px-3">{anime.data.synopsis}</p>
                        </div>
                    </div>
                    <div><VideoPlayer youtubeid={anime.data.trailer.youtube_id} /></div>
                </div>
            </div>
        </>
    )
}
export default Page