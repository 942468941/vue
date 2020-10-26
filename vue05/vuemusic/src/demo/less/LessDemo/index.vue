<template>
    <div>
        <h1>less案例</h1>
        <div class="text"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
@color:green;
@width:100px;
@height:@width+100px;
.text{
    background: @color;
    width:@width;
    height: @height;
}
</style>