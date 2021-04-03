import React, { useContext, useEffect, useState } from 'react';
import { UserDetailsContext } from "../../contexts/user-details";
import { getUserTransactions } from "../../controllers/transaction-controller";
import { SnackbarToggleContext } from "../../contexts/snackbar-toggle";
import { TransactionCard } from "../transaction-card/transaction-card";
import { Transaction } from "../../models/transaction";
import { Loader } from "../loader/loader";

const PaymentHistory = () => {
    const { user } = useContext(UserDetailsContext);
    const [ transactions, setTransactions ] = useState<Transaction[]>(null);
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);


    useEffect(() => {
        ( async () => {
            const transactionResponse = await getUserTransactions(user.id);
            if ( typeof transactionResponse === 'string' ) {
                setSnackbarDefinition({
                    severity: 'error',
                    message: transactionResponse,
                    visible: true
                });
            } else {
                setTransactions(transactionResponse as Transaction[]);
            }
        } )();
        return;
    }, []);

    return <div>
        Payment Methods Template
        { transactions ? transactions.length > 0 ? transactions.map((transaction: Transaction) =>
                <TransactionCard transaction={ transaction }/>)
            : <h3>
                You don't have any transactions.
            </h3> : <Loader/> }
    </div>;
};

export default PaymentHistory;