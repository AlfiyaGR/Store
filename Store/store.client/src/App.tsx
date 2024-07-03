/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";


interface Clothes {
    id: number;
    name: string;
    price: number;
    size: string;
}

function Home() {
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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {clothesList.map(item =>
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.size}</td>
                        <td><Link to={`/edit/${item.id}`} >Edit</Link></td>
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

function Edit() {
    const { id } = useParams();

    return (
        <div>
            <h1>Edit Page</h1>
            <h3>Id: {id} </h3>
        </div>
    );

    

    //const [item, setClothes] = useState([] as any);

    //useEffect(() => {
    //    const url = (id: string | undefined) => `https://localhost:7099/Clothes/${id}`

    //    fetch(url(id))
    //        .then(res => res.json())
    //        .then(res => setClothes(res))
    //}, [])
    //return (
    //    <div>
    //        {
    //            (item)
    //                ? (
    //                    <>
    //                        <h1>Details Page</h1>
    //                        <p>
    //                            <strong>Status:</strong> {item.id}
    //                        </p>
    //                        <p>
    //                            <strong>ID:</strong> {item.name}
    //                        </p>
    //                        <p>
    //                            <strong>Title:</strong> {item.size}
    //                        </p>
    //                        <p>
    //                            <strong>UserID:</strong> {item.price}
    //                        </p>
    //                    </>
    //                )
    //                : <h1></h1>
    //        }
    //    </div>
    //)
}


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/edit/:id" element={<Edit />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
/*
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
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {clothesList.map(item =>
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.size}</td>
                        <td><input type="submit" value="Add" /></td>
                        <td><input type="submit" value="Delete" /></td>
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
*/
export default App;