const api = {
  development: 'http://localhost:3333',
  production: '...some path'
}

const request = (uri, method, body) => fetch(`${api[process.env.NODE_ENV]}${uri}`, {
  method,
  body: body && JSON.stringify(body),
  mode: 'same-origin',
  headers: new Headers({
    Accept: 'application/json',
    'Access-Token': localStorage['casec-token'] || '',
    'Content-Type': 'application/json'
  })
}).then(res => res.json())

export default request

