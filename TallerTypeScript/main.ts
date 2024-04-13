
import { seriesData } from './data';

document.addEventListener('DOMContentLoaded', () => {
    const seriesTableBody = document.getElementById('series-table-body') as HTMLTableSectionElement;
    seriesData.forEach((serie) => {
        const row = seriesTableBody.insertRow();
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
    });
});
