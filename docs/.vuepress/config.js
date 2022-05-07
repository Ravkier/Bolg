module.exports = {
    title: '洛风的全栈之路',
    description: '洛风的全栈之路',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '个人生涯', link: '/career/' },
            { 
              text: '计算机基础', 
              link: '/accumulationBasics/'
            },
            { text: 'github', link: 'https://github.com/Ravkier/Blog',  target:'_blank' },
          ],
          lastUpdated: '最后更新',
          sidebar: {
            '/accumulationBasics/': [
              'processes-and-threads'
            ]
        }
    }
  }