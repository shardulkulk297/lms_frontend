import React, { useState } from 'react'
import { CompanyData } from "./CompanyData";
const ApiDisplay = () => {

    const [data, setData] = useState(CompanyData);

    return (
        <div>
            ApiDisplay

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">city</th>
                        <th scope="col">companyName</th>
                    </tr>
                </thead>
                <tbody> 

                    {
                        data.map((d, index) => (
                            <tr key={d.id}>
                                <th scope="row">{d.id}</th>
                                <td>{d.name}</td>
                                <td>{d.username}</td>
                                <td>{d.email}</td>
                                <td>{d.address.city}</td>
                                <td>{d.company.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>



        </div>
    )
}

export default ApiDisplay