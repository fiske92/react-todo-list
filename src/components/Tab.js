function Tab({ tabData, activeTab }) {
    const {name, icon} = tabData;
    const {currentTab, setCurrentTab} = activeTab;

    const activeClass = currentTab === name ? 'bg-emerald-400 hover:bg-emerald-400' : '';

    return <li
            onClick={() => setCurrentTab(name)}
            className={`w-full select-none flex items-center justify-start sm:justify-center cursor-pointer px-4 py-2 hover:text-emerald-800 hover:bg-emerald-200 grow transition ${activeClass}`}
            >
        {icon}
        <span className="ml-3 capitalize">{name}</span>
    </li>
}

export default Tab;