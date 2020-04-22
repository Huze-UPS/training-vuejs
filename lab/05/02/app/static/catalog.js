const catalog = {
    data: function() {
        return {
            categorySelected: undefined,
            itemSelected: undefined,
        }
    },

    props: {
        categories: Array,
    },

    computed: {

        categoriesSorted: function() {
            return this.categories.sort((c1, c2) => c1.name.localeCompare(c2.name));
        },

        itemsSorted: function() {
            return this.categorySelected ?
                this.categorySelected.items.sort((c1, c2) => c1.title.localeCompare(c2.title)) : [];
        },
    },

    methods: {

        emitAddToCart: function() {
            this.$emit('add-to-cart', this.itemSelected);
        },
    },

    template: `
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"><i class="fa fa-search"></i>&nbsp;Catalogue</h4>
                <div class="form-group">
                    <label for="category">Catégorie</label>
                    <select id="category" class="form-control" v-model="categorySelected">
                        <option v-for="category in categoriesSorted" :key="category.name" :value="category">
                            {{category.name}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="item">Article</label>
                    <select id="item" class="form-control" v-model="itemSelected">
                        <option v-for="item in itemsSorted" :key="item.title" :value="item">{{item.title}} ({{item.author}})</option>
                    </select>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-secondary btn-block" :disabled="itemSelected === undefined" @click="emitAddToCart" id="btnAddToCart">Ajouter au panier</button>
                </div>
            </div>
        </div>
    `,
}