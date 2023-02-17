export interface LineOfBusiness {
  id: number;
  name: string;
  description: string;
}

export interface LineOfBusinessWithQuote extends LineOfBusiness {
  nbOfQuote: number;
}
