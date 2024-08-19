import React, { useEffect, useState } from 'react';

const EmissionsTable = () => {
  const [data, setData] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/emissionen?land=${countryFilter}&firma=${companyFilter}`)
      .then(response => response.json())
      .then(data => setData(data.data));
  }, [countryFilter, companyFilter]);

  return (
    <section id="emission" className="min-vh-100 d-flex align-items-center text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-uppercase fw-semibold display-1 text-white">Emissionstabelle</h1>
            <div>
              <input
                type="text"
                placeholder="Filter nach Land"
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
              />
              <input
                type="text"
                placeholder="Filter nach Unternehmen"
                value={companyFilter}
                onChange={(e) => setCompanyFilter(e.target.value)}
              />
            </div>
            <table>
              <thead>
                <tr className="text-white mt-3 mb-4">
                  <th>Land</th>
                  <th>Unternehmen</th>
                  <th>CO2-Ausstoß (in Tonnen)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.country}</td>
                    <td>{item.company}</td>
                    <td>{item.co2_emissions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmissionsTable;