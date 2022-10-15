class Api {
  constructor(setting) { 
    this._address = setting.baseUrl; 
    this._headers = setting.headers; 
}

_getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
}
  
getUserInfo() { 
  return fetch(`${this._address}/users/me`, {
      method: "GET", 
      headers: this._headers 
    })
      .then(res => this._getResponseData(res));
}
}

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-50',
  headers: {
    authorization: "5d18e568-66bc-4809-86d6-8fc39fab9075",
    "content-type": "application/json"
  }
});

export default api;