class ApiError extends Error {
  constructor(
    statuscode,
    message = "something went worng" ,
    errors = [],
    statck = "",
  ){
    super(message)
    this.statuscode = statuscode
    this.data = null
    this.message = message
    this.statck = statck
    this.errors = errors

    if(statck){
      this.statck = statck
    }else{
      Error.stackTraceLimit(this,this.constructor)
    }

  }
}


export {ApiError}

