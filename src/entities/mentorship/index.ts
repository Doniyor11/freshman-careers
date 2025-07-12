import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getMentorshipsApi = async () => {
	const response = await clientApi.get(apiKeys.mentorships)
	return response?.data
}
