import React from 'react';
import { Button } from "react-bootstrap";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { Organisation } from "../../models/organisation";
// import { Organisation } from "../../models/organisation";

export const OrganisationDetails: React.FC<{ organisation?: Organisation }> = ({ organisation }) => {
    return (
        <>
            <Card>
                <CardHeader
                    title="Organisation Details"
                />
                <CardContent>
                    <Typography>
                        Organisation: { organisation?.orgName ?? "dummy name" }
                    </Typography>
                    <Typography>
                        Products: TBD
                    </Typography>
                    <Typography>
                        Email: a@b.com
                    </Typography>
                    <Typography>
                        Strength: { organisation?.members.length ?? "0" }
                    </Typography>
                </CardContent>
            </Card>
            <div style={ { display: "flex", justifyContent: "center", margin: '1rem' } }>
                <Button variant="danger">
                    Leave organisation
                </Button>
            </div>
        </>
    );
};

export default OrganisationDetails;
