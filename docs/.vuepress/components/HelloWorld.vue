<template>
    <div>
        <h1>Hello World</h1>
        <hello-world name="Allenice"></hello-world>
    </div>
</template>
<script lang="ts">
    import HelloWorld from 'components/HelloWorld'

    export default {
        components: {
            HelloWorld
        },
        mounted() {
            console.log(this)
        }
    }
</script>
<style lang="scss">
    div {
        h1 {
            color: red;
        }
    }
</style>
