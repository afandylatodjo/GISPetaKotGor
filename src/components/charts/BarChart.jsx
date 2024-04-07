import { useState } from "react";
import { useEffect } from "react";
import {Chart as ChartJS, ArcElement, BarElement, CategoryScale, LineElement, LinearScale, PointElement, Title, RadialLinearScale, Tooltip, Legend, Filler} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement,BarElement, CategoryScale, LineElement, LinearScale, PointElement, Title, RadialLinearScale, Tooltip, Legend, Filler);

const BarChart = ({onFetch, fetchCallback})=>{
    const [berasTradPrice, setBerasTradPrice]= useState();
    const [berasModPrice, setBerasModPrice]= useState();
    const [berasPedPrice, setBerasPedPrice]= useState();
    const [berasProdPrice, setBerasProdPrice]= useState();


    useEffect(()=>{
        onFetch().then((res)=>{
            setBerasTradPrice(res.trad);
            setBerasModPrice(res.mod);
            setBerasPedPrice(res.ped);
            setBerasProdPrice(res.prod);
            fetchCallback()
        })
    }, [])

    return(
        <>
            {
                berasTradPrice && berasModPrice && berasPedPrice && berasProdPrice && (
                <Bar 
                    itemID="2"
                    options={
                        {plugins:{
                            title:{
                                display: true,
                                color: "rgb(122,122,122)",
                                text: "Bar Chart Harga Beras Kota Gorontalo"
                            }
                        }}
                    }
                    data={{
                        labels: ['Pasar Tradisional','Pasar Modern','Pedagang Besar', 'Produsen'],
                        datasets: [{
                            label: 'Harga Beras',
                            data: [berasTradPrice, berasModPrice, berasPedPrice, berasProdPrice],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 205, 86, 0.5)',
                                'rgba(255, 0, 120, 0.5)',
                            ],
                            hoverOffset: 4
                        }]
                    }}
                />
                ) 
            }
        </>
    )

}


export default BarChart;