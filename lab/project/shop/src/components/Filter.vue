<template>
    <v-container>
        <v-row>
            <v-col>
                <v-select :items="item.brand" id="brand" label="Marque" outlined></v-select>
            </v-col>
            <v-col>
                <v-select :items="item.sizes" id="sizes" label="Taille" outlined></v-select>
            </v-col>
            <v-btn text icon><v-icon @click="">mdi-arrow-down</v-icon></v-btn>
            <v-btn text icon><v-icon @click="">mdi-arrow-up</v-icon></v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            brand: Array,
            size: Array,

        }
    }
};
</script>