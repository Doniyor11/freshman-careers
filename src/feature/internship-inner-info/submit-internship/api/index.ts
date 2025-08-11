import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { ISubmit } from "./types.ts"

export const submitApi = async (data: ISubmit) => {
	const formData = new FormData()

	formData.append("full_name", data?.full_name)
	formData.append("email", data?.email)
	formData.append("phone_number", data?.phone_number)
	formData.append("current_study", data?.current_study)
	formData.append("languages", data?.languages)
	formData.append("future_goals", data?.future_goals)
	formData.append("past_experience", data?.past_experience)
	formData.append("additional_circumstances", data?.additional_circumstances)

	if (data?.cv) {
		formData.append("cv", data?.cv)
	}

	if (data?.supporting_documents) {
		formData.append("supporting_documents", data?.supporting_documents)
	}

	const response = await clientApi.post(apiKeys.applicationsSubmit, formData)
	return response.data
}
