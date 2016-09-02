(function () {
    'use strict';

    angular.module('app.requerimientos')
    .controller('requerimientosController', requerimientosController)
    
    requerimientosController.$inject = ['ngToast','metricasService'];
    
    function requerimientosController(ngToast,metricasService){
        var vm = this;
        
        vm.config_header = {
            title: 'Requerimientos de calidad de software',
            breadcrumbs: [
                {
                    link: false,
                    label: 'Listado',
                    active: true,
                },
                {
                    link: '/requerimientos/alta',
                    label: 'Alta',
                    active: false,
                },
            ]
        }
        
        vm.metricas = metricasService.get();
        
        vm.requerimientos = [
            {
                descripcion: 'Activar el monitoreo de las cámaras de seguridad del hogar',
                importancia: {
                    id: 2,
                    label: 'Media'
                },
                metrica: vm.metricas[8],
                valor: 55,
            },
            {
                descripcion: 'Desactivar el monitoreo de las cámaras de seguridad del hogar',
                importancia: {
                    id: 2,
                    label: 'Media'
                },
                metrica: vm.metricas[8],
                valor: 55,
            },
            {
                descripcion: 'Activar los sensores de movimiento del hogar',
                importancia: {
                    id: 3,
                    label: 'Alta'
                },
                metrica: vm.metricas[7],
                valor: 90,
            },
            {
                descripcion: 'Desactivar los sensores de movimiento del hogar',
                importancia: {
                    id: 3,
                    label: 'Alta'
                },
                metrica: vm.metricas[7],
                valor: 90,
            },
            {
                descripcion: 'Detectar a través de un sensores de movimiento',
                importancia: {
                    id: 4,
                    label: 'Muy alta'
                },
                metrica: vm.metricas[7],
                valor: 95,
            },
            {
                descripcion: 'Cerrar puertas del hogar que dan al exterior',
                importancia: {
                    id: 4,
                    label: 'Muy alta'
                },
                metrica: vm.metricas[2],
                valor: 60,
            },
            {
                descripcion: 'Abrir puertas del hogar que dan al exterior',
                importancia: {
                    id: 3,
                    label: 'Alta'
                },
                metrica: vm.metricas[2],
                valor: 60,
            },
            {
                descripcion: 'Sonar alarma',
                importancia: {
                    id: 5,
                    label: 'imprescindible'
                },
                metrica: vm.metricas[3],
                valor: 0,
            },
            {
                descripcion: 'Apagar alarma',
                importancia: {
                    id: 5,
                    label: 'imprescindible'
                },
                metrica: vm.metricas[3],
                valor: 0,
            },
            {
                descripcion: 'Cerrar ventanas del hogar que dan al exterior',
                importancia: {
                    id: 3,
                    label: 'Alta'
                },
                metrica: vm.metricas[2],
                valor: 65,
            },
            {
                descripcion: 'Abrir ventanas del hogar que dan al exterior',
                importancia: {
                    id: 3,
                    label: 'Alta'
                },
                metrica: vm.metricas[2],
                valor: 65,
            },
            {
                descripcion: 'Detectar humo en una habitación del hogar',
                importancia: {
                    id: 4,
                    label: 'Muy alta'
                },
                metrica: vm.metricas[3],
                valor: 0,
            },
            {
                descripcion: 'Detectar fuga de gas en el hogar',
                importancia: {
                    id: 4,
                    label: 'Muy alta'
                },
                metrica: vm.metricas[3],
                valor: 0,
            },
            {
                descripcion: 'Encender luces de las habitaciones del hogar',
                importancia: {
                    id: 1,
                    label: 'Baja'
                },
                metrica: vm.metricas[0],
                valor: 75,
            },
            {
                descripcion: 'Encender/Apagar aspersores de agua',
                importancia: {
                    id: 0,
                    label: 'Muy baja'
                },
                metrica: vm.metricas[0],
                valor: 60,
            },
            {
                descripcion: 'Configuración de horarios para encendido/apagado de las cámaras de seguridad del hogar',
                importancia: {
                    id: 2,
                    label: 'Media'
                },
                metrica: vm.metricas[5],
                valor: 75,
            },
            {
                descripcion: 'Configuración de horarios para encendido/apagado de sensores de movimiento del hogar',
                importancia: {
                    id: 2,
                    label: 'Media'
                },
                metrica: vm.metricas[5],
                valor: 75,
            },
            {
                descripcion: 'Configuración de horarios de apertura/cierre de puertas del hogar que den al exterior',
                importancia: {
                    id: 2,
                    label: 'Media'
                },
                metrica: vm.metricas[5],
                valor: 75,
            },
            {
                descripcion: 'Configuración de horarios de apertura/cierre de ventanas del hogar que dan al exterior',
                importancia: {
                    id: 2,
                    label: 'Media'
                },
                metrica: vm.metricas[5],
                valor: 75,
            },
            {
                descripcion: 'Configuración de alarma ( sonido, volumen, contraseña )',
                importancia: {
                    id: 1,
                    label: 'Baja'
                },
                metrica: vm.metricas[5],
                valor: 75,
            },
            {
                descripcion: 'Configuración de luces ( tiempo de apagado, intensidad, etc )',
                importancia: {
                    id: 1,
                    label: 'Baja'
                },
                metrica: vm.metricas[5],
                valor: 75,
            },
            {
                descripcion: 'Configurar de aspersores (intensidad de agua, horarios, etc)',
                importancia: {
                    id: 0,
                    label: 'Muy baja'
                },
                metrica: vm.metricas[5],
                valor: 75,
            },
            {
                descripcion: 'Generar informes de fallos de los dispositivos y/o sistema en general',
                importancia: {
                    id: 2,
                    label: 'Media'
                },
                metrica: vm.metricas[5],
                valor: 95,
            },
            {
                descripcion: 'Autentificación',
                importancia: {
                    id: 2,
                    label: 'Media'
                },
                metrica: vm.metricas[2],
                valor: 95,
            },
            {
                descripcion: 'Cambiar contraseña de administrador',
                importancia: {
                    id: 3,
                    label: 'Alta'
                },
                metrica: vm.metricas[2],
                valor: 95,
            },
            {
                descripcion: 'Configurar horarios de consumo de medicamentos',
                importancia: {
                    id: 3,
                    label: 'Alta'
                },
                metrica: vm.metricas[5],
                valor: 75,
            },
            {
                descripcion: 'Configurar horarios de injerto de agua',
                importancia: {
                    id: 3,
                    label: 'Alta'
                },
                metrica: vm.metricas[5],
                valor: 75,
            },
            {
                descripcion: 'Configuración de funcionalidades',
                importancia: {
                    id: 2,
                    label: 'Media'
                },
                metrica: vm.metricas[5],
                valor: 75,
            },
            {
                descripcion: 'Notificaciones y avisos por pantalla',
                importancia: {
                    id: 4,
                    label: 'Muy alta'
                },
                metrica: vm.metricas[3],
                valor: 5,
            },
            
        ]
    }
    
})();