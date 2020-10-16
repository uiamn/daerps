export interface ISheet {
  id: string,
  users: string[],
  items: {
    name: string,
    user: number,
    amount: number
  }[]
}
