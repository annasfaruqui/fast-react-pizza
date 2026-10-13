// ===== Domain Types =====

export interface CartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

export interface Order {
  id: string;
  status: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: CartItem[];
  customer?: string;
  phone?: string;
  address?: string;
  position?: string;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface GeocodingAddress {
  locality: string;
  city: string;
  postcode: string;
  countryName: string;
}

// ===== Redux State Types =====

export interface CartState {
  cart: CartItem[];
}

export interface UserState {
  username: string;
  status: 'idle' | 'loading' | 'error';
  position: Partial<Position>;
  address: string;
  error: string;
}
