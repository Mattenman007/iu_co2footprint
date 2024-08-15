import React from 'react';

const EmissionsTable = () => {
  return (
    <section id="emission" className="min-vh-100 d-flex align-items-center text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-uppercase fw-semibold display-1 text-white">Emissionstabelle</h1>
            <table>
              <thead>
                <tr className="text-white mt-3 mb-4">
                  <th>Land</th>
                  <th>Unternehmen</th>
                  <th>CO2-Ausstoß (in Tonnen)</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmissionsTable;
