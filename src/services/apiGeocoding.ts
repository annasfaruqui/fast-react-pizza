import type { GeocodingAddress, Position } from '../types';

export async function getAddress({ latitude, longitude }: Position): Promise<GeocodingAddress> {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data: GeocodingAddress = await res.json();
  return data;
}
