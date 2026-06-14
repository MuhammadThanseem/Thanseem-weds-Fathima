import { weddingData } from "@/data/wedding";

export default function VenueSection() {
  return (
    <section className="py-28 px-6">
      <p className="uppercase tracking-[5px] text-center text-[#A67C52]">
        Venue
      </p>

      <h2 className="font-heading text-5xl text-center mt-4 mb-20">
        Find Your Way
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {[weddingData.nikah, weddingData.reception].map(
          (event) => (
            <div
              key={event.title}
              className="invitation-card p-10"
            >
              <h3 className="font-heading text-3xl">
                {event.title}
              </h3>

              <p className="mt-6">
                {event.venue}
              </p>

              <p className="text-gray-600 mt-2">
                {event.address}
              </p>

              <a
                href={event.mapLink}
                target="_blank"
                className="inline-block mt-8 px-8 py-4 rounded-full bg-[#A67C52] text-white"
              >
                Get Directions
              </a>
            </div>
          )
        )}
      </div>
    </section>
  );
}