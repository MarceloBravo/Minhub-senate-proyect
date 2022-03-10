export const sharedFunctions = {
    methods: {
        obtenerDatos(data){
            this.prepararDatos(data)
    
            this.estadisticas.republicanos.total = this.miembrosPartido.republicanos.length;
            this.estadisticas.democratas.total = this.miembrosPartido.democratas.length;
            this.estadisticas.independientes.total = this.miembrosPartido.independientes.length;
    
            this.obtenerLealtad(this.miembrosPartido.republicanos, this.estadisticas.republicanos);
            this.obtenerLealtad(this.miembrosPartido.democratas, this.estadisticas.democratas);
            this.obtenerLealtad(this.miembrosPartido.independientes, this.estadisticas.independientes);
            this.calcularTotalGrilla();
    
            this.obtenerAsistencia(this.miembrosPartido.republicanos, this.estadisticas.republicanos);
            this.obtenerAsistencia(this.miembrosPartido.democratas, this.estadisticas.democratas);
            this.obtenerAsistencia(this.miembrosPartido.independientes, this.estadisticas.independientes);
    
            this.obtenerMasMenosVotados();
            this.obtenerMasMenosLeales();
        },
    
        //Carga todos los datos en la variable data y separa los registros por partido
        prepararDatos(data){
            this.data = data
            data.forEach(e => {
                switch(e.party){
                    case "D":
                        this.miembrosPartido.democratas.push(e);
                        break;
                    case "R":
                        this.miembrosPartido.republicanos.push(e);
                        break;
                    default:
                        this.miembrosPartido.independientes.push(e);
                }
            });
        },
    
        calcularTotalGrilla(){
            let div = [
                this.estadisticas.republicanos.promedio_votos, 
                this.estadisticas.democratas.promedio_votos, 
                this.estadisticas.independientes.promedio_votos
            ].filter(e => e > 0).length
    
            this.estadisticas.totalGrilla = (
                (
                    parseFloat(this.estadisticas.republicanos.promedio_votos) + 
                    parseFloat(this.estadisticas.democratas.promedio_votos) + 
                    parseFloat(this.estadisticas.independientes.promedio_votos)
                ) / div
            ).toFixed(2)
        },
    
        obtenerLealtad(objPartido, objDestino){
            if(objPartido.length === 0)return
            let totalVotos = 0
            objPartido.forEach(e => {
                totalVotos += e.votes_with_party_pct
            })
            objDestino.promedio_votos = (totalVotos / objPartido.length).toFixed(2)
        },
    
        obtenerAsistencia(objPartido, objDestino){
            let totalVotos = 0
            let porcentajeVotos = 0
            let mayor_votacion = objPartido.length > 0 ? objPartido.reduce((a, b) => a.total_votes > b.total_votes ? a.total_votes : b.total_votes) : 0
            objPartido.forEach(e => {
                totalVotos += e.total_votes
                porcentajeVotos += Math.round(100 * e.total_votes / mayor_votacion)
            })
            objDestino.promedio_asistencia = totalVotos / objPartido.length
            objDestino.porcentaje_asistencia = porcentajeVotos / objPartido.length
        },
    
        obtenerMasMenosVotados(){
            //Calculando el 10% del total de congresistas
            let tenPc = Math.round(this.data.length * .1);
            let sortArray = this.data.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct);
            this.estadisticas.menos_votados = sortArray.slice(0, tenPc);
            this.estadisticas.mas_votados = sortArray.slice(this.data.length - tenPc);
        },
    
        obtenerMasMenosLeales(){
            //Calculando el 10% del total de congresistas
            let tenPc = Math.round(this.data.length * .1);
            let sortArray = this.data.sort((a, b) => a.votes_with_party_pct - b.votes_with_party_pct);
            this.estadisticas.menos_votados = sortArray.slice(0, tenPc);
            this.estadisticas.mas_votados = sortArray.slice(this.data.length - tenPc);
        }    
    }
}