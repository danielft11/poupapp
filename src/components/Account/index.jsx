import { IconBank } from '../icons'
import styles from './account.module.css'

const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const Account = ({ account }) => {
    return (
        <>
            <div className={styles.account}>
                <div className={styles.accountName}>
                    <IconBank /> <p>{account.bank}</p>
                </div>
                <div className={styles.accountDetails}>
                    <p className={styles.balanceText}>Saldo</p>
                    <p>{formatter.format(account.balance)}</p>
                </div>
            </div>
        </>
    )
}