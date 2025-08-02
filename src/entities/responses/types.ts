export interface IResponse {
	applicant_name: string
	applicant_email: string
	internship_id: number
	application_date: string
	status: string
	id: number
	hashed_id: string
	user_id: number
	company: ICompany
	internship: IInternship
	file_path: string
}

export interface ICompany {
	image: string
	title: string
	description: string
	id: number
}

export interface IInternship {
	picture: string
	company_id: number
	date_posted: string
	title: string
	description: string
	requirements: string
	conditions: string
	internship_start_date: string
	internship_end_date: string
	format: string
	education: string
	payment_status: string
	payment_amount: number
	payment_regularity: string
	schedule: string
	working_hours: string
}
