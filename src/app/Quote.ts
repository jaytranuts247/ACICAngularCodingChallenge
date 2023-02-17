export interface Quote {
  id: number;
  quoteNumber: string;
  lineOfBusiness: number;
}

export interface QuoteCount {
  [key: string]: number;
}
