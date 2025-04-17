import NavBar from "../components/NavBar";

function Login(){
    return(
        <>
        <header>
            {/* save space for navbar */}
<NavBar/>
        </header>
        <main>
            <hi>Login</hi>
            <form>
                <div>
        <label for="username">username</label>
        <input id ="username" type="text"placeholder="username"/>
                </div>
                <br/>
                <div>
        <label for="password">password</label>
        <input id ="password" type="password"placeholder="password"/>
                </div>
                <br/>
                <button type="submit">submit</button>
            </form>
        </main>
        </>
    )
}
export default Login;