import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <>
            {api.data?.map((anime, index) => {
                return (
                    <div className="w-full transition ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white duration-300 rounded-md" key={index}>
                        <Link href={`/anime/${anime.mal_id}`} className="w-60 max-sm:w-56 cursor-pointer flex items-center flex-col">
                            {anime.images && anime.images.webp && anime.images.webp.image_url ? (
                                <img src={anime.images.webp.image_url} alt="...." width={1000} height={1000} className="w-full h-72 object-none " />
                            ) : (
                                <p>Image not available</p>
                            )}
                            <h3 className="font-bold text-md text-center text-white hover:text-indigo-500 transition ease-in-out duration-300">
                                {anime.title}
                            </h3>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}
export default AnimeList