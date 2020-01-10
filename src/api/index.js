export const apiGet = url => () => fetch(url).then(data => data.json());

export const apiPut = (url, id, obj) => () =>
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' })
    })
        .then(v => v.json())
        .then(data => {
            if (data.error)
                return Promise.reject(data.validation);
            else
                return data;
        });

export const apiPost = (url, obj) => () =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' })
    })
        .then(v => v.json())
        .then(data => {
            if (data.error)
                return Promise.reject(data.validation);
            else
                return data;
        });