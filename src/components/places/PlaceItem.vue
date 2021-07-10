<template>
  <!-- <router-link :to="placeDetailLink"> -->
    <li>
      <figure>
        <img src="@/assets/img/card-img-place.jpg" alt="" />
      </figure>
      <div>
        <h4>{{ name }}</h4>
        <p class="captions">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00001 8.00011C7.23612 8.00011 6.61112 7.37511 6.61112 6.61122C6.61112 5.84733 7.23612 5.22233 8.00001 5.22233C8.7639 5.22233 9.3889 5.84733 9.3889 6.61122C9.3889 7.37511 8.7639 8.00011 8.00001 8.00011ZM12.1667 6.75011C12.1667 4.22927 10.3264 2.44455 8.00001 2.44455C5.67362 2.44455 3.83335 4.22927 3.83335 6.75011C3.83335 8.37511 5.18751 10.5279 8.00001 13.0973C10.8125 10.5279 12.1667 8.37511 12.1667 6.75011ZM8.00001 1.05566C10.9167 1.05566 13.5556 3.29177 13.5556 6.75011C13.5556 9.05566 11.7014 11.7848 8.00001 14.9446C4.29862 11.7848 2.44446 9.05566 2.44446 6.75011C2.44446 3.29177 5.08335 1.05566 8.00001 1.05566Z"
              fill="#BFBFC4"
            />
          </svg>
          {{ location }}
        </p>
      </div>
    </li>
  <!-- </router-link> -->
</template>

<script>
export default {
  props: ["id", "name", "location"],
  computed: {
    placeDetailLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>
<style lang="scss" scoped>
li {
  background: $primary-color-5;
  box-shadow: 0px 14px 64px rgba(34, 34, 46, 0.08);
  border-radius: 1rem;
  max-width: 352px;
  min-height: 349px;
  margin: 3rem;
  div {
    padding: 1.25rem 2.25rem;
    h4 {
      margin-bottom: 1rem;
    }
    p {
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
