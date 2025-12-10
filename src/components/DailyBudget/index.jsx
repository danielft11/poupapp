import style from './dailybudget.module.css'

const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const DailyBudget = ({ value }) => {
    return (
        <p className={style.dailyBudget}>
            {formatter.format(value)}
        </p>
    )

}