
const AnimeListHome = () => {
    return (
        <div className="flex flex-row">
        <div className="w-screen transition ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white duration-300 rounded-md flex justify-center">
            <div className="w-full h-auto cursor-pointer flex items-center flex-col">
                    <img src="/naruto.jpeg" alt="...." width={1000} height={1000} className="w-full h-40 object-cover " />
            </div>
        </div>
        <div className="w-screen transition ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white duration-300 rounded-md flex justify-center">
            <div className="w-full h-auto cursor-pointer flex items-center flex-col">
                    <img src="/spy x.jpeg" alt="...." width={1000} height={1000} className="w-full h-40 object-cover " />
            </div>
        </div>
        </div>
    )
}
export default AnimeListHome
