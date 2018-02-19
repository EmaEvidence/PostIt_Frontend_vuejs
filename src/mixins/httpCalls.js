import Vue from 'vue';

const addTokenToHeader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    Vue.http.interceptors.push((request, next) => {
      request.headers.set('Authorization', token);
      request.headers.set('Accept', 'application/json');
      next();
    });
  }
};

export default addTokenToHeader;
