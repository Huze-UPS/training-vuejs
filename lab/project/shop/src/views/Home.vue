<template>
    <v-container class="justify-center text-center">
        <v-row>
            <v-col cols="12">
                <v-img
                    src="home.jpg"
                    class="white--text align-end"
                    max-height="600px"
                >
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <span class="display-3">
                    Bienvenue sur <strong>Clothes</strong>
                </span>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <br />
                <br />
                <h2 class="display-2">Les plus grandes marques</h2>
                <br />
                <h2 class="display-2">aux meilleurs prix !</h2>
                <br />
                <br />
                <h2 class="display-1">
                    Découvrez ci-dessous nos univers
                </h2>
            </v-col>
        </v-row>
        <v-container fluid>
            <v-row>
                <v-col align="center" justify="center" v-for="category in categories" :key="category.id" :value="category">
                    <v-card class="ml-5" height="250" width="250" @click="goToCatalog(category.id)">
                        <v-img :src="category.image" height="200" width="250"></v-img>
                        <span class="blue--text">DECOUVRIR NOS {{ category.label.toUpperCase() }}</span>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import serviceCatalog from '../services/catalog';
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

    async beforeCreate() {
        const categories = await serviceCatalog.getCategories();
        this.categories = categories.sort((c1, c2) =>
            c1.label.localeCompare(c2.label),
        );
    },
};
</script>
