require('dotenv').config()

const { Appsignal } = require('@appsignal/nodejs')

new Appsignal({
  disableDefaultInstrumentations: [
    // Add the following line inside the list
    '@opentelemetry/instrumentation-http',
  ],
  active: true,
  name: process.env.APPSIGNAL_APP_NAME,
  pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY,
})
