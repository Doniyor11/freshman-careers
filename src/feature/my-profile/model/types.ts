export interface IInitialState {
	modalType?: "edit" | "password" | null
	subscriptionModal?:
		| "subscription"
		| "un_subscription"
		| "pay_subscription"
		| null
}

export interface IProfileStore extends IInitialState {
	setModalType: (modalType?: "edit" | "password" | null) => void
	setSubscriptionModal: (
		subscriptionModal?:
			| "subscription"
			| "un_subscription"
			| "pay_subscription"
			| null,
	) => void
}
