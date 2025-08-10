export interface IChangePassword {
	email?: string
	code?: string
	new_password: string
	confirm_password?: string
}
export interface IChangePasswordScheme {
	email?: string
	code?: string
	new_password: string
	confirm_password: string
}
