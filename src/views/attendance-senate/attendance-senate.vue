<template>
    <SpinnerComponent v-if="cargando"/>
    <div class="container">
        <h2>Attendance</h2>

        <div class="row">
          <div class="col-md-6">
           <p>The Constitution specifies that a majority of members constitutes a quorum to do business in each house. Representatives and senators rarely force the presence of a quorum by demanding quorum calls; thus, in most cases, debates continue even if a majority is not present.</p>

            <p>The Senate uses roll-call votes; a clerk calls out the names of all the senators, each senator stating "aye" or "no" when his or her name is announced. The House reserves roll-call votes for the most formal matters, as a roll-call of all 435 representatives takes quite some time; normally, members vote by electronic device. In the case of a tie, the motion in question fails. In the Senate, the Vice President may (if present) cast the tiebreaking vote.</p>
          </div>

          <div class="col-md-6">
            <h2>Senate at a glance</h2>
            <!-- ********** TABLA 1 *********** -->
            <table id="tabla1" class="table">
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
                    <td>{{ estadisticas.republicanos.promedio_votos }} %</td>
                  </tr>
                  <tr>
                    <td>Democrat</td>
                    <td>{{ estadisticas.democratas.total }}</td>
                    <td>{{ estadisticas.democratas.promedio_votos }} %</td>
                  </tr>
                  <tr>
                    <td>Independent</td>
                    <td>{{ estadisticas.independientes.total }}</td>
                    <td>{{ estadisticas.independientes.promedio_votos }} %</td>
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
            <h2>Least Engaged (Bottom 10% Attendance)</h2>
            <!-- ********** TABLA 2 *********** -->
            <table id="tabla2" class="table table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number of Missed Votes</th>
                        <th>% Missed</th>
                    </tr>
                </thead>
                <tbody id="table-2">
                  <tr v-for="item in estadisticas.menos_votados" :key="item.id">
                    <td>{{ item.first_name }} {{ item.last_name }}</td>
                    <td>{{ item.missed_votes }}</td>
                    <td>{{ item.missed_votes_pct }} %</td>
                  </tr>
                </tbody>
            </table>
          </div>

          <div class="col-md-6">
            <h2>Most Engaged (Top 10% Attendance)</h2>
            <!-- ********** TABLA 3 *********** -->
            <table id="table3" class="table table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number of Missed Votes</th>
                        <th>% Missed</th>
                    </tr>
                </thead>
                <tbody id="table-3">
                  <tr v-for="item in estadisticas.mas_votados" :key="item.id">
                    <td>{{ item.first_name }} {{ item.last_name }}</td>
                    <td>{{ item.missed_votes }}</td>
                    <td>{{ item.missed_votes_pct }} %</td>
                  </tr>
                </tbody>
            </table>
          </div>

        </div>

      </div>
</template>

<script>
    import { senateData } from '../../actions/congress'
    import { sharedFunctions } from '../../global/sharedFunctions'
    import SpinnerComponent from '../../components/spinner/spinner.vue'

    export default({
        name: 'AttendanceSenateComponent',

        components: {
            SpinnerComponent
        },

        mounted() {
            window.addEventListener('load', this.loadData())
        },

        data(){
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

        mixins:[sharedFunctions],

        methods: {
            async loadData(){
                let res = await senateData()
                if(res)this.obtenerDatos(res)
                this.cargando = false
            }
        },
    })
</script>