<template>
  <div class="home-container">
    <div class="box-wrap">
      <div class="box" v-for="item in list" :key="item.id">
        <div class="box-content">
          <div class="img-wrap">
            <img src="~assets/icons/icon-dai.png" alt="" />
          </div>
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      list: [
        { id: 1, name: "逮狗腿记账" },
        { id: 2, name: "逮狗腿记账" },
        { id: 3, name: "逮狗腿记账" },
        { id: 4, name: "逮狗腿记账" },
        { id: 5, name: "逮狗腿记账" },
        { id: 6, name: "逮狗腿记账" },
        { id: 7, name: "逮狗腿记账" },
        { id: 8, name: "逮狗腿记账" },
        { id: 9, name: "逮狗腿记账" },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.home-container {
  .box-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 20px;
    .box {
      width: 25%;
      padding: 0 20px;
      margin-bottom: 10px;
      .box-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .img-wrap {
          width: 60px;
          height: 60px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .name {
          width: 120%;
          text-align: center;
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }
    .box:last-child {
      margin-right: auto;
    }
  }
}
</style>
