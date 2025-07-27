import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getAccountSuccessApi = async () => {
	const response = await clientApi.get(apiKeys.accountSuccess)
	return response?.data
}
