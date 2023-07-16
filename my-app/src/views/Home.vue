<template>
   <el-row>
        <el-col :span="8">
            <el-card class="box-card">
                    <div class="user">
                        <img src="../assets/logo.png" alt="网络异常"/>
                            <div class="userinfo">
                            <p class="name">Admin</p>
                            <p class="access">超级管理员</p>
                            </div>
                    </div>
                   <div class="user-info">
                    <p>上次登录时间:<span>2023-7-16</span></p>
                    <p>上次登录地点:<span>深圳</span></p>
                   </div>
            </el-card>
        </el-col>
  <el-col :span="16"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
</template>
<script>
export default{
    data(){
        return{
            
        }
    }
}
</script>
<style lang="less" scoped>
.user{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
    img{
        width:150px;
        margin:0px 50px;
        height:150px;
    }
    .userinfo{
        .name{
            font-size:32px;
            margin-bottom: 10px;
        }
        .access{
            color:#999999;
        }
    }
}
.user-info{
    p{
        color:#999999;
        margin-top:10px;
        span{
        margin-left:50px;
        }
    }
  
}
</style>