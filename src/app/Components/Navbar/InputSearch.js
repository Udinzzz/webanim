"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;
    if (keyword.trim() == "") return
    if (!keyword) return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };


  return (
    <div className="relative"><form><input placeholder="Search...." className="p-2 rounded w-full" ref={searchRef} onKeyPress={handleSearch} /></form>
      <button className="absolute top-1 end-3 text-xl" onClick={handleSearch}>
        🔍
      </button></div>
  )
}
export default InputSearch
