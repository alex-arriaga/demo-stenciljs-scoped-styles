import API from '../config/API'

export default class ImageUtils {
  static fixImageURL(filePath) {
    return `${API.serverImagesURL}${filePath}`
  }
}
