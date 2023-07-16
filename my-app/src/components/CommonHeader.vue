<template>
    <div class="header-container">
        <div class="l-content">
            <el-button @click="handleMenu" icon="el-icon-menu" size="mini" ></el-button>
            <!-- 面包屑 -->
            <span class="text">首页</span>
        </div>
        <div class="r-context">
            <el-dropdown>
            <span class="el-dropdown-link">
                <!-- 下拉菜单<i class="el-icon-arrow-down el-icon--right"></i> -->
                <img class="user" src="../assets/logo.png" alt="网络错误"/>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{}
    },
    methods:{
        handleMenu(){
            
            this.$store.commit('collapseMenu');//在这里使用事件,在另外一个地方传递数据
            console.log("点击时间");
        }
    }
}
</script>
<style lang="less" >
.header-container{
    padding:0 20px;
    background-color:#333;
    height:60px;
    line-height:60px;
    display:flex;
    justify-content: space-between;//主轴两端显示
    align-items: center;//纵轴居中显示
    .text{
        color:#fff;
        margin-left:10px;
        font-size:14x;
    }
    .r-context{
        .user{
            width:40px;
            height:40px;
            border-radius: 50%;
            vertical-align: middle;//默认基线对齐，设置列这个后就可以和span标签对齐了
        }
    }
}
</style>