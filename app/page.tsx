import Hero from '../components/Hero';
import SearchForm from '../components/SearchForm';
import CarCard from '../components/CarCard';
import { campCars, normCars } from '../data/cars';

/**
 * Home page of the VACAR clone. This page features a hero banner, a search form and
 * car listings for recommended campers and popular passenger cars. Only the
 * presentational layer is implemented; no backend or API integration is present.
 */
export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <SearchForm />
      </section>
      <section id="camp" className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">캠핑카</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {campCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
      <section id="norm" className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">승용차</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {normCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </div>
  );
}