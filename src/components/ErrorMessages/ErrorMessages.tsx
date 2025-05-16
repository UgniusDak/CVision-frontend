import styles from "./ErrorMessages.module.css";

type Props = {
  message?: string | null;
};

export default function ErrorMessage({ message }: Props) {
  if (!message) return null;

  return <p className={styles.error}>{message}</p>;
}
