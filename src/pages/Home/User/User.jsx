import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { repoSearch, userSearch } from "../../../Services/UserSearchServices";
import styles from "./User.module.css"
import Repositorio from "../../../components/Repositorio";

export default function User() {
    const [userData, setUserData] = useState(null);
    const [repositorios, setRepositorios] = useState([]);

    const {user} = useParams();
    useEffect(() => {
        const request = async () => {
            const doc = await userSearch(user);
            setUserData(doc);
            const repositorios = await repoSearch(doc.repos_url);
            setRepositorios(repositorios);
        }
        request();
    }, [])

    return (
        <div>
            {userData && 
                <div className={styles.inline}>
                    <div className={styles.flex}>
                        <h1>{userData.name}</h1>
                        <img width={300} src={userData.avatar_url} alt="avatar" />
                        <h4>{userData.login}</h4>
                        <Link className={styles.button} to="/">Volver a buscar</Link>
                    </div>
                    <div className={styles.scroll}>
                        {repositorios?.map(repo => {
                        return <Repositorio name={repo.name} url={repo.svn_url} />
                        })}
                    </div>
                </div>
            }
        </div>
    );
}