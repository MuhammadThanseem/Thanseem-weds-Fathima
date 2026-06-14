import { weddingData } from "@/data/wedding";

export default function VenueSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <p className="uppercase tracking-[5px] text-center text-primary">
        Venue
      </p>

      <h2 className="font-heading text-3xl md:text-5xl text-center mt-4 mb-12">
        Find Your Way
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {[weddingData.nikah, weddingData.reception].map(
          (event) => (
            <div
              key={event.title}
              className="invitation-card p-6 md:p-10"
            >
              <h3 className="font-heading text-xl md:text-3xl">
                {event.title}
              </h3>

              <p className="mt-6">
                {event.venue}
              </p>

              <p className="text-muted mt-2">
                {event.address}
              </p>

              <a
                href={event.mapLink}
                target="_blank"
                className="inline-block w-full md:w-auto text-center mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 rounded-full bg-primary text-white btn-modern"
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