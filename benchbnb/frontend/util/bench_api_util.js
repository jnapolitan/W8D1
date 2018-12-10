export const fetchBenches = () => (
    $.ajax({
        method: 'GET',
        url: 'api/benches',
        error: err => console.log(err)
    })
);

export const fetchBench = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/benches/${id}`,
        error: err => console.log(err)
    })
);

export const createBench = (bench) => (
    $.ajax({
        method: 'POST',
        url: 'api/benches',
        data: { bench },
        error: err => console.log(err)
    })
);