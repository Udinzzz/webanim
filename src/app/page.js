import AnimeList from "@/app/Components/AnimeList/index"
import Head from "@/app/Components/AnimeList/header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";
const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  let recomendasiAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  
  const jumlahDataYangDiinginkan = 10;
  const indeksAcak = Math.floor(Math.random() * (recomendasiAnime.length - jumlahDataYangDiinginkan));
  recomendasiAnime = { data: recomendasiAnime.slice(indeksAcak, indeksAcak + jumlahDataYangDiinginkan) };

  return (
    <div className="w-full">
      <Head title={'Paling Populer'} linkHref= {'/populer'} linkTitle= {'Lihat Semua'}/>  
     <AnimeList api={topAnime}/>
     <Head title={'Recomendasi Untuk Anda'} />
     <AnimeList api={recomendasiAnime}/>
    </div>
  )
}

export default Home
