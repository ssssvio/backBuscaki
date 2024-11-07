export interface JwtPayload {
  username: string;
  sub: number;
  role: 'Merchant' | 'Customer';
}