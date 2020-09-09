<template>
  <div class="player" v-if="getPlayList.length>0">
    <div class="normal-player" v-show="getFullScreen">
      <div class="background">
        <img :src="imgUrl" width="100%" height="100%" />
      </div>
      <!-- 返回按钮和歌曲信息 -->
      <div class="top">
        <div class="back" @click="toggle">
          <i class="icon-back"></i>
        </div>
        <h1 class="title">
          {{getCurrentSong.songname}}
        </h1>
        <h2 class="subtitle">
          {{getCurrentSong.singer}}
        </h2>
      </div>
      <!-- 中间播放的CD -->
      <div class="middle">
        <div class="middle-l">
          <div class="cd-wrapper">
            <div class="cd" :class="rotateCD">
              <img :src="imgUrl" class="image" alt />
            </div>
          </div>
        </div>
      </div>
      <!-- 底部的按钮 -->
      <div class="bottom">
        <div class="operators">
          <div class="icon i-left">
            <i :class="iconMode" @click="changeMode"></i>
          </div>
          <div class="icon i-left">
            <i class="icon-prev" @click="prev"></i>
          </div>
          <div class="icon i-center">
            <i :class="iconChange" @click="togglePlay"></i>
          </div>
          <div class="icon i-right">
            <i class="icon-next" @click="next"></i>
          </div>
          <div class="icon i-right">
            <i class="icon-not-favorite"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="mini-player" v-show="!getFullScreen" @click="toggle">
      <div class="icon">
        <img :src="imgUrl" width="40" height="40" />
      </div>
      <div class="text">
        <h2 class="name">
          {{getCurrentSong.songname}}
        </h2>
        <p class="desc">
          {{getCurrentSong.singer}}
        </p>
      </div>
      <div class="control">
        <i class="icon-play-mini" v-show="!getPlaying" @click.stop="togglePlay"></i>
        <i class="icon-pause-mini" v-show="getPlaying" @click.stop="togglePlay"></i>
      </div>
      <div class="control">
        <i class="icon-playlist"></i>
      </div>
    </div>
    <audio :src="getCurrentSong.url" ref="audio"></audio>
  </div>
</template>

<script>
import {mapMutations,mapState,mapGetters} from 'vuex'
import {getPlayKey} from '../../api/play'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getPlaying',
      'getFullScreen',
      'getCurrentSong',
      'getPlayList',
      'getCurrentIndex',
      'getPlayMode',
      'getOrderList'
    ]),
    imgUrl(){
      let id = this.getCurrentSong.albummid
      return `http://y.gtimg.cn/music/photo_new/T002R300x300M000${id}_1.jpg?max_age=2592000`
    },
    iconChange(){
      return this.getPlaying?"icon-pause" : "icon-play"
    },
    rotateCD(){
      return this.getPlaying ? "play" : "play pause"
    },
    iconMode(){
      return this.getPlayMode==1? "icon-sequence" : this.getPlayMode==2? "icon-loop": "icon-random"
    }
  },
  methods: {
    ...mapMutations([
      'setFullScreen',
      'setPlaying',
      'setCurrentIndex',
      'setPlayMode',
      'setPlayList'
    ]),
    toggle(){
      this.setFullScreen({
        fullScreen: !this.getFullScreen
      })
    },
    togglePlay(){
      this.setPlaying({
        playing: !this.getPlaying
      })
      if(this.getPlaying){
        this.$refs.audio.play()
      }else{
        this.$refs.audio.pause()
      }
    },
    prev(){
      // 上一首，就是当前播放歌曲的下标减一
      let index = this.getCurrentIndex // 获取当前播放的下标减一后的结果
      index--
      if(index<0){
        // 如果index为-1(当前播放的是第一首，上一首就是最后一首)
        index = this.getPlayList.length-1
      }
      let songs = this.getPlayList
      // 获取播放地址
      getPlayKey(songs[index].songmid).then(purl=>{
        purl = 'http://ws.stream.qqmusic.qq.com/'+purl
        this.$set(songs[index],'url',purl)
        this.setCurrentIndex({
          currentIndex: index
        })
      }).catch(err=>{
        this.setCurrentIndex({
          currentIndex: index
        })
        alert('获取资源失败')
        // 没找到资源，自动调用上一首
        this.prev()
      })
    },
    next(){
      let index = this.getCurrentIndex // 获取当前播放的下标加1后的结果
      index++
      if(index>=this.getPlayList.length-1){
        // 如果index的值为数组的下标最大值，则表示当前是最后一首歌,下标重置为0
        index = 0
      }
      let songs = this.getPlayList
      // 获取播放地址
      getPlayKey(songs[index].songmid).then(purl=>{
        purl = 'http://ws.stream.qqmusic.qq.com/'+purl
        this.$set(songs[index],'url',purl)
        this.setCurrentIndex({
          currentIndex: index
        })
      }).catch(err=>{
        this.setCurrentIndex({
          currentIndex: index
        })
        alert('获取资源失败')
        // 没找到资源，自动调用上一首
        this.next()
      })
    },
    changeMode(){
      // 获取当前模式(顺序-1，循环-2，随机-0)
      let mode = this.getPlayMode
      mode = (mode+1) % 3
      // 将mode的值重新设置进playMode中
      this.setPlayMode({
        playMode: mode
      })
      let list = [];
      // 判断播放模式
      if(mode==1){ // 顺序播放
        list = this.getOrderList
        console.log('1',list)
      }else{ // 随机播放
        // 将播放顺序打乱
        list = this._randomList(this.getOrderList)
        console.log('2',list)
      }
      // 重置下标
      this._resetCurrentIndex(list)
      // 将排序后的歌曲列表放入播放列表中
      this.setPlayList({
        playList: list
      })
    },
    _randomList(list){
      // 该方法用于将顺序的歌曲列表打乱
      let songs = [...list]; // 复制一份新的数组
      // 打乱顺序
      for(let i=0;i<songs.length;i++){
        let r = Math.floor(Math.random()*songs.length)
        let temp = songs[i]
        songs[i] = songs[r]
        songs[r] = temp
      }
      return songs
    },
    _resetCurrentIndex(list){
      // 重置当前播放歌曲的下标
      // 从list中找到当前正在播放的歌曲
      console.log(list)
      let song = this.getCurrentSong
      let index = list.findIndex(val=>{
        // console.log(`${val.songmid}==${song.songmid}`)
        return val.songmid==song.songmid
      })
      // 设置当前播放歌曲的新的下标
      this.setCurrentIndex({
        currentIndex: index
      })
    }
  },
  watch: {
    getCurrentSong(){
      // 监听当前歌曲是否发生变化，当发生变化时，调用，播放
      this.$nextTick(()=>{
        this.$refs.audio.volume = 0.2
        this.$refs.audio.play()
        this.setPlaying({
          playing: true
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus" >
@import '~@common/stylus/variable'
@import '~@common/stylus/mixin'
.player
  .normal-player
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 150
    background $color-background
    .background
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      z-index -1
      opacity 0.9
      filter blur(40px)
    .top
      position relative
      margin-bottom 25px
      .back
        position absolute
        top 0
        left 6px
        z-index 50
        .icon-back
          display block
          padding 9px
          font-size $font-size-large-x
          color $color-theme
          transform rotate(-90deg)
      .title
        width 70%
        margin 0 auto
        line-height 40px
        text-align center
        no-wrap()
        font-size $font-size-large
        color #f2f2f2
      .subtitle
        line-height 20px
        text-align center
        font-size $font-size-medium
        color #f2f2f2
    .middle
      position fixed
      width 100%
      top 80px
      bottom 170px
      white-space nowrap
      font-size 0
      .middle-l
        display inline-block
        vertical-align top
        position relative
        width 100%
        height 0
        padding-top 80%
        .cd-wrapper
          position absolute
          left 10%
          top 0
          width 80%
          height 100%
          .cd
            width 100%
            height 100%
            box-sizing border-box
            border 10px solid rgba(255, 255, 255, 0.1)
            border-radius 50%
            &.play
              animation rotate 20s linear infinite
            &.pause
              animation-play-state paused
            .image
              position absolute
              left 0
              top 0
              width 100%
              height 100%
              border-radius 50%
        .playing-lyric-wrapper
          width 80%
          margin 30px auto 0 auto
          overflow hidden
          text-align center
          .playing-lyric
            height 20px
            line-height 20px
            font-size $font-size-medium
            color #f9f9f9
      .middle-r
        display inline-block
        vertical-align top
        width 100%
        height 100%
        overflow hidden
        .lyric-wrapper
          width 80%
          margin 0 auto
          overflow hidden
          text-align center
          .text
            line-height 32px
            color rgba(250, 250, 250, 0.7)
            font-size $font-size-medium-x
            &.current
              color #fff
    .bottom
      position absolute
      bottom 20px
      width 100%
      .dot-wrapper
        text-align center
        font-size 0
        .dot
          display inline-block
          vertical-align middle
          margin 0 4px
          width 8px
          height 8px
          border-radius 50%
          background $color-text-l
          &.active
            width 20px
            border-radius 5px
            background $color-text-ll
      .progress-wrapper
        display flex
        align-items center
        width 86%
        margin 0px auto
        padding 10px 0
        .time
          color #f2f2f2
          font-size $font-size-small
          flex 0 0 30px
          line-height 30px
          width 30px
          &.time-l
            text-align left
          &.time-r
            text-align right
        .progress-bar-wrapper
          flex 1
          margin 0 10px
      .operators
        display flex
        align-items center
        .icon
          flex 1
          color $color-theme
          &.disable
            color $color-theme-d
          i
            font-size 30px
        .i-left
          text-align right
        .i-center
          padding 0 20px
          text-align center
          i
            font-size 40px
        .i-right
          text-align left
        .icon-favorite
          color $color-sub-theme
    &.normal-enter-active, &.normal-leave-active
      transition all 0.4s
      .top, .bottom
        transition all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
    &.normal-enter, &.normal-leave-to
      opacity 0
      .top
        transform translate3d(0, -100px, 0)
      .bottom
        transform translate3d(0, 100px, 0)
  .mini-player
    display flex
    align-items center
    position fixed
    left 0
    bottom 0
    z-index 180
    width 100%
    height 60px
    background #fff
    box-shadow 0 -5px 10px rgba(0, 0, 0, 0.1)
    &.mini-enter-active, &.mini-leave-active
      transition all 0.4s
    &.mini-enter, &.mini-leave-to
      opacity 0
    .icon
      flex 0 0 40px
      width 40px
      padding 0 10px 0 20px
      img
        border-radius 50%
        &.play
          animation rotate 10s linear infinite
        &.pause
          animation-play-state paused
    .text
      display flex
      flex-direction column
      justify-content center
      flex 1
      line-height 20px
      overflow hidden
      .name
        margin-bottom 2px
        no-wrap()
        font-size $font-size-medium
        color $color-text
      .desc
        no-wrap()
        font-size $font-size-small
        color $color-text-d
    .control
      flex 0 0 30px
      width 30px
      padding 0 10px
      .icon-play-mini, .icon-pause-mini, .icon-playlist
        font-size 30px
        color #31c27c
      .icon-mini
        font-size 32px
        position absolute
        left 0
        top 0
@keyframes rotate
  0%
    transform rotate(0)
  100%
    transform rotate(360deg)
</style>