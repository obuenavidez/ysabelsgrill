const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'testing'
  ? 'http://myapidomain.com'
  : 'http://localhost:3000';

export default PAYMENT_SERVER_URL;
