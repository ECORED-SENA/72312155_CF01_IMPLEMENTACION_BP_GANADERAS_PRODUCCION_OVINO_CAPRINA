<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Implementación de las buenas prácticas ganaderas en la producción ovino-caprina',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar que usted apropie los fundamentos, requisitos y procedimientos para planear y elaborar el plan de implementación de las Buenas Prácticas Ganaderas en unidades productivas ovino-caprinas.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de las Buenas Prácticas Ganaderas en la producción primaria?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Controlar peligros que afectan sanidad, inocuidad, bienestar, seguridad y ambiente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Limitar las BPG únicamente a la limpieza de corrales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir los registros por inspecciones ocasionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aplicar iguales controles sin considerar el sistema productivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento de las BPG permite reconstruir lo ocurrido con animales, lotes e insumos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prevención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Trazabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Responsabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejora continua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál norma establece los requisitos de certificación BPG para la producción primaria de ovinos y caprinos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolución ICA 20277 de 2018.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Resolución ICA 90464 de 2021.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolución MADR 136 de 2020.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resolución ICA 00016409 de 2024.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué instrumento del ICA se utiliza como lista de chequeo BPG ovino-caprina?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Forma 3-860 ICA.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Plan sanitario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ficha de caracterización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Matriz de riesgos laborales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué porcentaje de cumplimiento exige un criterio Fundamental en la certificación BPG?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '60 %',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '70 %',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '80 %',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '100 %',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué debe hacer usted antes de formular el plan de implementación de BPG?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Caracterizar y diagnosticar la unidad productiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solicitar directamente la certificación oficial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los registros existentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Asignar criterios según su intuición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué fuentes debe combinar el diagnóstico para identificar fortalezas, brechas y peligros?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inspección, entrevistas y revisión documental.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente entrevistas al personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo registros de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente fotografías del predio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta permite visualizar relaciones entre actividades desde el ingreso hasta la salida de los animales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mapa de procesos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Inventario económico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ficha de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registro de asistencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué debe diferenciar el diagnóstico de los recursos de la unidad productiva?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La existencia de la suficiencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La sanidad de la inocuidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La capacitación de la documentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La prevención de la trazabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'En seguridad y salud en el trabajo, ¿qué diferencia existe entre peligro y riesgo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El peligro causa daño; el riesgo relaciona posibilidad y gravedad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El riesgo causa daño; el peligro solo registra incidentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ambos conceptos significan exactamente lo mismo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El peligro se aplica únicamente a productos químicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál control debe priorizarse antes de depender únicamente de elementos de protección personal?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar o sustituir el peligro cuando sea posible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Entregar cualquier EPP disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar el peligro sin intervenirlo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Trasladar toda responsabilidad al trabajador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿De qué depende principalmente la selección de los elementos de protección personal?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tarea, sustancia, vía de exposición y condiciones de uso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Preferencia personal del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Color y apariencia del equipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disponibilidad del elemento más económico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué transforma el plan de implementación de BPG en actividades verificables?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las brechas identificadas en el diagnóstico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Las opiniones sin evidencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los documentos archivados sin revisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las actividades ajenas al predio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál conjunto corresponde a elementos esenciales del plan de implementación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actividades, responsables, recursos, fechas, indicadores y evidencias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo actividades y fechas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente responsables y presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo registros y fotografías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué acción corresponde a la preparación para la certificación BPG antes de solicitar la evaluación oficial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar una inspección interna.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar los hallazgos documentados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Asignar nuevas categorías a los criterios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Considerar la inspección interna como certificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué función cumple el cronograma dentro del plan de implementación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Representar actividades en el tiempo y comparar programación con ejecución.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar el diagnóstico de la unidad productiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Otorgar automáticamente la certificación BPG.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de evidencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuándo se considera cumplida una actividad del cronograma?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando fue ejecutada y comprobada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuando fue solamente programada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuando superó el plazo sin cierre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando fue reprogramada sin justificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la función principal de un protocolo en la implementación de BPG?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Describir cómo ejecutar una actividad de forma consistente y segura.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrar únicamente actividades ya terminadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir todos los documentos oficiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conservar datos sin indicar procedimientos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Cuándo debe completarse un registro de una actividad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al ejecutarla o inmediatamente después.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Antes de realizarla como evidencia anticipada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo al finalizar cada año.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente durante una auditoría.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué caracteriza a los documentos legales y oficiales del sistema documental?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Respaldan registros, autorizaciones y documentación de movilización aplicable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Describen solamente procedimientos de limpieza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registran exclusivamente pesos y producción de leche.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituyen los protocolos técnicos del predio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
