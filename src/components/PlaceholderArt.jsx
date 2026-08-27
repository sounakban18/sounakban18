export default function PlaceholderArt({ label, accent = '#5e6ad2', ratio = '4 / 3', dense = false, photo = null, alt = '' }) {
  if (photo) {
    return (
      <div className="photo-frame" style={{ aspectRatio: ratio }}>
        <img src={photo} alt={alt} loading="lazy" />
      </div>
    );
  }

  return (
    <div
      className={`placeholder-art${dense ? ' dense' : ''}`}
      style={{ '--accent': accent, aspectRatio: ratio }}
    >
      <div className="placeholder-grid" />
      <span className="placeholder-label">{label}</span>
    </div>
  );
}
