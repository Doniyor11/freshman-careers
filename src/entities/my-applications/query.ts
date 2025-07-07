import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getMyApplicationsApi } from "./index.ts"

export const useGetMyApplicationsQuery = () => {
	return useQuery({
		queryFn: () => getMyApplicationsApi(),
		queryKey: [apiKeys.myApplications],
		select: (data) => data,
	})
}
