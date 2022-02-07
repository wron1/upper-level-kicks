import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function SignUpForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <div className="login-form-holder">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>Log In</div>
        {error && <label className="danger-label">{error}</label>}
        <label>Email</label>
        <input type="text" className="login-input" ref={emailRef}></input>
        <label>Password</label>
        <input type="text" className="login-input" ref={passwordRef}></input>
        <button type="submit" disabled={loading}>
          Log In
        </button>
      </form>
      <div>
        Don't have an account? <Link to="/signup">Sign Up Here</Link>
      </div>
    </div>
  );
}
