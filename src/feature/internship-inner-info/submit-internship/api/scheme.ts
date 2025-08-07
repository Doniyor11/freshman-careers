import * as yup from "yup"

export const SubmitScheme = yup.object().shape({
	full_name: yup.string().required("Full name is required"),
	email: yup
		.string()
		.email("Invalid email address")
		.required("Email is required"),
	phone_number: yup.string().required("Phone number is required"),
	current_study: yup.string().required("Current study is required"),
	languages: yup.string().required("Languages is required"),
	future_goals: yup.string().required("Future goals is required"),
	past_experience: yup.string().required("Past experience is required"),
	additional_circumstances: yup
		.string()
		.required("Additional circumstances is required"),
})
