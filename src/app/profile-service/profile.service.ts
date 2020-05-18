import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = '';
  private clientsecret = 'c76944cd4951188a1c59ab4cddd636384e9f27bd';

  constructor(private http: HttpClient) {
    console.log("service is now ready");
    this.username = "Nelvinom";
  }
  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);

  }
  updateProfile(username: string) {
    this.username = username;
  }
}
