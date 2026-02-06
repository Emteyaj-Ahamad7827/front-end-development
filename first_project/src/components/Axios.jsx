import axios from 'axios'; 
import { useState } from 'react';



export const AxiosData = ({}) => {
    const [AxiosData, setAxiosData] = useState([]);

    const getApi = async () => {
        const res = await axios.get('/products/1');
        const resData = await res.data;
        setAxiosData((prev)=> [...prev, resData]);
    };
    console.log('AxiosData', AxiosData);

    return (
        <>
        <button onClick={getApi}>click</button>
        <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '4em',
        }}
        >
            {AxiosData.map((el) => {
            return (
                <div key={el.id}>
                    <h2>{el.id}</h2>
                    <img width="150" src={el.image} alt={el.category} />
                    <h3>{el.name}</h3>
                    <h4>{el.email}</h4>
                    <h4>{el.phone}</h4>
                    </div>
            );
})}
        </div>
        </>
    );
    
};