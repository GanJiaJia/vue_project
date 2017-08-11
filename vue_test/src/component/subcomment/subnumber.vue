<template>
    <div class="subnumberStyle">
        <div class="left" @click="subtract">-</div>
        <div class="center">{{count}}</div>
        <div class="right" @click="add">+</div>
    </div>
</template>

<style>
    .subnumberStyle {
        margin-bottom: 5px;
    }

    .left,
    .center,
    .right {
        display: inline-block;
        border: 1px solid rgba(92, 92, 92, 0.3);
        line-height: 25px;
        text-align: center;
    }

    .left,
    .right {
        width: 30px;
    }

    .center {
        width: 40px;
    }
</style>


<script>
    export default {

        data() {

            return {
                count:1
            }
        },

        created() {


        },

        methods: {
            subtract() {
                if (this.count <= 1) { return };
                this.count--;
                this.notify();

            },
            add() {
                this.count++;
                this.notify();
            },
            notify() {
                this.$emit('numChange', this.count);
                // console.log(this.count);
            },

        }
    }

</script>