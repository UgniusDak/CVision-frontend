import * as Yup from "yup";

export const registerValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 character long")
    .max(12, "Name is to long")
    .matches(
      /^[A-ZĄČĘĖĮŠŲŪŽa-ząčęėįšųūž\s'-]{2,50}$/,
      "Name must contain only letters"
    )
    .required("Name is required"),

  email: Yup.string()
    .email("Enter a valid email address, e.g. user@example.com")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      "Email must be a valid format like name@example.com"
    )
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password is too long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .required("Password is required"),
});
