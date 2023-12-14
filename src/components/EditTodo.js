import { FiEdit } from "react-icons/fi";
import { IoCheckmarkSharp } from "react-icons/io5";

function EditTodo({ inputDisabledProp }) {
    const {inputDisabled, setInputDisabled} = inputDisabledProp;
    const iconClasses = 'cursor-pointer w-[7%]';

    return inputDisabled
        ? <FiEdit onClick={() => setInputDisabled(!inputDisabled)} size={25} className={iconClasses} />
        : <IoCheckmarkSharp size={25} className={iconClasses} />
}

export default EditTodo;