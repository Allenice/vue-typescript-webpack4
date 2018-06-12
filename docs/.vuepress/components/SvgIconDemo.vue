<template>
    <div class="icon-list">
        <div class="icon" v-for="v in iconList">
            <icon :name="v" original></icon>
            <p class="icon-name">{{ v }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "base/base";

    .icon-list {
        display: flex;
        flex-wrap: wrap;
    }

    .icon {
        width: 100px;
        margin: 10px 5px;
        border-radius: 4px;
        text-align: center;

        /deep/ {
            .svg-icon {
                width: 80px;
                height: 80px;
            }
        }
    }

    .icon-name {
        line-height: 24px;
        font-size: 16px;
    }
</style>
<script lang="ts">
    import 'components/icons'

    import Vue from 'vue'
    import { Component } from 'vue-property-decorator'
    import { icons } from 'vue-svgicon'

    @Component({})
    export default class SvgIconDemo extends Vue {
        protected get iconList(): string[] {
            if (icons) {
                return Object.keys(icons)
            }
            return []
        }
    }
</script>
