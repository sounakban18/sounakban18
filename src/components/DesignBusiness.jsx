import Reveal from './Reveal';

const chain = ['User', 'Experience', 'Product', 'Brand', 'Business'];

export default function DesignBusiness() {
  return (
    <section className="section design-business">
      <div className="container design-business-grid">
        <Reveal className="design-business-copy">
          <span className="eyebrow">Design × Business</span>
          <h2 className="display-md">Design doesn&rsquo;t exist in isolation.</h2>
          <p className="body-lg">
            A screen sits inside a chain — user, experience, product, brand,
            business. Two years inside Morfiizo Enterprise put me somewhere
            in that chain, not just at the screen. That changes what I notice
            when I design one.
          </p>
        </Reveal>

        <Reveal delay={120} className="chain-diagram" aria-hidden="true">
          {chain.map((node, i) => (
            <div className="chain-node-wrap" key={node}>
              <div className="chain-node">
                <span className="mono">{node}</span>
              </div>
              {i < chain.length - 1 && <div className="chain-link" />}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
