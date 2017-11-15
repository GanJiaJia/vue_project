<template>
    <div ref="wrapper" class="better-scroll-root">
    
        <!--该节点需要定位，内容以此节点的盒模型为基础滚动。另外，该节点的背景色配合上拉加载、下拉刷新的UI，正常情况下不可作它用。-->
    
        <div class="content-bg better-scroll-container">
    
            <!--如果需要调滚动内容的背景色，则改该节点的背景色-->
    
            <div>
    
                <!--不太需要，待优化-->
    
                <div v-if="pulldown" class="pulldown-tip">
    
                    <i class="pull-icon indexicon icon-pull-down" :class="[pulldownTip.rotate]"></i>
    
                    <span class="tip-content">{{pulldownTip.text}}</span>
    
                </div>
    
                <div v-show="loadingStatus.showIcon || loadingStatus.status" class="loading-pos">
    
                    <div v-show="loadingStatus.showIcon" class="loading-container">
    
                        <div class="cube">
    
                            <div class="side side1"></div>
    
                            <div class="side side2"></div>
    
                            <div class="side side3"></div>
    
                            <div class="side side4"></div>
    
                            <div class="side side5"></div>
    
                            <div class="side side6"></div>
    
                        </div>
    
                    </div>
    
                    <span class="loading-connecting">{{loadingStatus.status}}</span>
    
                </div>
    
            </div>
    
            <slot></slot>
    
        </div>
    
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    
    
    
    export default {
    
        props: {
    
            /**
    
             * 1 滚动的时候会派发scroll事件，会截流。
    
             * 2 滚动的时候实时派发scroll事件，不会截流。
    
             * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
    
             */
    
            probeType: {
    
                type: Number,
    
                default: 1
    
            },
    
            /**
    
             * 点击列表是否派发click事件
    
             */
    
            click: {
    
                type: Boolean,
    
                default: true
    
            },
    
            /**
    
             * 是否开启横向滚动
    
             */
    
            scrollX: {
    
                type: Boolean,
    
                default: false
    
            },
    
            /**
    
             * 是否派发滚动事件
    
             */
    
            listenScroll: {
    
                type: Boolean,
    
                default: false
    
            },
    
            /**
    
             * 列表的数据
    
             */
    
            data: {
    
                type: Array,
    
                default: null
    
            },
    
            /**
    
             * 是否派发滚动到底部的事件，用于上拉加载
    
             */
    
            pullup: {
    
                type: Boolean,
    
                default: false
    
            },
    
            /**
    
             * 是否派发顶部下拉的事件，用于下拉刷新
    
             */
    
            pulldown: {
    
                type: Boolean,
    
                default: false
    
            },
    
            /**
    
             * 是否派发列表滚动开始的事件
    
             */
    
            beforeScroll: {
    
                type: Boolean,
    
                default: false
    
            },
    
            /**
    
             * 当数据更新后，刷新scroll的延时。
    
             */
    
            refreshDelay: {
    
                type: Number,
    
                default: 20
    
            },
    
            /**
    
             * 如果启用loading交互，传递loading的状态
    
             * isShow: false
    
             * showIcon: false,    // 是否显示loading的icon
    
             * status: ''  // '正在加载...', '刷新成功', '刷新失败', ''
    
             */
    
            loadingStatus: {
    
                type: Object,
    
                default: function() {
    
                    return {
    
                        showIcon: false,
    
                        status: ''
    
                    };
    
                }
    
            },
    
            /**
    
             * 是否启用下拉刷新的交互
    
             */
    
            pulldownUI: {
    
                type: Boolean,
    
                default: false
    
            },
    
            /**
    
             * 是否启用上拉加载的交互
    
             */
    
            pullupUI: {
    
                type: Boolean,
    
                default: false
    
            }
    
        },
    
        data() {
    
            return {
    
                loadingConnecting: false,
    
                pulldownTip: {
    
                    text: '下拉刷新', // 松开立即刷新
    
                    rotate: '' // icon-rotate
    
                },
    
    
    
            };
    
        },
    
        mounted() {
    
            // 保证在DOM渲染完毕后初始化better-scroll
    
            setTimeout(() => {
    
                this._initScroll()
    
            }, 20)
    
        },
    
        methods: {
    
            _initScroll() {
    
                if (!this.$refs.wrapper) {
    
                    return;
    
                }
    
                // better-scroll的初始化
    
                this.scroll = new BScroll(this.$refs.wrapper, {
    
                    probeType: this.probeType,
    
                    click: this.click,
    
                    scrollX: this.scrollX
    
                });
    
    
    
                // 是否派发滚动事件
    
                if (this.listenScroll || this.pulldown || this.pullup) {
    
                    let me = this;
    
                    this.scroll.on('scroll', (pos) => {
    
                        if (this.listenScroll) {
    
                            me.$emit('scroll', pos);
    
                        }
    
    
    
                        if (this.pulldown) {
    
                            // 下拉动作
    
                            if (pos.y > 50) {
    
                                this.pulldownTip = {
    
                                    text: '松开立即刷新',
    
                                    rotate: 'icon-rotate'
    
                                }
    
                            } else {
    
                                this.pulldownTip = {
    
                                    text: '下拉刷新', // 松开立即刷新
    
                                    rotate: '' // icon-rotate
    
                                }
    
                            }
    
                        }
    
    
    
                        if (this.pullup) {
    
    
    
                        }
    
                    })
    
                }
    
    
    
                // 是否派发滚动到底部事件，用于上拉加载
    
                if (this.pullup) {
    
                    this.scroll.on('scrollEnd', () => {
    
                        console.log('scrollEnd');
    
                        console.log(this.scroll);
    
                        // 滚动到底部
    
                        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
    
                            this.$emit('scrollToEnd');
    
                        }
    
                    });
    
                }
    
    
    
                // 是否派发顶部下拉事件，用于下拉刷新
    
                if (this.pulldown) {
    
                    this.scroll.on('touchend', (pos) => {
    
                        // 下拉动作
    
                        if (pos.y > 50) {
    
                            setTimeout(() => {
    
                                // 重置提示信息
    
                                this.pulldownTip = {
    
                                    text: '下拉刷新', // 松开立即刷新
    
                                    rotate: '' // icon-rotate
    
                                }
    
                            }, 600);
    
                            this.$emit('pulldown');
    
                        }
    
                    });
    
                }
    
    
    
                // 是否派发列表滚动开始的事件
    
                if (this.beforeScroll) {
    
                    this.scroll.on('beforeScrollStart', () => {
    
                        this.$emit('beforeScroll')
    
                    });
    
                }
    
            },
    
            disable() {
    
                // 代理better-scroll的disable方法
    
                this.scroll && this.scroll.disable();
    
            },
    
            enable() {
    
                // 代理better-scroll的enable方法
    
                this.scroll && this.scroll.enable();
    
            },
    
            refresh() {
    
                // 代理better-scroll的refresh方法
    
                this.scroll && this.scroll.refresh();
    
            },
    
            scrollTo() {
    
                // 代理better-scroll的scrollTo方法
    
                this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    
            },
    
            scrollToElement() {
    
                // 代理better-scroll的scrollToElement方法
    
                this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    
            }
    
        },
    
        watch: {
    
            // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    
            data() {
    
                setTimeout(() => {
    
                    this.refresh();
    
                }, this.refreshDelay);
    
            }
    
        }
    
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 // $cube-size: 10px; // 项目中用了scss，没用的话，替换掉样式中的变量即可
 
.better-scroll-root {
    background-color: rgba(7, 17, 27, 0.7);
    .loading-pos, .pulldown-tip {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 35px;
        color: #fcfcfc;
        text-align: center;
        z-index: 2000;
    }
    .loading-pos {
        background-color: rgba(7, 17, 27, 0.7);
    }
    .pulldown-tip {
        top: -50px;
        height: 50px;
        line-height: 50px;
        z-index: 1;
    }
    .pull-icon {
        position: absolute;
        top: 0;
        left: 30%;
        color: #a5a1a1;
        font-size: 1.5em;
        transition: all 0.15s ease-in-out;
    }
    .pull-icon.icon-rotate {
        transform:rotate(180deg);
    }
    
    .loading-container {
        position: absolute;
        height: 10px;
        width: 10px;
        left: 35%;
        top: 50%;
        transform: translate(-50%, -50%);
        perspective: 40px;
    }
    .loading-connecting {
        line-height: 35px;
    }
    .cube{
        height:10px;
        width:10px;
        transform-origin:50% 50%;
        transform-style:preserve-3d;
        animation:rotate 3s infinite ease-in-out;
    }
    .side{
        position:absolute;
        height:10px;
        width:10px;
        border-radius:50%;
    }
    .side1{
        background: #4bc393;
        transform:translateZ(10px);
    }
    .side2{
        background:#FF884D;
        transform:rotateY(90deg) translateZ(10px);
    }
    .side3{
        background:#32526E;
        transform:rotateY(180deg) translateZ(10px);
    }
    .side4{
        background: #c53fa3;
        transform:rotateY(-90deg) translateZ(10px);
    }
    .side5{
        background:#FFCC5C;
        transform:rotateX(90deg) translateZ(10px);
    }
    .side6{
        background:#FF6B57;
        transform:rotateX(-90deg) translateZ(10px);
    }
    
    @keyframes rotate{
        0%{
            transform:rotateX(0deg) rotateY(0deg);
        }
        50%{
            transform:rotateX(360deg) rotateY(0deg);
        }
        100%{
            transform:rotateX(360deg) rotateY(360deg);
        }
    }
}
</style>