export default {
  env: process.env.NODE_ENV,
  api: process.env.NODE_ENV === 'development' ? '/api' : 'http://gabsurita.pythonanywhere.com'
}
