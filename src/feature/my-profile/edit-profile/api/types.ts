export interface IEditProfile {
	user_update: {
		email: string
		login: string
		phone_number: string
	}
	profile_image?: File | null
}
