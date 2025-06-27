export const isOverOneYearAgo = (date: string): boolean => {
  const currentDate = new Date()
  const oneYearAgo = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1))
  return new Date(date) <= oneYearAgo
}

export const getPassedYear = (date: string): number => {
  const currentYear = new Date().getFullYear()
  const passedYear = currentYear - new Date(date).getFullYear()
  return passedYear
}
