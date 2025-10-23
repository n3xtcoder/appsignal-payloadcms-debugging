const { Appsignal } = require('@appsignal/nodejs')

new Appsignal({
  active: true,
  name: process.env.APPSIGNAL_NAME,
  pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY,
})
