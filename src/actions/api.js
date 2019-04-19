export default {
    user: {
        login: credentials => 
        axios.post("/api/auth", { credentials }).then(res => res.data.user)
    }
};