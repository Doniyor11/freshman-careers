import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const unsubscriptionApi = async () => {
	const response = await clientApi.post(apiKeys.unSubscription)
	return response.data
}
