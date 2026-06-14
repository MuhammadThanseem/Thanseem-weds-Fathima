import { weddingData } from "@/data/wedding";

export default function EventsSection() {
  return (
    <section className="py-28 px-6 floral-bg">
      <p className="uppercase tracking-[5px] text-center text-[#A67C52]">
        Events
      </p>

      <h2 className="font-heading text-5xl text-center mt-4 mb-20">
        Join Our Celebration
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {[weddingData.nikah, weddingData.reception].map(
          (event) => (
            <div
              key={event.title}
              className="invitation-card p-12"
            >
              <h3 className="font-heading text-4xl">
                {event.title}
              </h3>

              <div className="space-y-4 mt-8">
                <p>
                  <strong>Date:</strong> {event.date}
                </p>

                <p>
                  <strong>Time:</strong> {event.time}
                </p>

                <p>
                  <strong>Venue:</strong> {event.venue}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {event.address}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}