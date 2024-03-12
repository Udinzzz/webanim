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
            <div className="grid grid-cols-5 gap-3 mx-5 max-sm:grid-cols-2">
            <AnimeList api={searchAnime} />
            </div>
        </div>
    )
}
export default Page