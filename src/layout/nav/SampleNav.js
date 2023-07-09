const SampleNav = () => {

    const links = [
        {name: "HOME", link: "/"},
        {name: "ABOUT", link: "/about"},
        {name: "NOTICE", link: "/"},
        {name: "SERVICE", link: "/"},
        {name: "BOARD", link: "/board/list"},
        {name: "CONTACT", link: "/"}
    ]

    return ( 
        <div className="shadow-md w-full top-0 left-0 mb-3">
            <div className="flex bg-white py-4 px-10 justify-between">
            <div className="font-bold text-2xl cursor-pointer flex item-center text-gray-800">
                <span className="text-3xl text-indigo-600 mr-1 pt-1">
                    <ion-icon name="egg-outline"></ion-icon>
                </span>
                SuperEgg
            </div>
            <ul className="flex items-center list-none mr-32">
                {
                    links.map(link => 
                    <li key={link.name} className="ml-8 text-xl"> 
                        <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-300">{link.name}</a>
                    </li>
                    )}
            </ul>
            </div>
        </div>
     );
}
 
export default SampleNav;