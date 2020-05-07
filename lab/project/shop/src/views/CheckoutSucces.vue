<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-img
                    src="home.jpg"
                    class="white--text align-end"
                    max-height="600px"
                >
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <span class="display-3">
                    Merci pour votre achat !
                </span>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <router-link to="/">Cliquer ici pour retourner sur la page d'acceuil</router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {};
</script>