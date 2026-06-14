"use client";

export default function FloatingPetals() {
  return (
    <>
      {Array.from({ length: 15 }).map(
        (_, index) => (
          <div
            key={index}
            className="petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${
                8 + Math.random() * 10
              }s`,
              animationDelay: `${
                Math.random() * 10
              }s`,
              fontSize: `${
                12 + Math.random() * 12
              }px`,
            }}
          >
            🌸
          </div>
        )
      )}
    </>
  );
}