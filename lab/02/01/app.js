function initApp() {
    const app = new Vue({
        el: '#app',
        data: {
            categories,
            countries,
            categorySelected: {},
            itemSelected: {},
            cartItems: [],
            contact: {
                firstName: "",
                lastName: "",
                adress: "",
                
            }
        },
        computed: {
            cartTotal: function() {
                let total = 0;
                this.cartItems.forEach(item => total += item.unitPrice);
                return total;
            }
        },
        methods: {
            addToCart: function() {
                this.cartItems.push(this.itemSelected);
            },
            removeFromCart: function(itemToRemove) {
                this.carItems = this.cartItems.filter(item => itemToRemove.id !== item.id);
            }
        }
    });
}