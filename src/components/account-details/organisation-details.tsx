import React from 'react';
import {Button, Table} from "react-bootstrap";
// import { Organisation } from "../../models/organisation";

//: React.FC<{ organization: Organisation }> = ({ organization })
export const OrganisationDetails = () => {
    return (
        <>
            <Table  size="sm">
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
            <Button
                style={{marginLeft: "65vw", marginTop: "5vh"}}
                variant="danger"
            >
                Leave organisation
            </Button>
        </>
    );
};

export default OrganisationDetails;