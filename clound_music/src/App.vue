<template>

    <div>
        <!-- <router-view v-if="path"></router-view> -->
        <router-view> </router-view>
        
    </div>

</template>


<script>
    export default {

        data() {
            return {

            }
        },
        created() {
          
        },
        methods: {

        },
        watch :{

            // getPath (newVal,oldVal){
            //     console.log(newVal);
            // }
        }

    }
</script>