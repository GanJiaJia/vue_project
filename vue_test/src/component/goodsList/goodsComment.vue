<template>

    <div class="temp">
            <subcomment :commentId="this.$route.query.infoId"></subcomment>
    </div>
</template>

<script>
    import subcomment from '../subcomment/subcomment.vue';
    export default {
        created(){
            // this.getInfoId();
        },
        components:{
            subcomment
        },
        // methods:{
        //     getInfoId(){
        //         console.log(this.$route.query.infoId);
        //     }
        // }

    }
</script>