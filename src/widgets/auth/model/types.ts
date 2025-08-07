export interface IInitialState {
	authorization: boolean
	authSuccess: string | null
	modalType:
		| "login"
		| "register"
		| "forgot-password"
		| "new-password"
		| "code-confirmation"
		| "change-password"
}

export interface IAuthorizationStore extends IInitialState {
	setAuthorization: (authorization: boolean) => void
	setAuthSuccess: (authSuccess: string | null) => void
	setModalType: (
		modalType:
			| "login"
			| "register"
			| "forgot-password"
			| "new-password"
			| "code-confirmation"
			| "change-password",
	) => void
}
