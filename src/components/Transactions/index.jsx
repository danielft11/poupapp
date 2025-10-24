import styles from './transactions.module.css'

import { TransactionItem } from '../TransactionItem';
import { Button } from '../Button';
import { IconCurrency } from '../icons';

const items = [
    {
        "description": "iFood: hamburguer",
        "value": -49.90,
        "date": "2024-10-01T00:00:00-03:00"
    },
    {
        "description": "Padaria Sabores",
        "value": -12.50,
        "date": "2024-10-03T00:00:00-03:00"
    },
    {
        "description": "Freela (1ª parte)",
        "value": 1000,
        "date": "2024-10-03T00:00:00-03:00"
    },
    {
        "description": "Freela (2ª parte)",
        "value": 500,
        "date": "2024-10-05T00:00:00-03:00"
    },
    {
        "description": "Gasolina",
        "value": -100,
        "date": "2024-10-05T00:00:00-03:00"
    }
]

export const Transactions = () => {
    return (
        <>
            <ul className={styles.list}>
                {items.map((transactionItem, index) => {
                    return (
                        <li key={index}>
                            <TransactionItem item={transactionItem} />
                        </li>
                    )
                })}
            </ul>
            <div className={styles.actions}>
                <Button>
                    <IconCurrency /> Adicionar transação
                </Button>
            </div>
        </>
    )
}