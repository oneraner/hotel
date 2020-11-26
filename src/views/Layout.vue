<template>
  <div>
    <nav class="nav navbackground-color pt-3 pb-3">
      <div class="container">
        <ul class="row justify-content-between">
          <li class="col-2">
            <router-link to="/"><img :src="logo" alt=""></router-link>
          </li>
          <li class="col-2">
            <a href="#"><img :src="menu" alt=""></a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="min-vh">
      <router-view></router-view>
    </div>
    <footer class="footer container">
      <ul class="footerul row justify-content-around align-items-center">
        <li>
          <router-link to="/">
            <img :src="home" alt="" class="mb-1">
            <p class="font-sm">首頁</p>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img :src="food" alt="" class="mb-1">
            <p class="font-sm">餐廳</p>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img :src="location" alt="" class="mb-1">
            <p class="font-sm">位置</p>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img :src="booking" alt="" class="mb-1">
            <p class="font-sm">訂房</p>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img :src="settings" alt="" class="mb-1">
            <p class="font-sm">設定</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Layout',
  data() {
    return {
      logo: require('@/assets/images/logo.svg'),
      menu: require('@/assets/images/menu.svg'),
      home: require('@/assets/images/home.svg'),
      food: require('@/assets/images/food.svg'),
      location: require('@/assets/images/location.svg'),
      booking: require('@/assets/images/booking.svg'),
      settings: require('@/assets/images/settings.svg'),
    };
  },
};
</script>
