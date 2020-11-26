<template>
  <div>
    <div class="background-color position-relative overflow-hidden">
    <div class="top-circle"></div>
    <div class="sec-circle"></div>
    <div class="third-circle"></div>
    <div class="fourth-circle"></div>
    <div class="fifth-circle"></div>
    <div class="container mb-4">
      <div class="row justify-content-center">
        <div class="pages col-11 bg-white overflow-hidden">
          <div class="ok d-flex flex-column justify-content-center align-items-center mb-3">
            <img class="white mt-5 mb-5" :src="book" alt="">
            <p class="white mb-4">完成訂房</p>
          </div>
          <div class="d-flex justify-content-center align-items-center mb-4">
            <img class="finishimg mb-2" :src="roomInformation.imageUrl[0]" alt="" v-if="roomInformation.imageUrl">
          </div>
          <div class="mb-5">
            <p class="mb-3">{{ roomInformation.name }}</p>
            <div class="d-flex justify-content-between">
              <p class="second-color">{{ roomInformation.normalDayPrice }}/每晚</p>
              <button class="informationbutton" @click="tosingleRoom()"><span class="mr-1">詳細資訊</span>-></button>
            </div>
          </div>
          <div class="d-flex justify-content-center mb-5">
            <button class="bottombutton" @click="ok()">OK</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: require('@/assets/images/book_ok.svg'),
      roomInformation: {
        imageUrl: [],
        descriptionShort: {},
        amenities: {},
        checkInAndOut: {},
      },
    }
  },
   created() {
    this.singleRoom()
  },
  methods: {
    singleRoom() {
      const roomid = this.$store.state.roomid;
      const api = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${roomid}`;
      this.$http.get(api, {
        headers: {
          Authorization: 'Bearer dqGDhC8okP0akW71P5iVNhXn2IzdhUhZF4CfcQmPIxUqpti9BKTQIStNw0Gx',
          accept: 'application/json',
        },
      }).then((res) => {
        this.roomInformation = res.data.room[0];
        this.$forceUpdate();
      }).catch((error) => {
        if(error) {
          console.log(res);
        };
      });
    },
    ok() {
      this.$router.push('/')
    }
  },
};
</script>
