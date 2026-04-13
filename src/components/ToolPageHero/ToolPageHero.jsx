import { Link } from 'react-router-dom';
import './ToolPageHero.css';

/**
 * ToolPageHero — shared hero for every tool page.
 * Keeps all tool pages visually consistent. Dark-mode aware.
 *
 * Props
 * ─────
 * title        string   H1 heading
 * description  string   Paragraph below the title
 * badges       string[] Small chips (e.g. ['100% Free', 'No Sign-up'])
 * primaryCta   { text, href }   Scroll-to or page link
 * secondaryCta { text, href }   Optional secondary action
 * breadcrumbs  [{ name, path }] Optional breadcrumb trail
 * icon         string           Unicons class (e.g. 'uil-image')
 */
const ToolPageHero = ({
  title,
  description,
  badges = [],
  primaryCta = null,
  secondaryCta = null,
  breadcrumbs = [],
  icon = '',
}) => {
  return (
    <section className="tool-hero">
      <div className="tool-hero__container container">

        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="tool-hero__breadcrumb" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.path} className="tool-hero__breadcrumb-item">
                {i < breadcrumbs.length - 1 ? (
                  <>
                    <Link to={crumb.path}>{crumb.name}</Link>
                    <i className="uil uil-angle-right" aria-hidden="true" />
                  </>
                ) : (
                  <span aria-current="page">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Icon */}
        {icon && (
          <div className="tool-hero__icon" aria-hidden="true">
            <i className={`uil ${icon}`} />
          </div>
        )}

        {/* Heading */}
        <h1 className="tool-hero__title">{title}</h1>

        {/* Description */}
        {description && (
          <p className="tool-hero__description">{description}</p>
        )}

        {/* Badges */}
        {badges.length > 0 && (
          <div className="tool-hero__badges">
            {badges.map((badge) => (
              <span key={badge} className="tool-hero__badge">
                <i className="uil uil-check-circle" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* CTA buttons */}
        {(primaryCta || secondaryCta) && (
          <div className="tool-hero__actions">
            {primaryCta && (
              <a href={primaryCta.href} className="tool-hero__btn tool-hero__btn--primary">
                {primaryCta.text}
                <i className="uil uil-arrow-right" aria-hidden="true" />
              </a>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href} className="tool-hero__btn tool-hero__btn--outline">
                {secondaryCta.text}
                <i className="uil uil-info-circle" aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolPageHero;
