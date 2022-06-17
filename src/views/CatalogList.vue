<template>
  <h1>Список товаров</h1>
  <div class="row">
    <div class="product-list">
      <div class="product-card" v-for="item in items" :key="item.id">
        <router-link :to="'/list/'+item.id">
          <div class="product-card__image">
            <img src="../assets/android-chrome-192x192.png" :alt="item.name" class="lazyLoad isLoaded">
          </div>
          <div class="product-card__title">
            {{item.name}}
          </div>
          <div class="product-card__price">
            ${{item.price}}
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <ul class="pagination">
    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
    <li class="active"><a href="#!">1</a></li>
    <li class="waves-effect"><a href="#!">2</a></li>
    <li class="waves-effect"><a href="#!">3</a></li>
    <li class="waves-effect"><a href="#!">4</a></li>
    <li class="waves-effect"><a href="#!">5</a></li>
    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
  </ul>
</template>

<script>
import {
  mapState, mapMutations, mapGetters, mapActions
} from 'vuex';
import axios from "axios";

export default {
  name: "CatalogList",
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.fetchItems()
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/unhelless/jsonFile/catalog')
        this.items = response.data
      } catch (e) {
        console.log(e)
      }
    }
  }

};
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
}

a {
  text-decoration: none;
  color: black;
}

.product-card {
  border-radius: 12px;
  margin: 15px;
  padding: 15px;
  background: #f5f4f2;

  &:hover {
    opacity: .6;
    transition: all 0.5s;
  }

  &__title {
    text-align: center;
    font-size: 1.1rem;
  }

  &__price {
    padding-top: 0.5rem;
    text-align: center;
    font-weight: 500;
    font-size: 1.3rem;
  }
}
</style>