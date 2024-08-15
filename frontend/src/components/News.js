import React from 'react';

const News = () => {
  return (
    <section id="news" class="section-padding border-top">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="text-uppercase fw-semibold display-1 text-white">Emissionstabelle</h1>
            <table>
              <thead>
                <tr class="text-white mt-3 mb-4">
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

export default News;
