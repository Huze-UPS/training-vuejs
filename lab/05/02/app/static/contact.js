const contact = {

    props: {
        countries: Array,
        contact: Object,
    },

    methods: {
        changeContact: function() {
            this.$emit('contact-changed', this.contact);
        }
    },

    template: `
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"><i class="fa fa-address-card-o"></i>&nbsp;Contact</h4>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="lastName">Nom</label>
                            <input type="text" class="form-control" id="lastName" v-model="contact.lastName" @input="changeContact">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="firstName">Prénom</label>
                            <input type="text" class="form-control" id="firstName" v-model="contact.firstName" @input="changeContact">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="address">Adresse</label>
                            <input type="text" class="form-control" id="address" v-model="contact.address" @input="changeContact">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="zipCode">Code postal</label>
                            <input type="text" class="form-control" id="zipCode" v-model="contact.zipCode" @input="changeContact">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="country">Pays</label>
                            <select id="country" class="form-control" v-model="contact.country" @change="changeContact">
                                <option v-for="country in countries" :key="country.code3" :value="country">{{ country.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
}