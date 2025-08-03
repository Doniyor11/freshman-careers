import * as yup from "yup"

export const SubmitScheme = yup.object().shape({
	full_name: yup.string().required(""),
	email: yup.string().email().required(""),
	phone_number: yup.string().required(""),
	current_study: yup.string().required(""),
	languages: yup.string().required(""),
	future_goals: yup.string().required(""),
	past_experience: yup.string().required(""),
	additional_circumstances: yup.string().required(""),
})
