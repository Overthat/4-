const app = getApp()

Page({

  data: {
    show: false,
    duration: 300,
    position: 'right',
    round: false,
    overlay: true,
    customStyle: '',
    overlayStyle: '',

    time:null
  },
  onLoad: function () {
 
  },

  touch:function(){
    var id = e.detail.value;
  },

  onShow() {
   
  },

  popup(e) {
    const position = e.currentTarget.dataset.position
    let customStyle = ''
    let duration = this.data.duration
    switch(position) {
      case 'top':
      case 'bottom': 
        customStyle = 'height: 30%;'
        break
      case 'right':
        break
    }
    this.setData({
      position,
      show: true,
      customStyle,
      duration
    })
  },

  changeRound() {
    this.setData({round: !this.data.round})
  },

  changeOverlay() {
    this.setData({overlay: !this.data.overlay, show: true})
  },

  changeOverlayStyle(e) {
    let overlayStyle = ''
    const type = e.currentTarget.dataset.type
    switch(type) {
      case 'black':
        overlayStyle = 'background-color: rgba(0, 0, 0, 0.7)'
        break
      case 'white':
        overlayStyle = 'background-color: rgba(255, 255, 255, 0.7)'
        break
      case 'blur':
        overlayStyle = 'background-color: rgba(0, 0, 0, 0.7); filter: blur(4px);'
    }
    this.setData({overlayStyle, show: true})

  },

  exit() {
    this.setData({show: false})
    // wx.navigateBack()
  },

  goTo(e) {
    wx.navigateTo({url: `../shareElement/index`})
  },

  onBeforeEnter(res) {
    console.log(res)
  },
  onEnter(res) {
    console.log(res)
  },
  onAfterEnter(res) {
    console.log(res)
  },
  onBeforeLeave(res) {
    console.log(res)
  },
  onLeave(res) {
    console.log(res)
  },
  onAfterLeave(res) {
    console.log(res)
  },

  onClickOverlay(res) {
    console.log(res)
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time:e.detail.value
    })
  },
  formSubmit(e) {

    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.setStorage({  key: "formData",  data: e.detail.value })
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },

})
