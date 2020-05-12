<template>
    <div>
        <v-container>
            <v-row wrap="true">
                <v-col wrap="true" v-for="item in category.items" :key="item.label" :value="item">
                    <item :item="item"></item>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>
import serviceCatalog from '../services/catalog';
import Item from '../components/Item.vue';
export default {
    data() {
        return {
            category: {},
        };
    },
    components: {
        Item,
    },

    async beforeCreate() {
        const category = await serviceCatalog.getCategory(
            this.$route.params.categoryId,
        );
        this.category = category;
    },

};

</script>