import styles from './typography.module.css'

const TAGS = {
    h1: 'h1',
    h2: 'h2',
    body: 'p'
}

export const Typography = ({ children, variant }) => {

    const Component = TAGS[variant] || TAGS.body // Se for passada alguma variant que não existe, usa a variant body como padrão
    const variantClass = styles[variant] || styles.p // Mesma lógica para a classe de estilo, ou seja, se a variant não existir, usa o estilo de parágrafo

    return (
        <Component className={variantClass}>
            {children}
        </Component>
    )
}