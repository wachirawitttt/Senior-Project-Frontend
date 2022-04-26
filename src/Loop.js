import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DropdownButton from 'react-bootstrap/DropdownButton'



export default function Loop() {

    function refreshPage() {
        window.location.reload(false);
    }

    const [value, setValue] = useState('prediction-detail?month=04&year=2022');
    const handleSelect = (e) => {
        console.log(e);
        setValue(e)

        // refreshPage()
        // select()
    }

    // const elect = () => {
    let baseURL = "http://localhost:8082/v1/prediction-result/" + value

    console.log(baseURL)
    console.log(value)

    const [post, setPost] = useState(null)
    // const select = () => {
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
            console.log(response.data)
        })
    }, [value]);
    console.log(post)
    if (!post) return null;
    // }


    // const [data, setData] = useState([]);
    const data = []
    // function addItemToCart(e) {
    //     const item = e.target.value;
    //     console.log(item);
    //     setData([...data, item]);
    //   }

    for (let i = 0; i < post.predictionResultList.length; i++) {
        data[i] = post.predictionResultList[i]
    }

    // }

    if (data.length != 0) {

        return (
            <>
                <div className='dropdown-container' id="contents">
                    <DropdownButton
                        alignRight
                        title="Select Month"
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="prediction-detail?month=01&year=2022">January</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=02&year=2022">February</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=03&year=2022">March</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=04&year=2022">April</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=05&year=2022">May</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=06&year=2022">June</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=07&year=2022">July</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=08&year=2022">August</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=09&year=2022">September</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=10&year=2022">October</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=11&year=2022">November</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=12&year=2022">December</Dropdown.Item>
                    </DropdownButton>
                </div>
                <section class="content">
                    <div>
                        <h2 class="content-header">Predictions</h2>
                    </div>
                    {data.map((data) => (
                        <div>
                            <div class="predicted-match-container">


                                <div class="prob-title">
                                    <span class="prob-vs"><b>{data.homeTeam}</b> vs <b>{data.awayTeam}</b></span>
                                    <span class="prob-date">{data.date}</span>
                                </div>
                                <div class="prob-bar">
                                    <span class="home-prob" data-hover={(((data.prob_H) * 100).toFixed(2)) + '%'} style={{ width: (data.prob_H) * 100 + '%' }}><b>{data.homeTeam}</b></span>
                                    <span class="draw-prob" data-hover={(((data.prob_D) * 100).toFixed(2)) + '%'} style={{ width: (data.prob_D) * 100 + '%' }}><b>Draw</b></span>
                                    <span class="away-prob" data-hover={(((data.prob_A) * 100).toFixed(2)) + '%'} style={{ width: (data.prob_A) * 100 + '%' }}><b>{data.awayTeam}</b></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </>
        );
    }
    else {
        return (
            <>
                <div className='dropdown-container' id="contents">
                    <DropdownButton
                        alignRight
                        title="Select Month"
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="prediction-detail?month=01&year=2022">January</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=02&year=2022">February</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=03&year=2022">March</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=04&year=2022">April</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=05&year=2022">May</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=06&year=2022">June</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=07&year=2022">July</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=08&year=2022">August</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=09&year=2022">September</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=10&year=2022">October</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=11&year=2022">November</Dropdown.Item>
                        <Dropdown.Item eventKey="prediction-detail?month=12&year=2022">December</Dropdown.Item>
                    </DropdownButton>
                </div>
                <section class="content">
                    <div>
                        <h2 class="content-header">Predictions</h2>
                        <h2 class="no-prediction">No Prediction Made (Match Played or Match Dosen't Exists)</h2>
                    </div>
                </section>
            </>
        )
    }
}

