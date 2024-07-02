import { useEffect, useState } from 'react';
import './App.css';

interface Clothes {
    name: string;
    price: number;
    size: string;
}

function App() {
    const [clothesList, setClothes] = useState<Clothes[]>();

    useEffect(() => {
        populateClothesData();
    }, []);

    const contents = clothesList === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Size</th>
                </tr>
            </thead>
            <tbody>
                {clothesList.map(item =>
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.size}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Clothes</h1>
            {contents}
        </div>
    );

    async function populateClothesData() {
        const response = await fetch('clothes');
        const data = await response.json();
        setClothes(data);
    }
}

export default App;