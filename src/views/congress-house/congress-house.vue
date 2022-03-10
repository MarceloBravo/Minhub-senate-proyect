<template>
    <SpinnerComponent v-if="cargando"/>
    <div class="container">
        <h2>Congressmen</h2>
        <div class="row">
            <div Class="col-md-8">
                <p>
                The major power of the House is to pass federal legislation that affects
                the entire country, although its bills must also be passed by the Senate
                and further agreed to by the U.S. President before becoming law (unless
                both the House and Senate re-pass the legislation with a two-thirds
                majority in each chamber). The House has some exclusive powers: the
                power to initiate revenue bills, to impeach officials (impeached
                officials are subsequently tried in the Senate), and to elect the U.S.
                President in case there is no majority in the Electoral College.
                </p>
                <p>
                Each U.S. state is represented in the House in proportion to its
                population as measured in the census, but every state is entitled to at
                least one representative.
                </p>
            </div>
            <div class="col-md-4">

            </div>
        </div>
    
        <table id="table" class="table table-striped table-bordered" style="width:100%">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Partido</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Antiguedad</th>
                    <th scope="col">Votos %</th>
                </tr>
            </thead>
            <tbody id="house-data">
              <tr v-for="e in data" :key="e.id">
                <td>
                    <a v-bind:href="e.url" target="blanck">
                        {{ e.first_name ? e.first_name : '' }} {{ e.middle_name ? e.middle_name : '' }} {{ e.last_name ? e.last_name : '' }}
                    </a>
                </td>
                <td>{{ e.party }}</td>
                <td>{{ e.state }}</td>
                <td>{{ e.seniority }}</td>
                <td>{{ e.votes_with_party_pct }}%</td>
              </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import { houseData } from '../../actions/congress'
    import SpinnerComponent from '../../components/spinner/spinner.vue'

    export default ({
        name: 'CongressHouseComponent',

        components:{
            SpinnerComponent
        },

        data(){
            return {
                data: [],
                cargando: true
            }
        },

        mounted() {
            window.addEventListener('load', this.loadData())
        },

        methods: {
            async loadData(){
                this.data = await houseData()
                this.cargando = false
            }
        },
    })
</script>