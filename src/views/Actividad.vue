<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar el conocimiento sobre las herramientas y funcionalidades de la barra de herramientas de Adobe Illustrator.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la barra de herramientas esencial en Adobe Illustrator?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ofrecer acceso a todas las herramientas especializadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Simplificar la interfaz con herramientas básicas comunes.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Crear ilustraciones en 3D.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Configurar el tamaño del documento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué herramienta permite seleccionar varios objetos al mismo tiempo manteniendo presionada la tecla Shift?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Herramienta de selección directa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Herramienta de selección de grupos.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Herramienta de selección.', esCorrecta: true },
            { id: 'd', texto: 'Herramienta lazo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la herramienta utilizada para dibujar líneas a mano alzada en Adobe Illustrator?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Herramienta pluma.', esCorrecta: false },
            { id: 'b', texto: 'Herramienta lápiz.', esCorrecta: true },
            { id: 'c', texto: 'Herramienta rectángulo.', esCorrecta: false },
            { id: 'd', texto: 'Herramienta arco.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué herramienta se utiliza para aplicar transiciones suaves de color dentro de un objeto en Illustrator?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Herramienta pluma.', esCorrecta: false },
            { id: 'b', texto: 'Herramienta malla.', esCorrecta: true },
            { id: 'c', texto: 'Herramienta cuentagotas.', esCorrecta: false },
            { id: 'd', texto: 'Herramienta espiral.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué hace la herramienta varita mágica en Adobe Illustrator?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dibuja líneas rectas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Selecciona objetos con atributos similares.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Permite mover objetos de un lugar a otro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambia el color de los objetos seleccionados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la función principal de la herramienta mesa de trabajo?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Crear degradados.', esCorrecta: false },
            { id: 'b', texto: 'Dibujar rectángulos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Organizar el espacio de trabajo en el lienzo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Seleccionar objetos en grupo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué herramienta se utiliza para escribir texto a lo largo de una línea curva?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Herramienta de texto en trazado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Herramienta de texto en área.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Herramienta de texto vertical.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Herramienta de texto.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes herramientas permite transformar objetos rotando y escalando individualmente sus esquinas?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Herramienta rotar.', esCorrecta: false },
            { id: 'b', texto: 'Herramienta escala.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Herramienta de transformación libre.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Herramienta de selección directa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué herramienta permite seleccionar puntos de ancla individuales para modificar la forma de un objeto en Illustrator?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Herramienta de selección directa.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Herramienta de selección.', esCorrecta: false },
            { id: 'c', texto: 'Herramienta lazo.', esCorrecta: false },
            { id: 'd', texto: 'Herramienta pluma.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué herramienta en Adobe Illustrator se utiliza para crear formas y modificar su grosor en puntos específicos de un trazado?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Herramienta pluma.', esCorrecta: false },
            { id: 'b', texto: 'Herramienta anchura.', esCorrecta: true },
            { id: 'c', texto: 'Herramienta pincel.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Herramienta bote de pintura interactiva.',
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
  computed: {},
  methods: {},
}
</script>
