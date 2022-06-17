<template>
  <div class="product" v-for="value in item" :key="value.id">
    <div class="product-gallery">
      <div class="product-gallery__preview">

        <img src="../assets/android-chrome-192x192.png" alt="" class="lazyLoad isLoaded">
      </div>
      <div class="product-gallery__thumbs"></div>
    </div>
    <div class="product-info">
      <div class="product-info__title">
        {{value.name}}
      </div>
      <div class="product-info__description">
        {{value.description}}
      </div>
      <div >
        <div  class="product-info__color">
          <div  class="field">
            <label  class="field__label">Select a color:</label>
            <select  class="field__input">
              <option value="olive">
                olive
              </option>
              <option  value="purple">
                purple
              </option>
            </select></div>
        </div>
        <div  class="product-info__size">
          <div  class="radio-buttons">
            <div  class="radio-buttons__header">
              Select a size:
            </div>
            <div  class="radio-buttons__option"><input  id="size-XS" type="radio"
                                                                         name="size" value="XS"> <label
                 for="size-XS">XS</label></div>
            <div  class="radio-buttons__option"><input  id="size-S" type="radio"
                                                                         name="size" value="S"> <label
                 for="size-S">S</label></div>
            <div  class="radio-buttons__option"><input  id="size-M" type="radio"
                                                                         name="size" value="M"> <label
                 for="size-M">M</label></div>
            <div  class="radio-buttons__option"><input  id="size-L" type="radio"
                                                                         name="size" value="L"> <label
                 for="size-L">L</label></div>
            <div  class="radio-buttons__option"><input id="size-XL" type="radio"
                                                                         name="size" value="XL"> <label
                 for="size-XL">XL</label></div>
            <div  class="radio-buttons__option"><input  id="size-XXL" type="radio"
                                                                         name="size" value="XXL"> <label
                 for="size-XXL">XXL</label></div>
          </div>
        </div>
      </div>
      <div class="product-info__price">
        ${{value.price}}
      </div>
      <div class="product-info__buttons">
        <button class="btn btn--primary btn--large">
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CatalogDetail",
  data() {
    return {
      item: []
    }
  },
  mounted() {
    this.fetchItem()
  },
  methods: {

    async fetchItem() {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/unhelless/jsonFile/catalog',{
          params:{
            id: this.$route.params.id,
          }
        })
        console.log(response)
        this.item = response.data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-wrap: wrap;
}

.product-gallery {

  @media screen and (min-width: 960px) {
      width: 50%;
  }

  @media screen and (max-width: 959px) {
      width: 100%;
  }
  &__preview {
    background: #f5f4f2;
    padding: 5rem;
    border-radius: 5px;
    img{
      width: 100%;
    }
  }

  &__thumbs {
    display: flex;
    flex-wrap: wrap;
  }
}

.product-info {

  flex: 1;
  padding-left: 5rem;
  @media screen and (max-width: 770px) {
    padding-left: 0;
  }

  &__title {
    font-size: 2.4rem;
    padding-bottom: 1.5rem;
    font-weight: 500;
  }

  &__description {
    font-size: 1.1rem;
    line-height: 1.5;
    padding-bottom: 1.5rem;
  }

  &__color {
    padding-bottom: 1rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;

    &__label {
      padding-bottom: 0.5rem;
      font-weight: 500;
      font-size: 1.1rem;
    }

    &__input {
      padding: 0.5rem;
      background: #fff;
      border: 2px solid #000;
      border-radius: 5px;
      font-size: 1.1rem;
      display: block;
    }
  }

  &__size {
    .radio-buttons {
      &__header {
        padding-bottom: 0.5rem;
        font-weight: 500;
        font-size: 1.1rem;
      }

      &__option {
        display: inline-block;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;

        input[type=radio] {
          display: none;
        }

        label {
          display: inline-block;
          cursor: pointer;
          padding: 0.8rem 1.3rem;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 2px solid #000;
          border-radius: 5px;
          font-size: 1.1rem;
          color: black;
        }

        input[type=radio]:checked + label {
          background: #000;
          color: #fff;
        }
      }
    }
  }
  &__price{
    font-weight: 500;
    font-size: 2.2rem;
    padding: 2rem 0;
  }
  &__buttons{

  }
}

</style>