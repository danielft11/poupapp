import styles from './accounts.module.css'
import { Account } from '../Account'
import { Button } from '../Button';
import { IconWallet } from '../icons';

const accounts = [
    { "bank": "Itaú", "balance": 1200 },
    { "bank": "Bradesco", "balance": 800 },
    { "bank": "Nubank", "balance": 1800 }
]

export const Accounts = () => {
    return (
        <>
            <ul ul className={styles.accountList}>
                {accounts.map((accountItem, index) => {
                    return (
                        <li key={index}>
                            <Account account={accountItem} />
                        </li>
                    )
                })}
            </ul>
            <div className={styles.actions}>
                <Button>
                    <IconWallet /> Adicionar conta
                </Button>
            </div>
        </>
    )
}