import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const subscriptionApi = async () => {
	const response = await clientApi.post(apiKeys.subscription)
	return response.data
}
