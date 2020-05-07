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
                <v-col align-self="center">
                    <v-card height="250px" width="250px">
                        <v-img :src="categories[0].image" height="200px" width="250px"></v-img>
                        <router-link style="text-decoration: none" to="/catalog/shoes">DÉCOUVRIR NOS CHAUSSURES</router-link>
                    </v-card>
                </v-col>
                <v-col align-self="center">
                    <v-card height="250px" width="250px">
                        <v-img :src="categories[1].image" height="200px" width="250px"></v-img>
                        <router-link style="text-decoration: none" to="/catalog/t-shirts">DÉCOUVRIR NOS T-SHIRTS</router-link>

                    </v-card>
                </v-col>
                <v-col align-self="center">
                    <v-card height="250px" width="250px">
                        <v-img :src="categories[2].image" height="200px" width="250px"></v-img>
                        <router-link style="text-decoration: none" to="/catalog/jackets">DÉCOUVRIR NOS VESTES</router-link>
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

    async beforeCreate() {
        const categories = await serviceCatalog.getCategories();
        this.categories = categories.sort((c1, c2) =>
            c1.label.localeCompare(c2.label),
        );
    },
};
</script>
