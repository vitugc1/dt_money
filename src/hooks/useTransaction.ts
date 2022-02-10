import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";

export function useTransactions() {
    const contex = useContext(TransactionsContext);

    return contex;
}




