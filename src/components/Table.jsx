import { useState } from "react";
// import Search from "./TableSearch";

const tableData = [
    {"name": "fulan", "nim": "01"},
    {"name": "fulani", "nim": "02"},
    {"name": "fulana", "nim": "03"},
]

const Data = ({array}) =>{
    return (
    <>
        {array ? array.map((data, i) => {
            return(
                <tr key={i}>
                    <td>{i+1}</td>
                    {Object.keys(data).map((key, idx) => (
                        <td key={idx}>
                            {data[key]}
                        </td>
                    ))}
                </tr>
            )
            })
            : <tr>Data Kosong</tr>
        }
    </>
    )
}

const Table = () =>{
    const [search, setSearch] = useState()
    const [filter, setFilter] = useState()

    const searchData = () => {
        let value = search;
        setFilter(value ? tableData.filter(e=>e.name.includes(value)) : tableData);
    }

    return(
        <>
            <input type="text" name="search" id="search-data" 
            className="text-black"
            onChange={(e) => {
                setSearch(e.target.value);
            }}
            />
            <button onClick={() => {searchData()}}>Search</button>

            <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    {Object.keys(tableData[0]).map((key, i) => <th key={i}>{key.toUpperCase()}</th> )}
                </tr>
            </thead>
            <tbody>
                <Data array={filter ? filter : tableData} />
            </tbody>
            </table>
    </>
       
    )

}
export default Table; 