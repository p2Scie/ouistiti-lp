<template>
  <section class="category">
    <div class="wrapper">
      <h2>
        <span class="dot">• </span>Nos coins de paradis<span class="dot">
          •</span
        >
      </h2>

      <ul class="categroy-list">
        <li>
          <article>
            <a href="">
              <div id="church"></div>
            </a>
            <p>Eglise</p>
          </article>
        </li>
        <li>
          <article>
            <a href="">
              <div id="house"></div>
            </a>
            <p>Maison</p>
          </article>
        </li>
        <li>
          <article>
            <a href="">
              <div id="castle"></div>
            </a>
            <p>Château</p>
          </article>
        </li>
        <li>
          <article>
            <a href="">
              <div id="park"></div>
            </a>
            <p>Parc d'attractions</p>
          </article>
        </li>
        <li>
          <article>
            <a href="">
              <div id="hospital"></div>
            </a>
            <p>Hôpital</p>
          </article>
        </li>
        <li>
          <article>
            <a href="">
              <div id="lighthouse"></div>
            </a>

            <p>Phare</p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.category {
  padding-top: 0;

  .wrapper {
    .categroy-list {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
      li {
        margin: 1rem;
        p {
          margin-top: 1rem;
        }
      }
    }

    article div {
      height: 122px;
      width: 157px;
      border: 1px solid $secondary-color-1;
      background-color: transparent;
      box-sizing: border-box;
      border-radius: 16px;
      background-repeat: no-repeat;
      background-position: bottom;
      &:hover {
        background-color: $secondary-color-1;
      }
      transition: all .5s;
    }

    #church {
      background-image: url("~@/assets/img/category/church-img-light.svg");
      &:hover {
        background-image: url("~@/assets/img/category/church-img-light-hover.svg");
      }
    }

    #house {
        background-image: url("~@/assets/img/category/house-img-light.svg");
      &:hover {
        background-image: url("~@/assets/img/category/house-img-light-hover.svg");
      }
     
    }

    #castle {
      background-image: url("~@/assets/img/category/castle-img-light.svg");
      &:hover {
        background-image: url("~@/assets/img/category/castle-img-light-hover.svg");
      }
     
    }
    #park {
        background-image: url("~@/assets/img/category/park-img-light.svg");
      &:hover {
        background-image: url("~@/assets/img/category/park-img-light-hover.svg");
      }
     
    }
    #hospital {
        background-image: url("~@/assets/img/category/hospital-img-light.svg");
      &:hover {
        background-image: url("~@/assets/img/category/hospital-img-light-hover.svg");
      }
     
    }
    #lighthouse {
        background-image: url("~@/assets/img/category/lighthouse-img-light.svg");
      &:hover {
        background-image: url("~@/assets/img/category/lighthouse-img-light-hover.svg");
      }
     
    }
  }
}

*[data-theme="true"]  {
  .category {
     article div {
      border: 1px solid $secondary-color-0;
      background-color: $primary-color-1;

      &:hover {
        background-color: transparent;
      }
    }
    #church {
      background-image: url("~@/assets/img/category/church-img-dark.svg");
      &:hover {
         background-image: url("~@/assets/img/category/church-img-dark.svg");
      }
    }

     #house {
        background-image: url("~@/assets/img/category/house-img-dark.svg");
      &:hover {
        background-image: url("~@/assets/img/category/house-img-dark.svg");
      }
     
    }

    #castle {
      background-image: url("~@/assets/img/category/castle-img-dark.svg");
      &:hover {
        background-image: url("~@/assets/img/category/castle-img-dark.svg");
      }
     
    }
    #park {
        background-image: url("~@/assets/img/category/park-img-dark.svg");
      &:hover {
        background-image: url("~@/assets/img/category/park-img-dark.svg");
      }
     
    }
    #hospital {
        background-image: url("~@/assets/img/category/hospital-img-dark.svg");
      &:hover {
        background-image: url("~@/assets/img/category/hospital-img-dark.svg");
      }
     
    }
    #lighthouse {
        background-image: url("~@/assets/img/category/lighthouse-img-dark.svg");
      &:hover {
        background-image: url("~@/assets/img/category/lighthouse-img-dark.svg");
      }
     
    }
  }
 
}
</style>
