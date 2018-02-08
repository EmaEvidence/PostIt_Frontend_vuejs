const allConfig = {
  development: {
    apiUrl: 'http://localhost:3300/api/v1/',
  },
  production: {
    apiUrl: 'https://postaa.herokuapp.com/api/v1/',
  },
  test: {
    apiUrl: 'https://postaa.herokuapp.com/api/v1/',
  },
};

const config = allConfig[process.env.NODE_ENV];


export default config;
