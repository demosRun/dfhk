module.exports = {
  // 项目根目录
  root: "/src",
  // 项目入口文件
  entry: "home",
  // 页面标题
  title: '页面',
  // 输出目录
  outFolder: "./dist",
  // 资源目录
  resourceFolder: "./src/resource",
  // head属性清单
  headList: [
    {
      'http-equiv': 'content-type',
      content: 'text/html; charset=UTF-8',
    },
    {
      name: 'viewport',
      content: 'width=1200, maximum-scale=0.1',
    }
  ],
  // 使用到的外部脚本清单
  scriptList: [
    {
      name: "swiper2.0",
      src: "http://tools.people.com.cn/libs/swiper/2.0/idangerous.swiper.min.js"
    }
  ],
  // 使用到的样式列表
  styleList: [
    {
      name: "main",
      src: "./src/main.css"
    },
    {
      name: "swiper2.0",
      src: "http://tools.people.com.cn/libs/swiper/2.0/idangerous.swiper.css"
    }
  ],
  // 页面清单
  pageList: [
    {
      // 是否为页面主入口
      main: true,
      isPage: true,
      name: 'home',
      src: './src/page/home.page'
    }
  ],
  // 调试模式配置
  dev: {
    // 是否监测文件改动重新打包
    watcher: {
      // 是否启用
      enable: true,
      // 忽略监控的文件或文件夹，支持正则，默认为输出目录
      ignored: './dist/*',
      // 监测深度,默认99
      depth: 99
    },
    // 输出配置
    outPut: {
      // 是否压缩css
      minifyCss: false,
      // 是否压缩js
      minifyJs: false,
      // 输出文件自动追加版本号，可以用来消除缓存
      addVersion: false
    },
    serverPort: 8000,
    // 静态文件服务
    server: true,
    // 自动重新加载
    autoReload: true,
  },
  // 编译模式配置
  build: {
    // 输出配置
    outPut: {
      // 是否压缩css
      minifyCss: true,
      // 是否压缩js
      minifyJs: true,
      // 输出文件自动追加版本号，可以用来消除缓存
      addVersion: true,
    }
  }
}