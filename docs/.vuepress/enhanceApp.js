import touch from './public/js/vue-touch'
import dir from './public/js/directive'
import {zh_tran} from './public/js/zh'
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
  }) => {
    dir.derection.forEach((el)=>{
      if(dir[el]){
        Vue.directive(el,dir[el]());
      }else{
        Vue.directive(el,dir.touchFn(touch.swipe,el));
      }
    })
    Vue.filter('trans',value=>{
      return zh_tran(value, localStorage.getItem('lang'));
    })
    console.log('router',router.options)
  }