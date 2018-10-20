getGenerationMax([
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 0]
], 1000);

function getGenerationMax(cells, generations){
    var max = countCells(cells);
    var next = cells;
    var g = 1;
    while (g <= generations) {
        next = updateCells(next);
        cropCells(next);

        var c = countCells(next);
        console.log(`${g++} - ${c} / ${max}`);
        if (c > max) max = c;
    }

    return max;
}

function updateCells(cells) {
    if (!cells.length) return cells;

    var outter = updateBorder(cells, 1);
    var inner = updateBorder(cells, 0); // waste to calculate
    var updated = [];
    cells.forEach((row, r) => {
        updated.push([]);
        row.forEach((cell, c) => {
            updated[r][c] = getNewState(cell, cells, c, r);
        });
    });

    if (outter.need) {
        return makeBigger(updated, outter.border);
    } else if (inner.need) {
        return updated;
    } else {
        return makeSmaller(updated);
    }
}
function cropCells(cells) {
    if (!cells.length) return;

    while (cells.length) {
        if (cells[0].every((c) => !c)) {
            cells.shift();
        } else break;
    }
    while (cells.length) {
        if (cells[cells.length - 1].every((c) => !c)) {
            cells.pop();
        } else break;
    }
    if (!cells.length) return;

    for (var left = 0; left < cells[0].length; left++) {
        if (!cells.every((row) => !row[left])) break;
    }
    for (var right = cells[0].length - 1; right >= 0; right--) {
        if (!cells.every((row) => !row[right])) break;
    }
    if (right - left < 0) {
        // make it empty
        cells[0] = [];
        cells.splice(1, cells.length - 1);
    } else {
        cells.forEach((row, r) => {
            cells[r] = row.slice(left, right + 1);
        });
    }
}
function countCells(cells) {
    var count = 0;
    cells.forEach((row, r) => {
        row.forEach((cell, c) => {
            if (cells[r][c]) count++;
        });
    });
    return count;
}

function makeBigger(cells, border) {
    var col = cells.length ? cells[0].length : 0;
    col += 2;

    cells.unshift(border.slice(0, col));
    cells.push(border.slice(col, col * 2));

    border = border.slice(col * 2);
    cells.forEach((row, r) => {
        if (!r || r == cells.length - 1) return;
        row.unshift(border.shift());
        row.push(border.shift());
    });
    return cells;
}
function makeSmaller(cells) {
    if (cells.length <= 2 || cells[0].length <= 2) return [[]];

    cells.shift();
    cells.pop();
    cells.forEach((row) => {
        row.shift();
        row.pop();
    });
    return cells;
}

function updateBorder(cells, delta) {
    var need = false;
    var border = [];
    var xmin = -delta, xmax = cells[0].length - 1 + delta;
    var ymin = -delta, ymax = cells.length - 1 + delta;

    var x, y;
    for (x = xmin, y = ymin; x <= xmax; x++) fn(x, y);
    if (ymax != ymin) {
        for (x = xmin, y = ymax; x <= xmax; x++) fn(x, y);
    }
    for (y = ymin + 1; y <= ymax - 1; y++) {
        fn(xmin, y);
        fn(xmax, y);
    }
    return {need, border};

    function fn(col, row) {
        var state = getNewState(0, cells, col, row);
        if (state) need = true;
        border.push(state);
    }
}

function getNewState(current, cells, x, y) {
    var count = countLiveNeighbours(cells, x, y);
    return (current ? count == 2 || count == 3 : count == 3) ? 1 : 0;
}
function countLiveNeighbours(cells, x, y) {
    var ns = [];
    pushIfValid(ns, cells, x - 1, y - 1);
    pushIfValid(ns, cells, x - 1, y);
    pushIfValid(ns, cells, x - 1, y + 1);
    pushIfValid(ns, cells, x, y - 1);
    pushIfValid(ns, cells, x, y + 1);
    pushIfValid(ns, cells, x + 1, y - 1);
    pushIfValid(ns, cells, x + 1, y);
    pushIfValid(ns, cells, x + 1, y + 1);

    return ns.filter((c) => c).length;
}
function pushIfValid(ns, cells, x, y) {
    if (x >= 0 && x < cells[0].length
            && y >= 0 && y < cells.length) {
        ns.push(cells[y][x]);
    }
}
