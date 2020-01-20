export default (statusCode: Number, payload) => {
    //defining body of the response
    const body = {
      code: statusCode,
      err: isError(statusCode),
      data: payload
    }
    
    return body
  }
  
const isError = (code) => {
    return (code >= 200 && code <= 299) ? false : true
}
  