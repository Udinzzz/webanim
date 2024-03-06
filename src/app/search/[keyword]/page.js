import AnimeList from "@/app/Components/AnimeList/index"
import Head from "@/app/Components/AnimeList/header";
import { getAnimeResponse } from "@/libs/api-libs";
const Page = async ({ params }) => {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

    return (
        <div className="w-full">
            <Head title={`pencarian dari ${decodedKeyword} ....`}/>
            <AnimeList api={searchAnime} />
        </div>
    )
}
export default Page