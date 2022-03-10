<template>
    <SpinnerComponent v-if="cargando"/>
    <div class="container">
        <h2>Senators</h2>
        <div class="row">
            <div Class="col-md-8">
                <p>
                First convened in 1789, the composition and powers of the Senate are
                established in Article One of the U.S. Constitution. Each state is
                represented by two senators, regardless of population, who serve
                staggered six-year terms. The Senate has several exclusive powers not
                granted to the House, including consenting to treaties as a precondition
                to their ratification and consenting to or confirming appointments of
                Cabinet secretaries, federal judges, other federal executive officials,
                military officers, regulatory officials, ambassadors, and other federal
                uniformed officers, as well as trial of federal officials impeached by
                the House.
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
            <tbody id="senate-data">
              <tr v-for="e in data" :key="e.id">
                <td>
                  <a v-bind:href="e.url" target="blanck">
                      {{ e.first_name ? e.first_name : '' }} {{ e.middle_name ? e.middle_name : '' }} {{ e.last_name ? e.last_name : '' }}
                  </a>
                </td>
                <td>{{ e.party }}</td>
                <td>{{ e.state }}</td>
                <td>{{ e.seniority }}</td>
                <td>{{ e.votes_with_party_pct }} %</td>
              </tr>

            </tbody>
        </table>

    </div>
</template>

<script>
    import { senateData } from '../../actions/congress'
    import SpinnerComponent from '../../components/spinner/spinner.vue'

    export default({
        name: 'CongressSenateComponent',

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

        methods:{
            async loadData(){
                this.data = await senateData();
                this.cargando = false
            }
        }
    })
</script>