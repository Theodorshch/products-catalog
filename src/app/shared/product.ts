export interface Product {
  id: number;
  title: string;
  img: string;
  text: string;
}

export interface Review {
  created_at: string;
  created_by: CreatedBy;
  id: number;
  product: number;
  rate: number;
  text: string;
}

export interface PostReview {
  success: boolean;
}

export interface CreatedBy {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  username: string;
}
