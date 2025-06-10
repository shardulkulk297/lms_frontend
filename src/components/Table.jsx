import React, { useState } from 'react'
import { data } from "./Data"
const Table = () => {
    const [datas, setDatas] = useState(data)
    return (

        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">userId</th>
                        <th scope="col">title</th>
                        <th scope="col">completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((d, index) => (
                            <tr key={d.id}>
                                <th scope="row">{d.id}</th>
                                <td>{d.userId}</td>
                                <td>{d.title}</td>
                                <td>{d.completed == true ? "COMPLETED" : "NOT COMPLETED"}</td>
                            </tr>
                        ))
                    }



                </tbody>
            </table>
        </div>

    )
}

export default Table