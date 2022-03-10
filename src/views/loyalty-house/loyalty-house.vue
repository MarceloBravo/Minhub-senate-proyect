<template>
    <SpinnerComponent v-if="cargando"/>
    <div class="container">
        <h2>Party Loyalty</h2>

        <div class="row">
          <div class="col-md-6">
            <p>Those who consider themselves to be strong partisans, strong Democrats and strong Republicans respectively, tend to be the most faithful in voting for their party's nominee for office and legislation that backs their party's agenda. </p>
          </div>
          <div class="col-md-6">
            <h2>Senate at a glance</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Party</th>
                        <th>Number of Reps</th>
                        <th>% Voted with Prty</th>
                    </tr>
                </thead>
                <tbody id="table-1">
                  <tr>
                    <td>Republican</td>
                    <td>{{ estadisticas.republicanos.total }}</td>
                    <td>{{ Math.round(estadisticas.republicanos.promedio_votos) }} %</td>
                  </tr>
                  <tr>
                      <td>Democrat</td>
                      <td>{{ estadisticas.democratas.total }}</td>
                      <td>{{ Math.round(estadisticas.democratas.promedio_votos) }} %</td>
                  </tr>
                  <tr>
                      <td>Independent</td>
                      <td>{{ estadisticas.independientes.total }}</td>
                      <td>{{ Math.round(estadisticas.independientes.promedio_votos) }} %</td>
                  </tr>
                  <tr class='bold-row'>
                      <td>Total</td>
                      <td>{{ Math.round(estadisticas.republicanos.total + estadisticas.democratas.total + estadisticas.independientes.total) }}</td>
                      <td>{{ estadisticas.totalGrilla }} %</td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h2>Least Loyal (Bottom 10% of Party)</h2>
            <table id="table1" class="table table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number Party Votes</th>
                        <th>% Party Votes</th>
                    </tr>
                </thead>
                <tbody id="table-2">
                  <tr v-for="e in estadisticas.menos_votados" :key="e.id">
                    <td>{{ e.first_name }} {{ e.last_name }}</td>
                    <td>{{ e.total_votes }}</td>
                    <td>{{ e.votes_with_party_pct }} %</td>
                  </tr>
                </tbody>
            </table>
          </div>

          <div class="col-md-6">
            <h2>Most Loyal (Top 10% of Party)</h2>
            <table id="table2" class="table table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number Party Votes</th>
                        <th>% Party Votes</th>
                    </tr>
                </thead>
                <tbody id="table-3">
                  <tr v-for="e in estadisticas.mas_votados" :key="e.id">
                    <td>{{ e.first_name }} {{ e.last_name }}</td>
                    <td>{{ e.total_votes }}</td>
                    <td>{{ e.votes_with_party_pct }} %</td>
                  </tr>
                </tbody>
            </table>
          </div>

        </div>

    </div>
</template>

<script>
    import { houseData } from '../../actions/congress'
    import { sharedFunctions } from '../../global/sharedFunctions'
    import SpinnerComponent from '../../components/spinner/spinner.vue'

    export default({
        name: 'LoyaltyHouseComponent',

        components:{
            SpinnerComponent
        },

        mounted() {
            window.addEventListener('load', this.loadData())
        },

        data() {
            return {
                data: [],   //Almacena el listado de senadores obtenidos desde pro-pública, sin procesar
                miembrosPartido: {republicanos:[], democratas: [], independientes: []}, //Separa los senadores por partido
                estadisticas: { 
                    republicanos: { //Contiene los datos para cargar la primera fila de la tabla 1
                        total: 0, 
                        promedio_votos: 0,
                        promedio_asistencia: 0,
                        porcentaje_asistencia: 0,
                        
                    }, 
                    democratas: {   //Contiene los datos cargar la segunda fila de la tabla 1
                        total: 0, 
                        promedio_votos: 0,
                        promedio_asistencia: 0,
                        porcentaje_asistencia: 0,
                    }, 
                    independientes: {   //Contiene los datos cargar la tercera fila de la tabla 1
                        total: 0, 
                        promedio_votos: 0,
                        promedio_asistencia: 0,
                        porcentaje_asistencia: 0,
                    },
                    totalGrilla: 0,     //Utilizado para mostrar el total de la tabla 1 (cuarta fila de la tabla 1)
                    menos_votados: [],  //Contiene el listado para llenar la tabla 2
                    mas_votados: [],    //Contiene el listado para llenar la tabla 3
                },
                cargando: true
            }
        },

        mixins: [sharedFunctions],

        methods: {
            async loadData(){
                let res = await houseData()
                if(res)this.obtenerDatos(res)
                this.cargando = false
            }
        },
    })
</script>