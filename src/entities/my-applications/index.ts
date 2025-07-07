import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getMyApplicationsApi = async () => {
	const response = await clientApi.get(apiKeys.myApplications)
	return response?.data
}
