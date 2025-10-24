import styles from './aside.module.css'
import logo from '../../assets/logo.svg' 

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <img src={logo} alt="Logo PoupApp" />
            <footer className={styles.footer}>
                Desenvolvido por Daniel Fernando. Projeto fictício sem fins comerciais.
            </footer>
        </aside>
    )
}