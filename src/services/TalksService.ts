import API from '../config/API'

export class TalksService {
  static getData() {
    return fetch(`${API.serverURL}/api/talks/`).then(response => response.json())
  }
}
