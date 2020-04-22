<template>
    <div>
        <h2>Chuck Norris fact ...</h2>
        <img src="../assets/chuck_norris.jpg" />
        <br>
        <h2>{{ fact }}</h2>
    </div>
</template>

<script>
 
    export default {
        data: function() {
            return {
                fact: ""
            }
        },

        props: {
            facts: Array,
        },

        created() {
            this.fact = this.facts[Math.floor(Math.random() * this.facts.length)];
        },
    }
    
</script>