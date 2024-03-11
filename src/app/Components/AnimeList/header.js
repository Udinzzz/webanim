const Head = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between p-4">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            {linkHref && linkTitle ?
                <a href={linkHref} className="text-md underline hover:text-indigo-500 transition-all text-white">{linkTitle}</a>
                : null
            }
        </div>
    )
}
export default Head