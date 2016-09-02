(function () {
    'use strict';

    angular.module('app.riesgos')
    .controller('analisisRiesgosController', analisisController)
    
    analisisController.$inject = ['riesgosService'];
    
    function analisisController(riesgosService){
        var vm = this;
        
         vm.config_header = {
            title: 'Identificación de Riesgos',
            breadcrumbs: [
                {
                    link: false,
                    label: 'Listado',
                    active: true,
                },
            ]
        }
        
        vm.categoria_riesgos = riesgosService.getCategorias();
        vm.impacto_riesgos = riesgosService.getImpactos();
        vm.estrategias_riesgos = riesgosService.getEstrategias();
        
        vm.riesgos = [
            {
              id: 1,
              descripcion: "Errores de diseño detectados en la etapa de codificación ",
              probabilidad: "80%",
              impacto: vm.impacto_riesgos[2],
              estrategia: vm.estrategias_riesgos[0],
              responsable: "Juan",
              estado: {
                  id: 0,
                  label: "No ocurrido"
              }
            }, 
            {
              id: 2,
              descripcion: "Cambio de requisistos ",
              probabilidad: "70%",
              impacto: vm.impacto_riesgos[3],
              estrategia: vm.estrategias_riesgos[0],
              responsable: "Mariano",
              estado: {
                  id: 0,
                  label: "No ocurrido"
              }
            }, 
            {
              id: 3,
              descripcion: "El personal necesita un tiempo extra para acostumbrarse a trabajar con herramientas o entornos nuevos",
              probabilidad: "70%",
              impacto: vm.impacto_riesgos[3],
              estrategia: vm.estrategias_riesgos[0],
              responsable: "Juan",
              estado: {
                  id: 0,
                  label: "No ocurrido"
              }
            }, 
            {
              id: 4,
              descripcion: "Fecha de entrega muy ajustada",
              probabilidad: "50%",
              impacto: vm.impacto_riesgos[2],
              estrategia: vm.estrategias_riesgos[0],
              responsable: "Mariano",
              estado: {
                  id: 0,
                  label: "No ocurrido"
              }
            }, 
            {
              id: 5,
              descripcion: "Crecimiento imprevisto de complejidad del código",
              probabilidad: "50%",
              impacto: vm.impacto_riesgos[2],
              estrategia: vm.estrategias_riesgos[1],
              responsable: "Sofia",
              estado: {
                  id: 1,
                  label: "Ocurrido"
              }
            }, 
            {
              id: 6,
              descripcion: "Los espacios están sobreutilizados, son ruidosos o distraen ",
              probabilidad: "65%",
              impacto: vm.impacto_riesgos[3],
              estrategia: vm.estrategias_riesgos[0],
              responsable: "Pedro",
              estado: {
                  id: 0,
                  label: "No ocurrido"
              }
            }, 
            {
              id: 7,
              descripcion: "Falta de disponibilidad de algún miembro del equipo en un momento clave ",
              probabilidad: "60%",
              impacto: vm.impacto_riesgos[3],
              estrategia: vm.estrategias_riesgos[2],
              responsable: "Micaela",
              estado: {
                  id: 1,
                  label: "Ocurrido"
              }
            }, 
            {
              id: 8,
              descripcion: "La planificación no incluye tareas necesarias",
              probabilidad: "40%",
              impacto: vm.impacto_riesgos[2],
              estrategia: vm.estrategias_riesgos[0],
              responsable: "Juan",
              estado: {
                  id: 0,
                  label: "No ocurrido"
              }
            }, 
            {
              id: 9,
              descripcion: "Los usuarios finales insisten en nuevos requisitos.",
              probabilidad: "30%",
              impacto: vm.impacto_riesgos[2],
              estrategia: vm.estrategias_riesgos[0],
              responsable: "Micaela",
              estado: {
                  id: 1,
                  label: "Ocurrido"
              }
            }, 
            {
              id: 10,
              descripcion: "El desarrollo de una interfaz de usuario inadecuada requiere volver a diseñarla y a implementarla",
              probabilidad: "40%",
              impacto: vm.impacto_riesgos[3],
              estrategia: vm.estrategias_riesgos[1],
              responsable: "Pedro",
              estado: {
                  id: 0,
                  label: "No ocurrido"
              }
            }, 
            {
              id: 11,
              descripcion: "Subestimación de la magnitud del software a desarrollar",
              probabilidad: "35%",
              impacto: vm.impacto_riesgos[3],
              estrategia: vm.estrategias_riesgos[2],
              responsable: "Carlos",
              estado: {
                  id: 0,
                  label: "No ocurrido"
              }
            }, 
            {
              id: 12,
              descripcion: "Falta de capacitación del equipo de desarrollo",
              probabilidad: "30%",
              impacto: vm.impacto_riesgos[3],
              estrategia: vm.estrategias_riesgos[2],
              responsable: "Carlos",
              estado: {
                  id: 0,
                  label: "No ocurrido"
              }
            }, 
            {
              id: 13,
              descripcion: "Desmotivación del equipo de desarrollo",
              probabilidad: "20%",
              impacto: vm.impacto_riesgos[4],
              estrategia: vm.estrategias_riesgos[1],
              responsable: "Micaela",
              estado: {
                  id: 0,
                  label: "No ocurrido"
              }
            }, 
            {
              id: 14,
              descripcion: "Menor reutilización de lo previsto ",
              probabilidad: "25%",
              impacto: vm.impacto_riesgos[3],
              estrategia: vm.estrategias_riesgos[1],
              responsable: "Laura",
              estado: {
                  id: 0,
                  label: "No ocurrido"
              }
            }, 
            {
              id: 15,
              descripcion: "La estructura inadecuada de un equipo reduce la productividad",
              probabilidad: "25%",
              impacto: vm.impacto_riesgos[3],
              estrategia: vm.estrategias_riesgos[0],
              responsable: "Matias",
              estado: {
                  id: 0,
                  label: "No ocurrido"
              }
            }, 
           
            
        ]
        
    }
    
})();