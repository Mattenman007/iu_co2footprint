import React, { useEffect, useState } from 'react';

const EmissionsTable = () => {
  const [data, setData] = useState([]);
  const [landFilter, setLandFilter] = useState('');
  const [unternehmenFilter, setUnternehmenFilter] = useState('');
  const [sortColumn, setSortColumn] = useState('land');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    let url = 'http://localhost:3001/emissionen';
    const params = [];

    if (landFilter) {
      params.push(`land=${encodeURIComponent(landFilter)}`);
    }

    if (unternehmenFilter) {
      params.push(`unternehmen=${encodeURIComponent(unternehmenFilter)}`);
    }

    if (sortColumn) {
      params.push(`sortby=${sortColumn}`);
    }

    if (sortOrder) {
      params.push(`order=${sortOrder}`);
    }

    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [landFilter, unternehmenFilter, sortColumn, sortOrder]);

  const handleSort = (column) => {
    setSortColumn(column);
    setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <section id="emission" className="min-vh-100 d-flex align-items-center text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-uppercase fw-semibold display-1 text-white">Emissionstabelle</h1>
            <div>
              <input
                type="text"
                placeholder="Land"
                value={landFilter}
                onChange={(e) => setLandFilter(e.target.value)}
              />
              <input
                type="text"
                placeholder="Unternehmen"
                value={unternehmenFilter}
                onChange={(e) => setUnternehmenFilter(e.target.value)}
              />
            </div>
            <table class="emission-table">
              <thead>
                <tr className="text-white mt-3 mb-4">
                  <th onClick={() => handleSort('land')}>
                    Land {sortColumn === 'land' && (sortOrder === 'asc' ? '▲' : '▼')}
                  </th>
                  <th onClick={() => handleSort('unternehmen')}>
                    Unternehmen {sortColumn === 'unternehmen' && (sortOrder === 'asc' ? '▲' : '▼')}
                  </th>
                  <th>CO2-Ausstoß (in Tonnen)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.land}</td>
                    <td>{item.unternehmen}</td>
                    <td>{item.co2.toLocaleString('de-DE')}</td>
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