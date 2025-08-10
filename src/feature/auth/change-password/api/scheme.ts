import * as yup from "yup"

export const ChangePasswordScheme = yup.object().shape({
	new_password: yup
		.string()
		.required("Password is required")
		.min(8, "Password must be at least 8 characters long"),
	confirm_password: yup
		.string()
		.required("Password confirmation is required")
		.oneOf([yup.ref("new_password")], "Passwords do not match"),
})
