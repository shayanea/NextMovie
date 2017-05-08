<template>
    <div id="Filter">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="459px" height="459px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
            <g id="filter">
                <path d="M178.5,382.5h102v-51h-102V382.5z M0,76.5v51h459v-51H0z M76.5,255h306v-51h-306V255z" style="fill: rgba(255, 255, 255, 0.8);"></path>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name:'filterbtn',
    data() {
        return {

        }
    }
}
</script>

<style>
#Filter svg {
    position: absolute;
    right: 10px;
    top: 0;
    height: 20px;
    width: 20px;
}
</style>