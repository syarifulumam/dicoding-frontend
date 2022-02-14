import API_ENDPOINT from '../globals/api-endpoint';
 
class RestoranDbSource {
  static async listRestoran() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
 
  static async detailRestoran(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
 
export default RestoranDbSource;