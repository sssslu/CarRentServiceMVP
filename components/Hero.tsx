/**
 * Hero component that displays a large banner with a background image,
 * tagline and descriptive subtitle. You can update the background image
 * by changing the URL in the `bg-[url()]` utility below. For production
 * use, consider hosting your own assets instead of relying on external CDNs.
 */
export default function Hero() {
  return (
    <section
      className="bg-cover bg-center text-white py-24"
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          빛나는 밤, 떠나는 집
        </h1>
  <p className="text-lg sm:text-xl mb-8">LunaVan, 오늘 밤의 쉼표</p>
      </div>
    </section>
  );
}
