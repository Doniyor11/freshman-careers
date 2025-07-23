import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getUserImageApi = async () => {
	const response = await clientApi.get(apiKeys.userImage)
	return response?.data
}
