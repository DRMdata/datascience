import Card from "../components/Card";

const Home = () => (
  <div className="container">
    <h2>🧪 Últimos Proyectos</h2>
    <Card title="Clasificador CIFAR-10" content="CNN con 82% de precisión en imágenes multiclase." />
    <Card title="Análisis de Sentimientos" content="Modelo BERT para redes sociales. Precisión: 90%." />
    <Card title="Detección de Fraude" content="Random Forest y SHAP aplicado a datos bancarios." />

    <h2>📝 Últimas Opiniones</h2>
    <Card title="¿Qué viene después del Deep Learning?" content="Reflexión sobre evolución de la IA." link="/opinion" />
    <Card title="Modelos interpretables vs complejidad" content="Transparencia vs precisión en ML." link="/opinion" />
    <Card title="Aplicaciones éticas en IA" content="Responsabilidad al implementar algoritmos." link="/opinion" />
  </div>
);

export default Home;
