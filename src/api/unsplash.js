import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e0cf7f132d1ad66df771df9f4ff62a5be8d123f56ec142dad5ca3afb70f1e98c"
  }
});
