import axios, { AxiosResponse } from "axios";

import isNode from "./isNode";

const instance = axios.create({
  timeout: 10000,
  baseURL: "/api"
});

export interface IHttpCode {
  [key: number]: string;
}

export interface IResponseStatus {
  code: number;
  data: unknown;
  msg: string | null;
}

export const httpCode: IHttpCode = {
  //这里我简单列出一些常见的http状态码信息，可以自己去调整配置
  400: "请求参数错误",
  401: "权限不足, 请重新登录",
  403: "服务器拒绝本次访问",
  404: "请求资源未找到",
  500: "内部服务器错误",
  501: "服务器不支持该请求中使用的方法",
  502: "网关错误",
  504: "网关超时"
};

/** 添加请求拦截器 **/
instance.interceptors.request.use(
  config => {
    config.headers["token"] = sessionStorage.getItem("token") || "";

    if (config.method === "get") {
      // 添加时间戳参数，防止浏览器（IE）对get请求的缓存
      config.params = {
        ...config.params,
        t: new Date().getTime()
      };
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

/** 添加响应拦截器  **/
instance.interceptors.response.use(
  response => {
    if (response.data.status >= 200 && response.data.status < 300) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject({
        code: response.data.status,
        data: response.data.data,
        msg: response.data.message
      });
    }
  },
  error => {
    if (error.response) {
      // 错误信息
      const tips =
        error.response.status in httpCode
          ? httpCode[error.response.status]
          : error.response.data.message;

      if (error.response.status === 401 && !isNode) {
        location.href = "/login";
      }
      return Promise.reject({
        code: error.response.status,
        data: null,
        msg: tips
      });
    } else {
      return Promise.reject({
        code: -1,
        data: null,
        msg: "请求超时, 请刷新重试"
      });
    }
  }
);

export default instance;
