export async function userSearch(search) {
    try {
        const response = await fetch(`https://api.github.com/users/${search}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error : " + error.message);
    }
}

export async function repoSearch(link) {
    try {
        const response = await fetch(link);
        const data = await response.json();
        return data
    } catch (error) {
        console.log("Error : " + error.message);
    }
}