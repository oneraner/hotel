<template>
<div>
  <div class="background-color position-relative overflow-hidden">
    <div class="top-circle"></div>
    <div class="sec-circle"></div>
    <div class="third-circle"></div>
    <div class="fourth-circle"></div>
    <div class="fifth-circle"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div v-for="item in roomList" :key="item.id" class="customCard col-11 mb-4 overflow-hidden" @click="room(item.id)">
          <img class="card-img" :src="item.imageUrl" alt="">
          <div class="w-50 pl-3 mt-3 mb-2">
            <p>{{ item.name }}</p>
            <p class="text-color font-sm">
              Single Room is only reserved for one guest. 
              There is a bedroom.
            </p>
            <p class="price-color">
              ${{ item.normalDayPrice }} / 每晚
            </p>
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
      roomList: [],
    };
  },
  created() {
    this.getRoom();
  },
  methods: {
    getRoom() {
      const api = `https://challenge.thef2e.com/api/thef2e2019/stage6/rooms`;
      this.$http.get(api, {
        headers: {
          Authorization: 'Bearer dqGDhC8okP0akW71P5iVNhXn2IzdhUhZF4CfcQmPIxUqpti9BKTQIStNw0Gx',
          accept: 'application/json',
        },
      }).then((res) => {
        this.roomList = res.data.items;
      }).catch((error) => {
        if(error) {
          console.log(res);
        };
      });
    },
    room(id) {
      this.$store.commit('saveId', id);
      this.$router.push('room');
    },
  },
}
</script>
