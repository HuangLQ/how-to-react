class MsgError extends Error {
  constructor(msg = 'Msg Error!') {
    super()
    this.message = msg
    this.stack = (new Error()).stack
    this.name = 'MsgError'
  }
}

class SysError extends Error {
  constructor(msg = 'Sys Error!') {
    super()
    this.message = msg
    this.stack = (new Error()).stack
    this.name = 'SysError'
  }
}

export {
  MsgError,
  SysError,
}
