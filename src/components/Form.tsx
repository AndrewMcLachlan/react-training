import { useEffect, useState } from "react";
import { useSetData, useData } from "../queries/sampleAPI";

export const Form: React.FC<React.PropsWithChildren<FormProps>> = ({ label, children }) => {

    const [newValue, setNewValue ] = useState<string>();

    const { data } = useData();
    const { mutate } = useSetData();

    useEffect(() => {   

        setNewValue(data);

    }, [data]);

    return (
        <div>
            <h2>{label}</h2>
            <p>
                <label>Set value</label><input value={newValue} type="text" onChange={(e) => setNewValue(e.currentTarget.value)} />
                <button onClick={() => mutate(newValue)}>Set</button>
            </p>
            <p>
                Current value is {data}
            </p>
            {children}
        </div>
    );
}

export interface FormProps {
    id?: string;
    label: string;
}