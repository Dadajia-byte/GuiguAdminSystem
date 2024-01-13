// 登录接口需要携带的ts的类型
export interface loginForm {
  username: string
  password: string
}

// 登录接口返回的ts的类型
interface dateType {
  token: string
}

export interface loginResponseDate {
  code: number
  date: dateType
}

// 定义服务器返回用户信息相关的数据类型
interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface user {
  checkUser: userInfo
}

export interface userResponseDate {
  code: number
  date: user
}