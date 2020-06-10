module.exports = {
    title: '大运普货系统',
    description: '大运普货系统操作说明',
    base: '/polarjdocs/', // 设置站点根路径
    themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [
              ['/', '主页'],
              ['/quote', '询价列表'],
              ['/bookingorder', '订舱单'],
              ['/airwaybill', '提单管理'],
              ['/invoice', '账单管理'],
            ]
      },
      dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
}
