import CarCard from '../../components/CarCard';
import { allCars } from '../../data/cars';

/**
 * Combined list of all vehicles available on the platform. This page
 * demonstrates how you might display multiple car types on one page.
 */
export default function CarsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">전체 차량 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}