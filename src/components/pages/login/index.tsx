import { useState } from "react";
import styles from "./Login.module.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    console.log(e, email, password);
    e.preventDefault();
  };

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.login}>
      <form>
        <div className="form-group">
          <label htmlFor="email">邮箱</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="邮箱"
            defaultValue={email}
            onInput={handleEmailInput}
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="form-group">
          <label htmlFor="password">密码</label>
          <input
            type="password"
            className="form-control"
            id="password"
            defaultValue={password}
            placeholder="密码"
            onInput={handlePasswordInput}
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="register-link">
          <div>
            <a href="/register">注册</a>
          </div>
          <button
            type="submit"
            id="submit"
            onClick={handleSubmit}
            className="btn btn-primary btn-block"
          >
            登录
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
