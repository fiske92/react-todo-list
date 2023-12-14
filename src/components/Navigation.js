import tabs from "../resources/tabs";
import Tab from "./Tab";

function Navigation({ activeTab }) {
    return <nav>
        {tabs &&
            <ul className="flex justify-around items-start flex-col sm:flex-row">
                {tabs.map(tab => <Tab key={tab.id} tabData={tab} activeTab={activeTab} />)}
            </ul>
        }
    </nav>
}

export default Navigation;