import {observable} from 'mobx'
import api from './api'

class AuthStore {
  @observable auth = {
    isFetching: false,
    authState: false,
    token: '',
    result: null,
  };

  constructor() {
  }

  login(body) {
    this.auth.isFetching = true;
    api.post('/api/login', body).then((r) => {
      if(r.ok) {
        this.auth.authState = true;
        this.auth.token = r.data;
      }
      this.auth.isFetching = false;
    })
  }
}

export default new AuthStore;
