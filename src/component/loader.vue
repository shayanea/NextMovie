<template>
    <div id="Loader" v-if="show">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="25" viewBox="0 0 120 30" fill="#fff"><circle cx="15" cy="15" r="11.8022"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="60" cy="15" r="12.1978" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="105" cy="15" r="11.8022"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle></svg>
    </div>
</template>

<script>
export default {
    name:'loader',
    props:{
        show:{
            type : Boolean,
            required : true,
            default : false
        }
    },
    data (){
        return{

        }
    }
}
</script>

<style scope>
#Loader{
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
#Loader svg{
    width: 100px;
    height: 50px;
}
</style>