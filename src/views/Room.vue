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
        <div class="room-information col-11 bg-white overflow-hidden">
          <img class="singleimg" :src="roomInformation.imageUrl[0]" alt="" v-if="roomInformation.imageUrl">
          <div class="d-flex justify-content-between mb-4">
            <p class="big-title third-color">{{ roomInformation.name }}</p>
            <p class="price second-color">{{ roomInformation.normalDayPrice }}/每晚</p>
          </div>
          <div class="d-flex justify-content-between mb-5">
            <p class="second-color"><img :src="roomsize" class="mr-1" alt="">{{ roomInformation.descriptionShort.Footage }}</p>
            <p class="second-color" v-if="roomInformation.descriptionShort.Bed"><img :src="bed" class="mr-1" alt="">{{ roomInformation.descriptionShort.Bed[0] }}</p>
            <p>
              <span class="third-color">房客人數限制：</span><span class="second-color">{{ roomInformation.descriptionShort.GuestMin }}~
              {{ roomInformation.descriptionShort.GuestMax }}人</span>
            </p>
          </div>
          <div class="mb-4">
            <p>價格</p>
            <p class="second-color">
              <span class="mr-3">平日(一~四)：{{ roomInformation.normalDayPrice }}</span>
              假日(五~日)：{{ roomInformation.holidayPrice }}
            </p>
          </div>
          <ul class="room-equipment-ul d-flex flex-wrap">
            <li class="room-equipment third-color mr-3" v-if="roomInformation.amenities['Wi-Fi'] === true">wifi</li>
            <li class="room-equipment third-color mr-3" v-if="roomInformation.amenities['Breakfast'] === true">早餐</li>
            <li class="room-equipment third-color mr-3" v-if="roomInformation.amenities['Mini-Bar'] === true">Mini Bar</li>
            <li class="room-equipment third-color mr-3" v-if="roomInformation.amenities['Room-Service'] === true">Room Service</li>
            <li class="room-equipment third-color mr-3" v-if="roomInformation.amenities['Television'] === true">電話</li>
            <li class="room-equipment third-color mr-3" v-if="roomInformation.amenities['Air-Conditioner'] === true">空調</li>
            <li class="room-equipment third-color mr-3" v-if="roomInformation.amenities['Refrigerator'] === true">冰箱</li>
            <li class="room-equipment third-color mr-3" v-if="roomInformation.amenities['Sofa'] === true">沙發</li>
            <li class="room-equipment third-color mr-3" v-if="roomInformation.amenities['Great-View'] === true">漂亮的視野</li>
            <li class="room-equipment third-color mr-3" v-if="roomInformation.amenities['Smoke-Free'] === true">禁止吸菸</li>
            <li class="room-equipment third-color mr-3" v-if="roomInformation.amenities['Child-Friendly'] === true">適合兒童</li>
            <li class="room-equipment third-color mr-3" v-if="roomInformation.amenities['Pet-Friendly'] === true">寵物攜帶</li>
          </ul>
          <div class="mb-3">
            <p class="third-color">CheckIn</p>
            <p class="second-color">
              <span class="mr-3">最早：{{ roomInformation.checkInAndOut.checkInEarly }}</span>
              最晚：{{ roomInformation.checkInAndOut.checkInLate }}
            </p>
          </div>
          <div class="mb-4">
            <p class="third-color">CheckOut</p>
            <p class="second-color">{{ roomInformation.checkInAndOut.checkOut }}</p>
          </div>
          <div class="mb-5">
            <p class="third-color">描述</p>
            <p class="second-color">{{ roomInformation.description }}</p>
          </div>
          <div class="d-flex justify-content-center mb-5">
            <button class="bottombutton" @click.prevent="goOrder()">現在訂房</button>
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
      roomInformation: {
        imageUrl: [],
        descriptionShort: {},
        amenities: {},
        checkInAndOut: {},
      },
      roomsize: require('@/assets/images/roomsize.svg'),
      bed: require('@/assets/images/bed.svg'),
    };
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
    goOrder() {
      this.$router.push('order');
    },
  },
};
</script>

<style>

</style>