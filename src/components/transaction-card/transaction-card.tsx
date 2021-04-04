import React from 'react';
import { Transaction } from "../../models/transaction";

export const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
    return <h4>
        TransId: { transaction.id }
    </h4>
};