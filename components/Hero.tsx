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
          일상에서 여행까지 행복한 이동의 시작
        </h1>
        <p className="text-lg sm:text-xl mb-8">캠핑카부터 승용차까지, RS</p>
      </div>
    </section>
  );
}
