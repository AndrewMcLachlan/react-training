import { useMutation, useQuery } from "react-query";

let state = "Some value";

// useData simulates a query to a REST API
export const useData = () => useQuery<string>(["data"], () => { return state; }, {
    cacheTime: 10000,
    refetchInterval: 5000,
});

// useState simulates a POST/PUT/PATCH request to a REST API
export const useSetData = () => useMutation<string, any, any, any>({
    onMutate(newData) {
        state = newData;
    },
});
