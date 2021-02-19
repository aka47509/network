const Logo = require("../assets/logo-tm.png");

const API = process.env.NODE_ENV === "production" ? "" : "/api";

const config = {
  name: "PMS系统",
  footerText: "Copyright©1998-2021 Tencent. All Rights Reserved.",
  logo: Logo,
  icon: "/favicon.ico",
  API,
  openPages: ["/login", "/404", "/401"], // 全屏页面
  noLoginList: ["#/login"]
};

export default config;
