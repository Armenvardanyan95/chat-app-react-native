export default class Http {

    _buildUrl(url: number, queryParams) {
        if (queryParams === null) return url;
        let queryString = '?';
        for (let param of Object.getOwnPropertyNames(queryParams)) {
            queryString = `${queryString}${queryParams[param]}&`;
        }
        return `${url}`
    }

    async get(url, { queryParams = null, headers } = {}) {
        const response = await fetch(this._buildUrl(url, queryParams), {headers});
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            throw new Error(data.message);
        }
    }

    async post(url: string, body: any, {queryParams = null, headers}) {
        const response = await fetch(this._buildUrl(url, queryParams), {method: 'POST', headers, body: JSON.stringify(body) });
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            throw new Error(data.message);
        }
    }

}