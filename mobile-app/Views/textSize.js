import { useSelector } from "react-redux";


function getSize(params) {
    let size = useSelector(state => state.propertyReducer.accType);
    return size;
}
