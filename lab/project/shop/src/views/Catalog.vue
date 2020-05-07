<template>
    <v-container>
        <v-row>
            <v-col v-for="item in category" :key="item.label" :value="item">
                <item></item>
            </v-col>
        </v-row>
    </v-container>
    
</template>


<script>
import serviceCatalog from '../services/catalog';
export default {
    data() {
        return {
            category: {},
        };
    },

    async beforeCreate() {
        const category = await serviceCatalog.getCategory(
            this.$route.params.categoryId,
        );
    },
};

</script>