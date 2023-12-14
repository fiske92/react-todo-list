import { IoMoonOutline } from "react-icons/io5";
import Navigation from "./Navigation";

function Header({ activeTab, setDarkModeProp }) {
    const {darkMode, setDarkMode} = setDarkModeProp;

    return <nav className="dark:text-white">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl mb-0">ToDo List</h1>
            <span onClick={() => setDarkMode(!darkMode)} className="select-none flex items-center cursor-pointer">
                <IoMoonOutline size={15} className="mr-2" />
                Dark Mode
            </span>
        </div>
        <Navigation activeTab={activeTab} />
    </nav>
}

export default Header;