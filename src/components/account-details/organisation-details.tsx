import React, { useContext, useState } from 'react';
import { Button } from "react-bootstrap";
import { Card, CardContent, CardHeader, TextField, Typography } from "@material-ui/core";
import { Organisation } from "../../models/organisation";
import { UserDetailsContext } from "../../contexts/user-details";
import { SnackbarToggleContext } from "../../contexts/snackbar-toggle";
import { joinOrganisation, leaveOrganisation } from "../../controllers/individual-controller";

export const OrganisationDetails: React.FC<{ organisation?: Organisation }> = ({ organisation }) => {
    const { user } = useContext(UserDetailsContext);
    const [ joinCode, setJoinCode ] = useState("");
    const { setUser } = useContext(UserDetailsContext);
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);

    const handleLeaveOrg = async () => {
        const hasLeft = await leaveOrganisation();
        if ( hasLeft ) {
            setUser({ ...user, organisationId: "" });
            setSnackbarDefinition({
                visible: true,
                severity: 'success',
                message: "Successfully added to organisation"
            });
        } else setSnackbarDefinition({
            visible: true,
            severity: 'error',
            message: "Error in adding to organisation"
        });
    };

    const handleJoinOrgSubmit = async () => {
        if ( joinCode.length > 0 ) {
            const hasJoined = await joinOrganisation(joinCode);
            if ( hasJoined ) {
                setUser({ ...user, organisationId: joinCode });
                setSnackbarDefinition({
                    visible: true,
                    severity: 'success',
                    message: "Successfully added to organisation"
                });
            } else setSnackbarDefinition({
                visible: true,
                severity: 'error',
                message: "Error in adding to organisation"
            });
        }
    };

    return !user.organisationId ? <>
        <Card>
            <CardHeader
                title="Organisation Details"
            />
            <CardContent>
                <Typography>
                    Organisation: { organisation?.orgName ?? "dummy name" }
                </Typography>
                <Typography>
                    Products: { organisation?.products.map((product, idx) => {
                    return <><span key={ idx }>
                            { idx + 1 }. { product.name }
                        </span>
                        <br/>
                    </>
                }) ?? "1. Effective Communications" }
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
            <Button variant="danger" onClick={ handleLeaveOrg }>
                Leave organisation
            </Button>
        </div>
    </> : <>
        <Typography>
            Join an Organisation with code:-
        </Typography>
        <TextField
            margin={ "normal" }
            label="Name"
            type='text'
            onChange={ (e) => {
                setJoinCode(e.target.value)
            } }
            value={ joinCode }
            variant="outlined"/>
        <br/>
        <Button onClick={ handleJoinOrgSubmit } disabled={ joinCode.length === 0 } variant="contained"
                color={ 'primary' }>
            Join
        </Button>
    </>;
};

export default OrganisationDetails;
