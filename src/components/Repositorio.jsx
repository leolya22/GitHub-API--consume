export default function Repositorio({name, url}) {
    const Center = {
        textAlign: "center",
        marginTop: "30px",
    }
    const Link = {
        textDecoration: "none",
        color: "white"
    }
    return(
        <div style={Center}>
            <h2>Repositorio : {name}</h2>
            <a style={Link} href={url} target="_blank">Abrir repositorio en GitHub</a>
        </div>
    );
}