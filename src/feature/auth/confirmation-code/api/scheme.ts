import * as yup from "yup"

export const ConfirmationCodeScheme = yup.object().shape({
	code: yup.string().required("Code is required"),
})
