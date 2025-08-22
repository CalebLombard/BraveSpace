import { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Welcome! This is a demo. Email: ${email}, Remember Me: ${rememberMe}`);
  };

  return (
    <LoginContainer>
      <h1>brave space</h1>
      <p>Where Safety Begins & Silence Ends</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember Me
        </label>
        <button type="submit">LOGIN</button>
      </form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  
  h1 {
    color: ${(props) => props.theme.colors.lilac};
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    margin-bottom: 2rem;
  }
  
  input, button {
    width: 100%;
    padding: 0.8rem;
    margin: 0.5rem 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    background: ${(props) => props.theme.colors.pink};
    color: white;
    border: none;
    font-weight: bold;
    
    &:hover {
      background: ${(props) => props.theme.colors.lilac};
    }
  }
  
  label {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    
    input {
      width: auto;
      margin-right: 0.5rem;
    }
  }
`;

export default Login;