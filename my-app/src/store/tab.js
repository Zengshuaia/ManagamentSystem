//用来管理左侧菜单栏是否展开

export default{
    state:{
        isCollapse:false
    },
    mutations:{
        //这里面写修改属性的方法
        collapseMenu(state){
          state.isCollapse=!state.isCollapse
        }
    }
}