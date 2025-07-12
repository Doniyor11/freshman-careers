import * as yup from "yup"

export const EditProfileScheme = yup.object().shape({
	user_update: yup.object().shape({
		email: yup.string().email().required("Email is required"),
		login: yup.string().required("Login is required"),
		phone_number: yup.string().required("Phone number is required"),
	}),
})
