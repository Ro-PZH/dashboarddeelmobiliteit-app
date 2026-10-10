import { organisaties } from './organisaties';

/** All governments that use the dashboard, as a grid of logos with their name. */
const LogoGrid = () => {
  return (
    <ul
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4"
      style={{ listStyle: 'none', margin: 0, padding: 0 }}
    >
      {organisaties.map((o) => (
        <li
          key={o.naam}
          className="flex flex-col items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
          style={{ minHeight: '140px' }}
        >
          <div className="flex flex-1 items-center justify-center w-full" style={{ height: '72px' }}>
            {o.logo && (
              <img
                src={`/images/gebruikers/${o.logo}`}
                alt=""
                loading="lazy"
                style={{ maxHeight: '72px', maxWidth: '100%', objectFit: 'contain' }}
              />
            )}
          </div>
          <div className="mt-3 text-sm text-center text-gray-700">{o.naam}</div>
        </li>
      ))}
    </ul>
  );
};

export default LogoGrid;
