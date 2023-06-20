export interface RoomType {
  rent_type: string;
  area: number;
  location: string;
  room_type: string;
  price: string;
}

export interface RoomDetailType extends RoomType {
  floor: number;
  size: number;
  maintenance_fee: number;
  description: string;
  parking_fee: number;
}
