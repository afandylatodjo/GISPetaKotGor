import { useState } from "react";

const tableData = [
    {"name": "fulan", "nim": "01"},
    {"name": "fulani", "nim": "02"},
    {"name": "fulana", "nim": "03"},
    {"name": "fulano", "nim": "04"}
]

const Table = () =>{
    return(
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    {Object.keys(tableData[0]).map((key, i) => <th key={i}>{key.toUpperCase()}</th> )}
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, i) => {
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

                })}
            </tbody>
        </table>
    )

}
export default Table; 