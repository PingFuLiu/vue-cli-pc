<template>
    <div class="main">
        <div class='wrap login'>
            <h1>{{ msg }}</h1>
            <div class="logo">
                <img src='../../images/logo.png' alt=''>
            </div>
            <a href="javascript:;" @click='toIndex'>跳转首页</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            msg: '这是登陆页',
        }
    },
    methods: {
        toIndex(){
            this.$router.push({path: '/index'})
        }
    }
}
</script>

<style scoped lang='scss'>
.main{
    .login{
        h1{
            color: blue;
            font-size: 24px;
            text-align: center;
        }
        .logo{
            display: flex;
            justify-content: center;
        }
        a{
            color: green;
            font-size: 24px;
            display: block;
            text-align: center;
        }
    }
}
</style>
