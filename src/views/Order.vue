<template>
  <div>
    <div class="background-color position-relative overflow-hidden">
    <div class="top-circle"></div>
    <div class="sec-circle"></div>
    <div class="third-circle"></div>
    <div class="fourth-circle"></div>
    <div class="fifth-circle"></div>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">選擇入住時間</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body d-flex justify-content-center align-items-center">
        <v-row justify="center">
          <v-date-picker v-model="dates" header-color="#9196B2" color="#444C6C" width="100%" range></v-date-picker>
        </v-row>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">選擇完成</button>
      </div>
      </div>
      </div>
    </div>
    <div class="container mb-4">
      <div class="row justify-content-center">
        <div class="pages col-11 bg-white">
          <div class="mt-4 mb-3">
            <input class="input second-color mb-2" v-model="name" type="text" placeholder="姓名">
            <input class="input second-color" v-model="tel" type="number" placeholder="電話">
          </div>
          <div class="mb-4">
            <p class="second-color mb-2">預約起訖時間</p>
            <div class="d-flex justify-content-center">
              <button class="datebutton mr-2" data-toggle="modal" data-target="#exampleModalCenter">{{ dates[0] }}</button>
              <button class="datebutton" data-toggle="modal" data-target="#exampleModalCenter">{{ dates[1] }}</button>
            </div>
          </div>
          <div class="mb-4">
            <p class="mb-3">{{ roomInformation.name }}</p>
            <div class="d-flex justify-content-between">
              <p>{{ roomInformation.normalDayPrice }}/每晚</p>
              <button class="informationbutton" @click="tosingleRoom()"><span class="mr-1">詳細資訊</span>-></button>
            </div>
          </div>
          <div class="mb-4">
            <p class="third-color mb-2">額外加購</p>
            <div class="d-flex justify-content-center align-items-center p-1">
              <button class="gym purchasebutton d-flex flex-column justify-content-center align-items-center mr-4" 
                @click.prevent="purchasegym()"><img :src="gym">健身房<small>$50.00</small></button>
              <button class="spa purchasebutton d-flex flex-column justify-content-center align-items-center mr-4" 
                @click.prevent="purchasespa()"><img :src="spa">SPA<small>$325.00</small></button>
              <button class="breakfast purchasebutton d-flex flex-column justify-content-center align-items-center mr-4" 
                @click.prevent="purchasebreakfast()"><img :src="breakfast">早餐<small>$160.00</small></button>
            </div>
          </div>
          <div class="mb-5">
            <p class="third-color mb-2">付款資訊</p>
            <div class="second-color d-flex justify-content-between">
              <p>{{ roomInformation.name }}</p>
              <p>${{ roomInformation.normalDayPrice }}.00</p>
            </div>
            <div class="second-color d-flex justify-content-between" v-if="gymPrice === true">
              <p>健身房</p>
              <p>$50.00</p>
            </div>
            <div class="second-color d-flex justify-content-between" v-if="spaPrice === true">
              <p>SPA</p>
              <p>$325.00</p>
            </div>
            <div class="second-color d-flex justify-content-between" v-if="breakfastPrice === true">
              <p>早餐</p>
              <p>$160.00</p>
            </div>
            <div class="d-flex justify-content-end mt-3">
              <span class="third-color mr-3">Total</span><span class="totalprice">${{ totalPrice }}.00</span>
            </div>
          </div>
          <div class="d-flex justify-content-center mb-5">
            <button class="bottombutton" @click.prevent="checkPay()">確認付款</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:'',
      tel:'',
      dates: [
        new Date().toISOString().substr(0, 10),
        new Date().toISOString().substr(0, 10),
      ],
      roomInformation: {
        imageUrl: [],
        descriptionShort: {},
        amenities: {},
        checkInAndOut: {},
      },
      gym: require('@/assets/images/gym.svg'),
      spa: require('@/assets/images/spa.svg'),
      breakfast: require('@/assets/images/breakfast.svg'),
      gymPrice: false,
      spaPrice: false,
      breakfastPrice: false,
    };
  },
  created() {
    this.singleRoom()
  },
  computed: {
    totalPrice: function() {
      let totalPrice = this.roomInformation.normalDayPrice;
      if(this.gymPrice === true) {
        totalPrice += 50
      } else {}
      if(this.spaPrice === true) {
        totalPrice += 325
      } else {}
      if(this.breakfastPrice === true) {
        totalPrice += 160
      } else {}
      return totalPrice
    }
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
    tosingleRoom() {
      this.$router.push('room');
    },
    checkPay() {
      this.$router.push('finish');
    },
    purchasegym() {
      if(this.gymPrice === false) {
        this.gymPrice = true
        document.querySelector('.gym').classList.add('purchase-bgc')
      } else {
        this.gymPrice = false
        document.querySelector('.gym').classList.remove('purchase-bgc')
      }
    },
    purchasespa() {
      if(this.spaPrice === false) {
        this.spaPrice = true
        document.querySelector('.spa').classList.add('purchase-bgc')
      } else {
        this.spaPrice = false
        document.querySelector('.spa').classList.remove('purchase-bgc')
      }
    },
    purchasebreakfast() {
      if(this.breakfastPrice === false) {
        this.breakfastPrice = true
        document.querySelector('.breakfast').classList.add('purchase-bgc')
      } else {
        this.breakfastPrice = false
        document.querySelector('.breakfast').classList.remove('purchase-bgc')
      }
    },
  },
};
</script>
