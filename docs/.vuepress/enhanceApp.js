import touch from './public/js/vue-touch'
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
  }) => {
    Vue.directive("swipeleft",{
      bind:function(el,binding){
        new touch.swipe(el,binding,"swipeleft");
      }
    });
    Vue.directive("swiperight",{
      bind:function(el,binding){
        new touch.swipe(el,binding,"swiperight");
      }
    });
    Vue.directive("swipedown",{
      bind:function(el,binding){
        new touch.swipe(el,binding,"swipedown");
      }
    });
    Vue.directive("swipeup",{
      bind:function(el,binding){
        new touch.swipe(el,binding,"swipeup");
      }
    });
    // let hello = {
    //   path: '/hello',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // };
    // Object.assign(router,{
    //   routes:[
    //     hello
    //   ]
    // });
    // router = router.concat(hello);
    // router.options.routes.push(hello)
    console.log('router',router.options,'siteData',siteData)
  }