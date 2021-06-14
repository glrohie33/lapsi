<template>
  <div class="container">
    <template id="clock-template">
      <div id="clock">
        <div class="hour">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
        <div class="hour">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
        <div id="min" ref="min"></div>
        <div id="hour" ref="hour"></div>
        <div id="sec" ref="sec"></div>
        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
        <div id="time" ref="time">{{time}}</div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "00:00:00"
    };
  },
  mounted() {
    this.startTime();
  },
  methods: {
    startTime() {
      var min = this.$refs.min,
        sec = this.$refs.sec,
        hour = this.$refs.hour;
      var now = new Date(),
        hValue = now.getHours(),
        mValue = now.getMinutes(),
        sValue = now.getSeconds(),
        then = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          0,
          0,
          0
        ), //midnight
        diffInMil = now.getTime() - then.getTime(), // difference in milliseconds
        h = diffInMil / (1000 * 60 * 60), //hours
        m = h * 60; //minutes
      //rotate the hands accordingly
      sec.style.webkitTransform = "rotate(" + sValue * 6 + "deg)";
      hour.style.webkitTransform = "rotate(" + h * 30 + "deg)";
      min.style.webkitTransform = "rotate(" + m * 6 + "deg)";
      setTimeout(this.startTime, 1000);

      // 数字时间
      mValue = this.checkTime(mValue);
      sValue = this.checkTime(sValue);
      this.time = hValue + ":" + mValue + ":" + sValue;
    },
    checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
  }
};
</script>
