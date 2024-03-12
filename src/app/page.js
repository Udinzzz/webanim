import AnimeList from "./Components/AnimeList";
import Head from "./Components/AnimeList/header"
import { getAnimeResponse, getNestedAnimeResponse } from "../libs/api-libs";
import AnimeListHome from "./Components/AnimeList/index1";
const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  let recomendasiAnime = await getNestedAnimeResponse("recommendations/anime", "entry")

  const jumlahDataYangDiinginkan = 10;
  const indeksAcak = Math.floor(Math.random() * (recomendasiAnime.length - jumlahDataYangDiinginkan));
  recomendasiAnime = { data: recomendasiAnime.slice(indeksAcak, indeksAcak + jumlahDataYangDiinginkan) };

  return (
    <div className="w-full">
      <div><AnimeListHome/></div>
      <Head title={'Paling Populer'} linkHref={'/populer'} linkTitle={'Lihat Semua'} />
      <div className="h-max gap-4 flex flex-row overflow-x-auto py-4 px-4">
        <AnimeList api={topAnime} />
      </div>
      <Head title={'Recomendasi Untuk Anda'} />
      <div className="h-max gap-4 flex flex-row overflow-x-auto py-4 px-4">
        <AnimeList api={recomendasiAnime} />
      </div>
    </div>
  )
}

export default Home
