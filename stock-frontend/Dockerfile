
# 用 Node.js 18 构建前端
FROM node:18 AS build

# 设置容器内工作目录
WORKDIR /app

# 把本地代码拷贝到容器 /app
COPY . .

# 安装依赖并打包 React 应用
RUN npm install && npm run build

# 用 Nginx 做 Web Server
FROM nginx:alpine

# 拷贝打包好的文件
COPY --from=build /app/build /usr/share/nginx/html