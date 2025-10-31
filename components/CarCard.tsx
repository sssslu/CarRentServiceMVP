import Link from 'next/link';

/**
 * Interface describing the shape of a car object used throughout the app.
 */
export interface Car {
  id: number;
  name: string;
  type: 'camper' | 'passenger';
  image: string;
  seats: number;
  pricePerDay: number;
}

/**
 * Card component displaying a summary of a car. It shows a photo, the car name,
 * its type (캠핑카 or 승용차), seating capacity and daily price. In a fully
 * functional application this card could link to a detail page.
 */
export default function CarCard({ car }: { car: Car }) {
  return (
    <Link 
      href={`/cars/${car.id}`}
      className="block border rounded shadow-sm overflow-hidden hover:shadow-md transition-all bg-white hover:scale-[1.02] cursor-pointer"
    >
      <div className="h-40 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 truncate">{car.name}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {car.type === 'camper' ? '캠핑카' : '승용차'} · {car.seats}인승
        </p>
        <p className="font-bold">{car.pricePerDay.toLocaleString()}원/일</p>
      </div>
    </Link>
  );
}