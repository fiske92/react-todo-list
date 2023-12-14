import { useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";

function ToDoPage({ setDarkModeProp }) {
    const [currentTab, setCurrentTab] = useState('all')
    
    return <div className="w-[90%] lg:w-[50%] dark:bg-gray-600 transition m-auto bg-emerald-100 shadow-lg rounded p-3 mt-5 relative text-emerald-950">
        <Header activeTab={{currentTab, setCurrentTab}} setDarkModeProp={setDarkModeProp} />

        <div className="py-10">
            <Body currentTab={currentTab} />
        </div>
    </div>
}

export default ToDoPage;