import {
    BsCardChecklist,
    BsCalendarPlus,
    BsBookmarkCheck,
    BsBookmarkDash
} from 'react-icons/bs'

const tabs = [
    {
        name: 'new',
        icon: <BsCalendarPlus />,
        id: 1
    },
    {
        name: 'all',
        icon: <BsCardChecklist />,
        id: 2
    },
    {
        name: 'completed',
        icon: <BsBookmarkCheck />,
        id: 3
    },
    {
        name: 'ToDo',
        icon: <BsBookmarkDash />,
        id: 4
    }
];

export default tabs;