function initApp() {
    const app = new Vue({
        el: '#app',
        data: {
            categories,
            countries,
            cart: {
                items: [],
            },
            contact: {

            },
        },
        components: {
            catalog,
            contact,
            cart,
        },

        methods: {

            addToCart: function(itemToAdd) {
                if (!this.cart.items.find(item => itemToAdd.id === item.id)) {
                    this.cart.items.push(itemToAdd);
                }
            },

            onContactChanged: function(contactForm) {
                this.contact = contactForm;
            },

            isPaymentEnabled: function() {
                return this.cart.items.length > 0 &&
                    this.contact.firstName !== undefined &&
                    this.contact.firstName !== '' &&
                    this.contact.lastName !== undefined &&
                    this.contact.lastName !== '' &&
                    this.contact.address !== undefined &&
                    this.contact.address !== '' &&
                    this.contact.zipCode !== undefined &&
                    this.contact.zipCode !== '' &&
                    this.contact.country !== undefined;
            },

            pay: function() {
                this.categorySelected = undefined;
                this.itemSelected = undefined;
                this.cart.items = [];
                this.contact = {};
            }
        }
    });
}