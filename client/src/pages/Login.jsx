import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" w-full h-screen bg-secodary flex flex-col justify-center items-center gap-5">
      <h1>Login</h1>
      <form className=" flex flex-col gap-5" action="submit">
        <div className=" flex gap-5 items-center justify-center">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className=" flex gap-5 items-center justify-center">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button className=" bg-primary" type="submit">
          Login
        </button>
        <p>
          Don't have an account?<Link to={"/register"}> Register here</Link>.
        </p>
      </form>
    </div>
  );
}

export default Login;
