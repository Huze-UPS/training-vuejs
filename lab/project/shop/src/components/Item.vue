<template>
    <div>
        <v-card height="250px" width="250px" v-for="item in category.items" :key="item.label" :value="item">
            <h4>{{ item.label }}</h4>
            <br />
            <p>{{ item.brand }}</p>
            <br />
            <v-img :src="item.image"></v-img>
            <v-container>
                <v-row>
                    <label>Taille</label>
                        <v-select id="sizes" class="form-control" v-model="item.sizes">
                            <option v-for="size in item.sizes" :key="size" :value="size">{{ size }}</option>
                        </v-select>
                    <h4>{{ item.unitPrice }} €</h4>
                <v-row>
            </v-container>
            <v-btn class="white--text black">AJOUTER AU PANIER</v-btn>
        </v-card>
    </div>
    
</template>

<script>
export default {};
</script>