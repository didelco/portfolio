import Image from "next/image";
import ProjHeader from "../../components/projHeader";
import Section from "./../../components/section";
export default function Me() {
	const menu = ["home", "work", "me"];
	return (
		<div className='flex  justify-center  pt-16 w-full'>
			<div className=' max-w-4xl flex flex-col gap-12 '>
				<Image
					className=' aspect-auto'
					src='/photos/datadis_main.jpg'
					width={968}
					height={500}
					alt='Accede a los consumos eléctricos de todos tus contratos
En Datadis te conectamos con tus datos de consumo eléctrico, en cualquier distribuidora donde esté conectado tu suministro.'
				/>
				<Section
					line={true}
					title='Background'>
					Especifica los objetivos que se deben lograr con el diseño del producto. ¿Qué problemas o necesidades debe abordar? ¿Cuáles son las metas comerciales o de experiencia del
					usuario que se desean alcanzar? Establecer objetivos claros ayudará a orientar el caso práctico.
				</Section>
				<Section
					line={true}
					title='Objetivos'>
					Especifica los objetivos que se deben lograr con el diseño del producto. ¿Qué problemas o necesidades debe abordar? ¿Cuáles son las metas comerciales o de experiencia del
					usuario que se desean alcanzar? Establecer objetivos claros ayudará a orientar el caso práctico.
				</Section>
				<Section
					line={true}
					title='Investigación de mercado'>
					Detalla la investigación que se ha realizado sobre el mercado relevante y los usuarios potenciales del producto. Comparte datos demográficos, tendencias, competidores y
					cualquier otra información pertinente que ayude a comprender el entorno en el que se lanzará el producto.
				</Section>
				<div className='w-full flex justify-center items-center h-32 bg-neutral text-neutral-content text-4xl font-bold'>Deep Dive </div>
				<Section
					line={true}
					title='Background'>
					Especifica los objetivos que se deben lograr con el diseño del producto. ¿Qué problemas o necesidades debe abordar? ¿Cuáles son las metas comerciales o de experiencia del
					usuario que se desean alcanzar? Establecer objetivos claros ayudará a orientar el caso práctico.
				</Section>
				<Section
					line={true}
					title='Objetivos'>
					Especifica los objetivos que se deben lograr con el diseño del producto. ¿Qué problemas o necesidades debe abordar? ¿Cuáles son las metas comerciales o de experiencia del
					usuario que se desean alcanzar? Establecer objetivos claros ayudará a orientar el caso práctico.
				</Section>
				<Section
					line={true}
					title='Investigación de mercado'>
					Detalla la investigación que se ha realizado sobre el mercado relevante y los usuarios potenciales del producto. Comparte datos demográficos, tendencias, competidores y
					cualquier otra información pertinente que ayude a comprender el entorno en el que se lanzará el producto.
				</Section>
				<Section
					line={true}
					title='Análisis de usuario'>
					Describe el proceso de análisis de usuarios que se ha llevado a cabo para comprender las necesidades, deseos y comportamientos de los usuarios. Puedes incluir
					entrevistas, encuestas, análisis de datos y cualquier otra técnica utilizada para obtener información sobre los usuarios.
				</Section>
				<Section
					line={true}
					title='Definición del problema'>
					Basándote en la investigación y el análisis de usuario, establece claramente cuál es el problema principal que se debe abordar con el diseño del producto. Puede ser una
					oportunidad de mejora o una necesidad no satisfecha en el mercado.{" "}
				</Section>
				<Section
					line={true}
					title='Propuesta de diseño'>
					Propuesta de diseño: Presenta tu propuesta de diseño para abordar el problema identificado. Explica las características clave del producto, la experiencia del usuario
					deseada y cómo se diferencia de los productos existentes en el mercado. Utiliza bocetos, diagramas, wireframes u otros recursos visuales para ilustrar tus ideas.{" "}
				</Section>
				<Section
					line={true}
					title='Iteración y prototipado'>
					Explica cómo has llevado a cabo iteraciones y pruebas de prototipos para refinar el diseño. Puedes mencionar métodos de iteración como pruebas de usabilidad, revisiones
					de diseño con expertos o iteraciones basadas en comentarios de usuarios.{" "}
				</Section>
				<Section
					line={true}
					title='Resultados y métricas'>
					Resultados y métricas: Evalúa los resultados obtenidos a través del diseño propuesto. ¿Cómo ha mejorado el producto en relación con los objetivos establecidos
					anteriormente? Utiliza métricas cuantitativas y cualitativas para respaldar tus afirmaciones, como tasas de conversión, retroalimentación de los usuarios o datos de
					ventas.{" "}
				</Section>
				<Section
					line={true}
					title='Lecciones aprendidas'>
					Lecciones aprendidas: Reflexiona sobre el proceso de diseño y destaca las lecciones aprendidas durante el desarrollo del caso práctico. ¿Qué funcionó bien y qué se podría
					mejorar en futuros proyectos? Compartir estas lecciones ayudará a enriquecer el caso y proporcionar insights valiosos para otros diseñadores.{" "}
				</Section>{" "}
				<Section
					line={true}
					title='Conclusiones'>
					Concluye el caso práctico resumiendo los aspectos más importantes del proceso de diseño y los resultados obtenidos. Puedes agregar recomendaciones adicionales o
					sugerencias para futuras mejoras del producto.{" "}
				</Section>{" "}
			</div>
		</div>
	);
}
