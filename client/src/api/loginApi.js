import client from './apiClient';

export default class LoginApi {
  static login(credentials) {
    client.post('sessions', { credentials });
  }
  static logout() {
    client.delete('sessions');
  }
}
