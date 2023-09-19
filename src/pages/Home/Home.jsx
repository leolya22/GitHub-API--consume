import { useState } from "react"
import styles from "./Home.module.css"
import { userSearch } from "../../Services/UserSearchServices";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();


    async function searchUser() {
        const doc = await userSearch(search);
        if(doc.message == "Not Found") {
            navigate("/notFound");
        } else {
            navigate(`/user/${search}`)
        }
        
    }

    return (
        <div className={styles.home}>
            <input 
                className={styles.input} 
                value={search} 
                type="text"
                onChange={e => setSearch(e.target.value)} 
                placeholder='Ingrese el usuario en GitHub'/>
            <button className={styles.enviar} onClick={searchUser}>Buscar</button>
        </div>
    )
}

