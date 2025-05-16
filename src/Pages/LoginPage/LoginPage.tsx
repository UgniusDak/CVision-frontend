import { useState } from "react";
import styles from "./LoginPage.module.css";
import { useLocation } from "react-router";

type User = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const location = useLocation();
  const state = location.state as { email?: string; message?: string } | null;

  const [formData, setFormData] = useState<User>({
    email: state?.email || "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      // laikinai
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  return (
    <div className={styles.loginWrapper}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>
          Log In to <span>CVision</span>
        </h2>

        {state?.message && (
          <p className={styles.successMessage}>{state.message}</p>
        )}

        <label htmlFor="input-email">Email</label>
        <input
          type="email"
          id="input-email"
          placeholder="name@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          id="input-password"
          placeholder="●●●●●●●●"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Log In</button>

        <p className={styles.bottomText}>
          You do not have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}
