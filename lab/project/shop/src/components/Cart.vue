<template>
    <div>
        <h5>Mon Panier</h5>
        <v-row v-for="item in cart" :key="item.label" :value="item">
            <span>{{ item.label }} - {{ item.brand }} ({{ item.size }})                     {{item.quantity}}
                <v-btn text icon><v-icon @click="incrementCartItem(itemId)">mdi-arrow-up</v-icon></v-btn>
                <v-btn text icon><v-icon @click="decrementCartItem(itemId)">mdi-arrow-down</v-icon></v-btn>
                            {{ item.price}}
            </span>
        </v-row>
        <v-row justify="end">Total:</v-row>
        <br />
        <v-row justify="end">
            <v-btn class="black--text white">VIDER LE PANIER</v-btn>
            <v-btn class="white--text black">COMMANDER</v-btn>
        </v-row>
    </div>
    
</template>

<script>
export default {
    data() {
        return {

        }

    },

    computed: {

        cartTotal: function() {
            const total = this.cart.items && this.cart.items.length > 0 ?
                this.cart.items.reduce((sum, current) => sum += current.unitPrice, 0) :
                0;
            return total.toFixed(2);
        }
    },

    methods: {

        removeFromCart: function(index) {
            this.cart.items.splice(index, 1);
        },
    },
};
</script>
