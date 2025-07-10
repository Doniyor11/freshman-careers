import * as yup from "yup"

export const EditProfileScheme = yup.object().shape({
	email: yup.string().email().required(),
	login: yup.string().required(),
	phone_number: yup.string().required(),
})
