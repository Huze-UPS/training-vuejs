<template>
    <v-card  height="500" width="240">
        <h4>{{ item.label }}</h4>
        <br />
        <span>{{ item.brand }}</span>
        <v-img :src="item.image" height="240" width="240"></v-img>
        <br />
        <v-row>
            <v-col cols="5">
                <v-select :items="item.sizes" id="sizes" label="Taille" outlined></v-select>
            </v-col>
            <v-col>
                <span >{{ Number.parseFloat(item.unitPrice).toFixed(2) }} €</span>
            </v-col>
        </v-row>
        <v-btn class="white--text black" @click="addToCart(item)">AJOUTEZ AU PANIER</v-btn>
    </v-card>
</template>

<script>
import serviceCart from '../services/cart';
export default {
    props:{
        item: Object,
    },
    methods: {

        addToCart: function(itemToAdd) {
            serviceCart.addToCart(itemToAdd);
        },
    },
};
</script>