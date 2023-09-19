import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"

export default function NotFound() {

    return (
        <div className={styles.notFound}>
            <h1>Error 404</h1>
            <p>El user no existe</p>
            <Link className={styles.button} to="/">Volver al inicio</Link>
        </div>
    )
}