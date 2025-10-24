import styles from './Card.module.css'

const Card = ({ children }) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

export const CardHeader = ({ children }) => {
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}

export const CardBody = ({ children }) => {
    return (
        <div className={styles.body}>
            {children}
        </div>
    )
}

Card.Header = CardHeader // atribuição do componente CardHeader como uma propriedade do componente Card. 
Card.Body = CardBody     // atribuição do componente CardBody como uma propriedade do componente Card.

export default Card // exportação do componente Card de forma default, ou seja, como a exportação principal do arquivo