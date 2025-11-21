export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Filters skeleton */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex gap-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-28 bg-gray-200 rounded-lg animate-pulse"
                />
              ))}
            </div>
            <div className="h-12 w-full md:w-96 bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}
