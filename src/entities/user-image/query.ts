import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getUserImageApi } from "./index.ts"

export const useGetUserImageQuery = () => {
	return useQuery({
		queryFn: () => getUserImageApi(),
		queryKey: [apiKeys.userImage],
		select: (data) => data,
	})
}
