import photo from '../assets/sounak.jpg';

export default function Photo({ ratio = '3 / 4', label }) {
  return (
    <div className="photo-frame" style={{ aspectRatio: ratio }}>
      <img src={photo} alt="Sounak Banerjee" />
      {label && <span className="placeholder-label">{label}</span>}
    </div>
  );
}
