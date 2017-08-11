<template>
    <div>
        <!-- 提交评论的html代码-->
        <div class="postCommentStyle temp">
            <h4>提交评论</h4>
            <div class="submitCommentStyle">
                <!-- ref属性方便我们操作虚拟DOM -->
                <textarea ref="textAreaRef" rows="5" class="submitTextAreaStyle" placeholder="请输入要提交的内容"></textarea>

                <mt-button type="primary" @click="postComment" size="large">提交评论</mt-button>
            </div>
        </div>


        <!--  评论列表 -->
        <div class="commentListStyle">
            <h4>评论列表</h4>
            <div v-for="item in commentList" :key="new Date().getTime()" class="commentItem">
                <h5>
                    {{item.content}}
                </h5>
                <p class="commentUserAndTime">
                    <span class="commentUser">{{item.user_name}}</span>
                    <span class="commentTime">{{item.add_time | dateFm}}</span>
                </p>
            </div>
            <mt-button class="loadmore" @click="loadMore" plain size="large" type="danger">加载更多</mt-button>
        </div>
    </div>
</template>

<style scoped>
    h4 {
        padding: 5px 5px 10px 5px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.2);
    }

    .submitCommentStyle,
    .commentListStyle {
        padding: 5px;
    }

    .commentItem {
        padding: 5px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.2);
        height: 70px;
        overflow-y: auto;
    }

    h5 {
        font-size: 16px;
        color: black;
    }

    .commentUserAndTime {
        margin-top: 15px;
        color: #0094ff;
    }

    .commentUser {
        float: left;
        width: 50%;
    }

    .commentTime {
        float: right;
    }

    .loadmore {
        margin-top: 20px;
        margin-bottom: 10px;
    }
</style>
<script>
    import { Toast } from 'mint-ui';
    import common from '../common/common.js'
    export default {

        data() {

            return {

                PageIndex: 1,
                commentList: []
            }
        },

        created() {

            this.getsubComment();
        },

        props: ['commentId'],
        // 通过props接收父组件传递过来的参数



        methods: {

            getsubComment() {
                if (this.commentId == null || this.commentId == undefined) { return }
                const url = common.apihost + "/api/getcomments/" + this.commentId + "?pageindex=" + this.PageIndex;
                // console.log(this.commentId)
                this.$http.get(url).then((res) => {

                    if (res.body.message.length <= 0) {

                        Toast({
                            message: '没有数据了，已经到底了',
                            duration: 2000
                        });
                        return;
                    }
                    // console.log(res.body.message.length);
                    // console.log(res);
                    // 当前页面是第一页就赋值给数组，不是第一页就合并数组
                    // this.commentList = this.PageIndex == 1 ? res.body.message : this.commentList.concat(res.body.message);
                    if (this.PageIndex == 1) {

                        this.commentList = res.body.message;

                        if (res.body.message.length <= 0) {

                            Toast({
                                message: '还没有评论噢！',
                                duration: 2000
                            });

                        }


                    } else {

                        this.commentList = this.commentList.concat(res.body.message);
                    }


                }, (error) => {
                    console.log(error);
                })
            },

            loadMore() {
                this.PageIndex++;
                this.getsubComment();

            },
            postComment() {

                const value = this.$refs.textAreaRef.value;
                // console.log(value);
                if (value == "") {
                    Toast({
                        message: '请输入评论内容',
                        duration: 2000
                    });
                    return;
                }
                const url = common.apihost + "/api/postcomment/" + this.commentId
                this.$http.post(url, { content: value }, { emulateJSON: true }).then((res) => {
                    Toast({
                        message: '评论成功',
                        duration: 2000
                    });
                    this.$refs.textAreaRef.value = "";
                    this.PageIndex = 1;
                    this.getsubComment();
                }, (error) => {
                    console.log(error);
                })

            }

        }

    }

</script>