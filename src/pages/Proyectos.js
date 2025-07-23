import Card from "../components/Card";

const Proyectos = () => (
  <div className="container">
    <h2>Proyectos Destacados</h2>
    <Card title="Clasificador CIFAR-10" content="Modelo CNN entrenado para identificar imágenes en 10 clases con precisión del 82%." />
    <Card title="Regresión energética con XGBoost" content="Predicción de consumo eléctrico en edificios públicos." />
    <Card title="Dashboard interactivo en Streamlit" content="Visualización de indicadores de salud pública en Cataluña." />
  </div>
);

export default Proyectos;
