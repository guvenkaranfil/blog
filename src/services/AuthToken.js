import jwtDecode from "jwt-decode";

import Cookie from "js-cookie";
import Router from "next/router";

const TOKEN_STORAGE_KEY = "myApp.authToken";

export class AuthToken {
  constructor(token) {
    // we are going to default to an expired decodedToken
    this.decodedToken = { email: "", exp: 0 };

    // then try and decode the jwt using jwt-decode
    try {
      if (token) this.decodedToken = jwtDecode(token);
    } catch (e) {}
  }

  static async storeToken(token) {
    Cookie.set(TOKEN_STORAGE_KEY, token);
    await Router.push("/admin/adminposts");
  }

  get authorizationString() {
    return `Bearer ${this.token}`;
  }

  get expiresAt() {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired() {
    return new Date() > this.expiresAt;
  }

  get isValid() {
    return !this.isExpired;
  }
}
