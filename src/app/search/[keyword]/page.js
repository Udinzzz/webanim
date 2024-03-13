import AnimeList from "../../Components/AnimeList/index"
import Head from "../../Components/AnimeList/header";
import { getAnimeResponse } from "../../../libs/api-libs";
const Page = async ({ params }) => {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

    return (
        <div className="w-full">
            <Head title={`pencarian dari ${decodedKeyword} ....`}/>
            <div className="flex flex-wrap gap-3 justify-center">
            <AnimeList api={searchAnime} />
            </div>
        </div>
    )
}
export default Page