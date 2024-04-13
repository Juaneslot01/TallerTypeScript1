import { seriesData } from './data.js';
document.addEventListener('DOMContentLoaded', () => {
    const seriesTableBody = document.getElementById('series-table-body');
    let totalSeasons = 0;
    
    seriesData.forEach((serie) => {
        totalSeasons += serie.seasons;
        const row = seriesTableBody.insertRow();
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
    });

    const averageSeasons = totalSeasons / seriesData.length;
    const averageRow = seriesTableBody.insertRow();
    averageRow.innerHTML = `
        <td colspan="3">Seasons average:</td>
        <td>${averageSeasons.toFixed(1)}</td>
    `;
});

