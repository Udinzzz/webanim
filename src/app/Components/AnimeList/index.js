const AnimeList = ({ api }) => {
    return (
        <div className="grid grid-cols-5 max-sm:grid-cols-2 max-lg:grid-cols-4 gap-4 p-4">
            {api.data?.map((anime, index) => {
                return (
                    <div className="w-full transition ease-in-out hover:scale-105 duration-300" key={index}>
                        <a href={`/anime/${anime.mal_id}`} className="cursor-pointer flex items-center flex-col">
                            {anime.images && anime.images.webp && anime.images.webp.image_url ? (
                                <img src={anime.images.webp.image_url} alt="...." width={1000} height={1000} className="w-full max-h-72 object-none " />
                            ) : (
                                <p>Image not available</p>
                            )}
                            <h3 className="font-bold text-md text-center text-white hover:text-indigo-500 transition ease-in-out duration-300">
                                {anime.title}
                            </h3>
                        </a>
                    </div>
                )
            })}

        </div>
    )
}
export default AnimeList