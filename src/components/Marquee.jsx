export default function Marquee({ items }) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span className="marquee-item mono" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
