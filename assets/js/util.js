/* eslint-disable */
const isProd = process.env.NODE_ENV === 'production'

const attrsToFloat = (params) => {
  Object.keys(params).map((name) => {
    params[name] = parseFloat(params[name]) || 0
  })
  return params
}

export { isProd, attrsToFloat }
