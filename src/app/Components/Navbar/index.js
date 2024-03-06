import InputSearch from "./InputSearch"
const Navbar = ({}) => {
    return (
        <nav className="w-full bg-indigo-500 flex md:flex-row flex-col justify-between p-2 top-0 sticky top-0">
          <a href="/"><h1  className="text-3xl text-center font-bold text-white">OtakmuDesu</h1></a>
          <InputSearch/>
        </nav>
    )
}
export default Navbar