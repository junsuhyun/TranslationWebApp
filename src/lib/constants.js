export default {
  apiBaseUrl: process.env.VUE_APP_API_BASE_URL || 'https://jhiparkcaptionapi.azurewebsites.net',
  region: process.env.VUE_APP_COGNITIVE_API_REGION || 'westus2',
  title: process.env.VUE_APP_TITLE || 'CaptionR'
}