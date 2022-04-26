import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = "http://localhost:8082/v1/prediction-result/ranking-datail"



function Standing() {
    
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
            console.log(response.data)
        })
    }, []);
    console.log(post)
    if (!post) return null;


    const data = []

    for (let i = 0; i < post.standingResponseList.length; i++) {
        data[i] = post.standingResponseList[i]
    }
    
    return (
        <>
            <section class="standing" id="standings">
                <div>
                    <h2 class="content-header">Standing (2021-2022)</h2>
                    <table class="standing-table">
                        <tr>
                            <th>Ranking</th>
                            <th>Team</th>
                            <th>Point</th>
                            <th>Goal Difference</th>
                            <th>Win Rate</th>
                        </tr>
                        {data.map((data) => (
                        <tr>
                            <td>{data.position + 1}</td>
                            <td>{data.teamName}</td>
                            <td>{data.pts}</td>
                            <td>{data.goal_diff}</td>
                            <td>{(((data.win_rate)* 100).toFixed(2)) + '%'}</td>
                        </tr>
                        ))}
                    </table>
                </div>
            </section>
        </>
    )


}

export default Standing