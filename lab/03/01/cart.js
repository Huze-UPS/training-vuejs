const cart = {

    props: {
        cart: Object,
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

    template: `
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"><i class="fa fa-shopping-cart"></i>&nbsp;Panier</h4>
                <ul class="list-group mb-3">

                    <li class="list-group-item" v-for="(item, index) in cart.items" :key="item.title">
                        <div class="row">
                            <div class="col-md-8">
                                <h6>{{ item.title }}</h6>
                            </div>
                            <div class="col-md-3 text-right">
                                <span class="text-muted">{{ item.unitPrice.toFixed(2) }} €</span>
                            </div>
                            <div class="col-md-1 text-right">
                                <a href="#" class="text-danger" @click="removeFromCart(index)"><i class="fa fa-remove"></i></a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h6 class="text-muted">{{ item.author }}</h6>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item bg-light">
                        <div class="row">
                            <div class="col-6">
                                <h6><strong>Total</strong></h6>
                            </div>
                            <div class="col-5 text-right">
                                <span><strong>{{ cartTotal }} €</strong></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `,
}