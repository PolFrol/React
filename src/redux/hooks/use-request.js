import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../entities/request/slice";
import { useEffect, useState } from "react";

export const useRequest = (thunk, ...params) => {
    const dispatch = useDispatch();
    const [request, setRequest] = useState();
    const requestStatus = useSelector((state) => 
        selectRequestStatus(state, request?.requestId)
    );

    useEffect(() => {
       const request = dispatch(thunk(...params));
       setRequest(request);

       return () => {
        request.abort();
        setRequest(null);
       }
    }, [dispatch, thunk, ...params])

    return requestStatus;
}