export interface IGetInternship {
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
	salary: string
	payment_status: string
	payment_amount: number
	payment_regularity: string
	schedule: string
	working_hours: string
	id: number
	company_title: string
	company_image: string
	company_description: string
}

export interface IMyInternshipParam {
	name?: string
	format?: string
	education?: string
	salary?: string
	start_date_min?: any
	start_date_max?: any
	data_order?: string
}
