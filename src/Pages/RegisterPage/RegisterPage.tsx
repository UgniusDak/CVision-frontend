import { useState } from "react";
import styles from "./RegisterPage.module.css";
import { registerValidationSchema } from "../../utils/validation/registerValidation";
import ErrorMessage from "../../components/ErrorMessages/ErrorMessages";
import { useNavigate } from "react-router";

type User = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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
      await registerValidationSchema.validate(formData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setError("");
      navigate("/login", {
        state: {
          message: "Registration successful. Please log in.",
          email: formData.email,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  return (
    <div className={styles.registerWrapper}>
      <form noValidate onSubmit={handleSubmit} className={styles.registerForm}>
        <h2>
          Create an account <span>CVision</span>
        </h2>

        <label htmlFor="input-name">Name</label>
        <input
          type="text"
          id="input-name"
          placeholder="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="input-email">Email</label>
        <input
          type="email"
          id="input-email"
          placeholder="email@example.com"
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
        <ErrorMessage message={error} />
        <button type="submit">Register</button>

        <p className={styles.bottomText}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
