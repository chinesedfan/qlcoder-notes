const fetch = require('node-fetch');

const page = 25;
const max = 166;
let added = 0; // how many movie ratings have been added to the sum

(async function() {
    let sum = 0;
    let start = 0;

    while (added < max) {
        sum = await fetchHTML(sum, start);
        start += page;
    }
})();

function fetchHTML(sum, start) {
    return fetch(`https://movie.douban.com/top250?start=${start}`)
        .then((res) => res.text())
        .then((html) => {
            console.log(`html returns for ${start}`);

            const reg = /<span class="rating_num" property="v:average">([^<]+)<\/span>/g;

            let matches;
            while (added < max && (matches = reg.exec(html))) {
                const rating = +matches[1] * 10; // handle float numbers
                sum += rating;
                console.log(`rating=${rating}, sum=${sum}`);

                added++;
            }

            return sum;
        });
}
