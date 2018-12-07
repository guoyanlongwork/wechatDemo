// pages/nav/nav.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

    adData: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544186784224&di=b0ea477cd94b4b8adde50a4822727d10&imgtype=0&src=http%3A%2F%2Fupload.sortdoor.com%2F2017%2F1208%2F1512716217668.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544186784224&di=b0ea477cd94b4b8adde50a4822727d10&imgtype=0&src=http%3A%2F%2Fupload.sortdoor.com%2F2017%2F1208%2F1512716217668.jpg'],
    navData: ['全部', '理发', '足球', '篮球', '人才', '加班', '休息'],
    currentNavTab: 0,
    scrollTop: '',    //滑动的距离
    navFixed: false,  //导航是否固定
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    /** 设备信息 */
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //导航点击
  switchNav(event) {

    var cur = event.currentTarget.dataset.current;
  
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentNavTab == cur) {
      return false;
    } else {

      this.setData({
        currentNavTab: cur,
    
      })
    }
  },
  //监听滑动
  layoutScroll: function (e) {

    this.data.scrollTop = this.data.scrollTop * 1 + e.detail.deltaY * 1;
    console.log(this.data.scrollTop)
    console.log(this.data.navFixed)
    // const query = wx.createSelectorQuery();
    // query.select('.nav').boundingClientRect();
    // query.selectViewport().scrollOffset();
    // query.exec(function (res) {
     

    // });

    /** 我这里写了固定值 如果使用rpx 可用query可以动态获取其他的高度 然后修改这里值 */
    /** 获取方法参考文档 */

    /** scrollTop 在模拟器上检测不是太灵敏 可在真机上测试 基本上不会出现延迟问题 */
    var navtopHeight = 192;
  
    if (this.data.scrollTop <= -navtopHeight) {
      this.setData({
        navFixed: true
      })
    } else {
      this.setData({
        navFixed: false
      })
    }
  },
})