import React from 'react';
import {Button, Table} from "react-bootstrap";
// import { Organisation } from "../../models/organisation";

//: React.FC<{ organization: Organisation }> = ({ organization })
export const OrganisationDetails = () => {
    return (
        <>
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Organisation</th>
                    <th>Product</th>
                    <th>Email</th>
                    <th>Strength</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>topBusiness</td>
                    <td>Business management</td>
                    <td>topBusiness@customer.com</td>
                    <td>47 people</td>
                </tr>
                </tbody>
            </Table>
            <div style = {{display: "flex", justifyContent: "center"}}>
                <Button variant="danger">
                    Leave organisation
                </Button>
            </div>
        </>
    );
};

export default OrganisationDetails;
