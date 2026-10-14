<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Plan de implementación de las buenas prácticas ganaderas
      p.mb-5 El plan de implementación transforma las brechas del diagnóstico en actividades con responsables, recursos, plazos y evidencias. Debe permitir tomar decisiones y comprobar resultados. Los tiempos y frecuencias que se presentan en los ejemplos son propuestas de organización que deben ajustarse a la realidad de cada predio, al plan sanitario y a las instrucciones aplicables, y no representan plazos oficiales de certificación.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Plan de implementación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El #[b plan de implementación] establece cómo se alcanzarán y mantendrán las condiciones de BPG. Parte del diagnóstico y define objetivos concretos para cada brecha, redactados con un resultado, un alcance y un plazo. Por ejemplo, si los tratamientos no se registran, el objetivo puede ser que, al finalizar cuatro semanas, todos los tratamientos nuevos estén registrados y los animales en periodo de retiro estén identificados, con una verificación semanal de su correspondencia con el inventario de medicamentos. Este objetivo exige revisar los formatos, capacitar al personal y comprobar la rutina, y no únicamente imprimir hojas de registro.
          p.mb-0 El documento incluye la identificación del predio, el alcance, el diagnóstico de referencia, los objetivos, las actividades, los responsables, los recursos, las fechas, los indicadores y los medios de verificación. Cada actividad debe corresponder a un hallazgo o a una necesidad justificada, y conviene asignar un código a cada brecha para seguirla desde su detección hasta su cierre. La siguiente tabla presenta un ejemplo:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img1.png', alt='').m-auto
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 8.
                span Ejemplo de plan de implementación
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto por mejorar
                      th.ajuste-border-tabla.texto-left Acción y recursos
                      th.ajuste-border-tabla.texto-left Responsable y plazo
                      th.ajuste-border-tabla.texto-left Indicador
                      th.texto-left Evidencia
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Almacenamiento de medicamentos
                      td.ajuste-border-tabla.texto-left Organizar un área exclusiva con estantería y señalización
                      td.ajuste-border-tabla.texto-left Encargado, 1 mes
                      td.ajuste-border-tabla.texto-left Área organizada
                      td.texto-left Registro fotográfico e inventario
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Registros sanitarios
                      td.ajuste-border-tabla.texto-left Implementar los formatos sanitarios
                      td.ajuste-border-tabla.texto-left Responsable sanitario, 15 días
                      td.ajuste-border-tabla.texto-left Registros diligenciados
                      td.texto-left Formatos diligenciados
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bioseguridad
                      td.ajuste-border-tabla.texto-left Establecer el protocolo de ingreso con señalización y registro
                      td.ajuste-border-tabla.texto-left Administrador, 1 mes
                      td.ajuste-border-tabla.texto-left Protocolo implementado
                      td.texto-left Documento y registro de ingreso
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img2.png', alt='').m-auto
            .col-xl
              .row.align-items-center.mb-3
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t4/img3.svg', alt='' style="width: 80px").m-auto
                .col-xl
                  p.mb-0 Una evidencia fotográfica puede demostrar una adecuación física, pero debe acompañarse de registros cuando se necesita probar la continuidad. Por ejemplo, la organización de una bodega se verifica también mediante el control de ingresos, salidas, vencimientos y condiciones de almacenamiento.
              p.mb-0 Las actividades del plan se organizan en #[b componentes]: sanidad y bioseguridad, alimentación y agua, bienestar animal, instalaciones y equipos, medicamentos, seguridad del personal, manejo ambiental y gestión documental. En medicamentos, por ejemplo, el plan relaciona el almacenamiento, el inventario, el personal autorizado, los registros y el retiro; en agua, la protección de la fuente, el mantenimiento de la distribución, la limpieza, los controles de calidad según el riesgo y las alternativas de abastecimiento. Una actividad puede contribuir a varios componentes, pero debe tener un responsable principal y una sola programación para evitar duplicar su seguimiento. Además, repetir una lista general de actividades sin relacionarla con el diagnóstico dificulta decidir cuáles requieren atención y recursos. La formulación del plan sigue el siguiente procedimiento:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 1. Revisar los hallazgos
                p.mb-0 Relacionar cada hallazgo del diagnóstico con el requisito aplicable.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img4.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img5.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Paso 2. Priorizar
                p.mb-0 Atender primero las situaciones que comprometen de inmediato a personas, animales o productos, y los incumplimientos de criterios fundamentales. La facilidad o el bajo costo de una actividad no justifican dejar sin control un peligro de mayor consecuencia.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 3. Analizar las causas
                p.mb-0 Distinguir entre la corrección, que resuelve la situación puntual, y la acción correctiva, que elimina su causa. Por ejemplo, retirar un medicamento vencido es una corrección, mientras que establecer la revisión de vencimientos, la rotación y el inventario es una acción correctiva.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img6.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img7.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Paso 4. Definir la acción
                p.mb-0 Establecer las actividades, los responsables, el presupuesto y la forma de verificación.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 5. Cerrar la acción
                p.mb-0 Darla por cerrada solo cuando se compruebe su ejecución y su eficacia durante un periodo definido.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img8.png', alt='' style="width: 300px").m-auto
      p.mb-5 La siguiente tabla presenta ejemplos de acciones correctivas:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 9.
                span Ejemplos de acciones correctivas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Hallazgo
                      th.ajuste-border-tabla.texto-left Causa posible
                      th.ajuste-border-tabla.texto-left Acción correctiva
                      th.texto-left Verificación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bebedero sucio
                      td.ajuste-border-tabla.texto-left No existe rutina de limpieza
                      td.ajuste-border-tabla.texto-left Establecer frecuencia y responsable
                      td.texto-left Inspección y registro
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tratamientos sin registro
                      td.ajuste-border-tabla.texto-left El personal desconoce el formato
                      td.ajuste-border-tabla.texto-left Capacitar y hacer obligatorio el registro
                      td.texto-left Auditoría de registros
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Animal nuevo sin cuarentena
                      td.ajuste-border-tabla.texto-left No existe un área definida
                      td.ajuste-border-tabla.texto-left Establecer zona y protocolo de ingreso
                      td.texto-left Revisión de nuevos ingresos
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mortalidad sin causa registrada
                      td.ajuste-border-tabla.texto-left No existe protocolo de atención o necropsia
                      td.ajuste-border-tabla.texto-left Crear registro y procedimiento diagnóstico
                      td.texto-left Revisión mensual
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Medicamento vencido
                      td.ajuste-border-tabla.texto-left Inventario desorganizado
                      td.ajuste-border-tabla.texto-left Separar, retirar y establecer control de vencimientos
                      td.texto-left Inventario periódico
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cojeras frecuentes
                      td.ajuste-border-tabla.texto-left Piso, humedad o manejo podal deficientes
                      td.ajuste-border-tabla.texto-left Evaluar la causa y establecer un programa preventivo
                      td.texto-left Seguimiento de la prevalencia
      p.mb-5 El plan incluye también #[b contingencias] para la interrupción del suministro de agua o alimento, los brotes sanitarios, los incendios y las inundaciones. Cada escenario debe indicar la señal de activación, la persona que decide, los contactos, los recursos alternativos y las condiciones para retomar la operación. La respuesta debe proteger primero a las personas y evitar intervenciones que aumenten su exposición. Los principales escenarios se presentan en la siguiente tabla:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 10.
                span Escenarios de contingencia
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Emergencia
                      th.ajuste-border-tabla.texto-left Respuesta inicial
                      th.texto-left Recursos que deben identificarse
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Falta de agua
                      td.ajuste-border-tabla.texto-left Activar una fuente alternativa y priorizar a los animales vulnerables
                      td.texto-left Tanques, reservorios, proveedores y transporte de agua
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Falta de alimento
                      td.ajuste-border-tabla.texto-left Activar la reserva y ajustar el manejo por categorías
                      td.texto-left Forraje conservado, concentrado, suplementos y proveedores
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Brote sanitario
                      td.ajuste-border-tabla.texto-left Aislar, restringir movimientos y contactar al profesional o a la autoridad, según corresponda
                      td.texto-left Área de aislamiento, desinfectantes y registros
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Incendio
                      td.ajuste-border-tabla.texto-left Evacuar a los animales a una zona segura, si es posible sin aumentar el riesgo
                      td.texto-left Rutas de evacuación, personal y equipos
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inundación
                      td.ajuste-border-tabla.texto-left Trasladar a los animales a zonas altas y seguras
                      td.texto-left Potreros alternos, transporte y agua
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mortalidad inusual
                      td.ajuste-border-tabla.texto-left Registrar, aislar según el riesgo y solicitar diagnóstico
                      td.texto-left Contactos veterinarios, laboratorio y protocolo
      p.mb-0 Para estimar la #[b autonomía de agua] se divide el volumen útil de la reserva entre el consumo diario previsto, considerando el consumo de los animales, la limpieza y otros usos, así como las pérdidas y la variación de la demanda. Este cálculo no reemplaza la evaluación de la calidad de la fuente alternativa.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Estándares de certificación
      p.mb-5 Los #[b estándares de certificación] corresponden a los requisitos que la autoridad utiliza para evaluar el predio. Para ovinos y caprinos, la Resolución ICA 20277 de 2018 y la lista de chequeo oficial orientan la preparación para la certificación BPG. Estos requisitos son verificables, se aplican según las condiciones del sistema productivo y se clasifican por importancia, por lo que su interpretación debe conservar el alcance de la norma y las instrucciones de la lista. La preparación para la certificación comprende las siguientes etapas:
      .row.justify-content-center.mb-0
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 1. Consultar el instrumento vigente
                p.mb-0 Identificar los requisitos aplicables al sistema productivo del predio.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img9.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img10.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Paso 2. Contrastar la práctica
                p.mb-0 Comparar las prácticas del predio con los soportes disponibles y cerrar las brechas.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 3. Realizar una inspección interna
                p.mb-0 Revisar los animales, las instalaciones, los documentos y la comprensión del personal. Esta visita permite preparar el predio, pero no otorga la certificación.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img11.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img12.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Paso 4. Solicitar la evaluación oficial
                p.mb-0 Seguir el procedimiento del ICA y conservar los soportes requeridos, el resultado de la auditoría y las acciones derivadas.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 5. Mantener el cumplimiento
                p.mb-0 Sostener las prácticas después de obtener la certificación y revisarlas cuando cambien el sistema productivo, la infraestructura o los requisitos aplicables.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img13.png', alt='' style="width: 300px").m-auto
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Programación de la implementación
      p.mb-5 #[b Programar] consiste en ordenar las actividades según sus dependencias y la disponibilidad de recursos. Por ejemplo, la compra de una estantería precede a la reorganización de la bodega, y la aprobación de un protocolo precede a la capacitación sobre su versión final. Algunas tareas pueden desarrollarse simultáneamente, siempre que no compitan por el personal o por instalaciones críticas. La programación define tres aspectos, que se presentan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Responsables")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Responsables
              p.mb-0 Cada actividad identifica quién la ejecuta, quién la supervisa y quién la verifica. En predios pequeños una persona puede asumir varias funciones, pero estas deben quedar explícitas. La delegación incluye explicar el alcance, la fecha, los recursos y la evidencia esperada, y si se cambia el responsable, se realiza una entrega de información para que la actividad continúe.
        .py-3.py-md-4(titulo="Recursos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Recursos
              p.mb-0 Se estiman las cantidades y los costos por actividad, se distingue la inversión inicial de los gastos recurrentes y se verifica la disponibilidad. La compra de un equipo debe considerar la capacitación, la limpieza, los repuestos y la calibración o verificación cuando corresponda. Cuando los recursos son insuficientes, se establece una medida temporal segura, se documenta la limitación y se fija cómo se completará la intervención; la carencia de presupuesto no constituye evidencia de cumplimiento.
        .py-3.py-md-4(titulo="Tiempos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Tiempos
              p.mb-0 Para cada actividad se estiman la duración y las fechas de inicio y finalización, considerando la adquisición de insumos, la disponibilidad de asesoría, las condiciones climáticas y las actividades productivas. Se distingue una adecuación única de una rutina; por ejemplo, construir un área es una intervención, mientras que revisarla y mantenerla exige una frecuencia posterior. Las tareas urgentes se controlan de inmediato según su riesgo, y las de mediano o largo plazo se programan con hitos intermedios y medidas de protección mientras se ejecutan.
      p.mb-5 La asignación de responsables debe respetar las competencias de cada persona. La formulación de indicaciones sanitarias y prescripciones corresponde al profesional competente, y el personal operativo ejecuta únicamente las tareas para las cuales está preparado y autorizado. La siguiente tabla presenta un ejemplo de asignación:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 11.
                span Responsables de la implementación
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Actividad
                      th.texto-left Responsable
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Elaboración del plan sanitario
                      td.texto-left Médico veterinario o médico veterinario zootecnista competente
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aplicación de medidas de bioseguridad
                      td.texto-left Administrador y trabajadores
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Registros sanitarios
                      td.texto-left Responsable de la explotación
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Manejo de medicamentos
                      td.texto-left Personal autorizado y capacitado
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Capacitación del personal
                      td.texto-left Responsable de la unidad productiva
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mantenimiento de instalaciones
                      td.texto-left Administrador u operario
      p.mb-0 Los plazos se revisan cuando cambia una dependencia, y se deja constancia de la causa, del nuevo compromiso y de su efecto sobre las demás actividades.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Cronograma
      p.mb-5 El #[b cronograma] representa las actividades en el tiempo y permite comparar lo programado con lo ejecutado. Incluye la actividad, el responsable, las fechas de inicio y finalización, la frecuencia, la evidencia y el estado, y cuando existen dependencias se identifica la actividad previa. Los #[b hitos], como un protocolo aprobado o un área habilitada, permiten comprobar productos concretos sin confundirlos con la simple realización de reuniones. La siguiente tabla presenta un ejemplo:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 12.
                span Ejemplo de cronograma de implementación
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Actividad
                      th.ajuste-border-tabla.texto-left Responsable
                      th.ajuste-border-tabla.texto-left Periodo
                      th.ajuste-border-tabla.texto-left Frecuencia
                      th.texto-left Evidencia
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Elaborar diagnóstico BPG
                      td.ajuste-border-tabla.texto-left Administrador
                      td.ajuste-border-tabla.texto-left Semanas 1 y 2
                      td.ajuste-border-tabla.texto-left Una vez
                      td.texto-left Diagnóstico
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Organizar medicamentos
                      td.ajuste-border-tabla.texto-left Responsable sanitario
                      td.ajuste-border-tabla.texto-left Semanas 2 y 3
                      td.ajuste-border-tabla.texto-left Una vez
                      td.texto-left Registro y fotografía
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Capacitar trabajadores
                      td.ajuste-border-tabla.texto-left Administrador
                      td.ajuste-border-tabla.texto-left Semana 3
                      td.ajuste-border-tabla.texto-left Trimestral
                      td.texto-left Lista de asistencia y evaluación
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Revisar instalaciones
                      td.ajuste-border-tabla.texto-left Administrador
                      td.ajuste-border-tabla.texto-left Semana 4
                      td.ajuste-border-tabla.texto-left Mensual
                      td.texto-left Lista de chequeo
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Actualizar registros sanitarios
                      td.ajuste-border-tabla.texto-left Responsable sanitario
                      td.ajuste-border-tabla.texto-left Desde la semana 1
                      td.ajuste-border-tabla.texto-left Permanente
                      td.texto-left Registros
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Limpieza y desinfección
                      td.ajuste-border-tabla.texto-left Operario
                      td.ajuste-border-tabla.texto-left Desde la semana 1
                      td.ajuste-border-tabla.texto-left Según protocolo
                      td.texto-left Registro
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="fade-right")
            p.mb-0 La #[b frecuencia] de las actividades puede definirse por evento, de forma rutinaria o según los resultados. Un tratamiento se registra en cada aplicación, el inventario cambia con cada ingreso o salida y la revisión de indicadores se programa por periodo. La inspección de los animales y del suministro de agua forma parte de la rutina diaria, mientras que una evaluación especializada responde a señales y criterios técnicos. La frecuencia se revisa cuando aparecen fallas; por ejemplo, si los bebederos se contaminan antes de la siguiente limpieza, el procedimiento debe ajustar la frecuencia o controlar la fuente de suciedad.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img17.png', alt='').m-auto
        .col-xl-4.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t2/img2.svg', alt='' style="width: 70px")
          p.mb-0 La utilidad del cronograma depende de actualizarlo con evidencias y fechas reales. Para su #[b interpretación], el seguimiento distingue las actividades cumplidas, en proceso, pendientes, vencidas y reprogramadas. Una actividad cumplida es aquella ejecutada y comprobada; una vencida es la que superó el plazo sin cierre, y una reprogramada exige explicar la causa, establecer una nueva fecha y mantener controlado el riesgo asociado. 
      p.mb-5 El cumplimiento de un periodo se calcula de la siguiente manera:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-10
          .call-to-action__text  
            p.mb-0 #[b Cumplimiento del periodo (%) =] (actividades cumplidas con evidencia ÷ actividades programadas para el periodo) × 100
      p Por ejemplo, si se programan 20 actividades y se completan 16, el cumplimiento es (16 ÷ 20) × 100 = 80 %. Para que este indicador sea comparable, debe mantenerse un criterio estable de conteo y registrarse los cambios de programación. Este porcentaje informa sobre la ejecución del plan y no equivale al resultado de la certificación BPG.
      p.mb-0 La #[b eficacia] de las acciones se revisa, además, mediante los indicadores del problema que las originó. Haber capacitado al personal no demuestra por sí mismo que todos los tratamientos se registren; ese resultado se verifica comparando los eventos realizados con los registros completos. Así se diferencia el avance del plan de la mejora real del proceso.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
