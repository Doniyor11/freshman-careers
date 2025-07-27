import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getAccountSuccessApi, getSubscriptionRenewalApi } from "./index.ts"

export const useGetAccountSuccessQuery = () => {
	return useQuery({
		queryFn: getAccountSuccessApi,
		queryKey: [apiKeys.accountSuccess],
		select: (data) => data,
	})
}

export const useSubscriptionRenewalQuery = () => {
	return useQuery({
		queryFn: getSubscriptionRenewalApi,
		queryKey: [apiKeys.subscriptionRenewal],
		select: (data) => data,
	})
}
