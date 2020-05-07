<template>
    <v-app-bar app dark>
        <router-link to="/" text class="logo">
            <span class="display-1">Clothes</span>
        </router-link>

        <div v-for="category in categories" :key="category.id">
            <v-btn small class="ml-5" @click="goToCatalog(category.id)"
                >Nos {{ category.label }}</v-btn
            >
        </div>
        <v-spacer></v-spacer>
        <v-menu min-width="600px" :close-on-content-click="false">
            <template v-slot:activator="{ on }">
                <v-btn class="ml-5" v-on="on">
                    <span class="mr-2">Mon panier (???)</span>
                    <v-icon>mdi-shopping</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <cart></cart>
                </v-card-title>
            </v-card>
        </v-menu>
    </v-app-bar>
</template>

<script>
import serviceCatalog from '../services/catalog';
import Cart from '../components/Cart.vue';
export default {
    data() {
        return {
            categories: [],
        };
    },
    methods: {
        goToCatalog(categoryId) {
            this.$router.push({ name: 'Catalog', params: { categoryId } });
        },
    },
      components: {
        Cart,
    },

    async beforeCreate() {
        const categories = await serviceCatalog.getCategories();
        this.categories = categories.sort((c1, c2) =>
            c1.label.localeCompare(c2.label),
        );
    },
};
</script>

<style scoped>
.logo {
    color: white;
    text-decoration: none;
}
</style>
