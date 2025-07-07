export interface IInitialState {
  format: string
  education: string
  salary: string
  search: string
}

export interface IApplicationFilterStore extends IInitialState {
  setFormat: (format: string) => void
  setEducation: (education: string) => void
  setSalary: (salary: string) => void
  setSearch: (search: string) => void
}
