import { GiPartyPopper, GiLargeDress } from "react-icons/gi";
import { FaMusic, FaGlassCheers } from "react-icons/fa";

import BackgroundImage from "../../public/assets/starry.jpg";

import Hero from "../../components/Hero";
import Section from "../../components/Section";
import ContentBlock from "../../components/ContentBlock";
import BackgroundImageComponent from "../../components/BackgroundImage";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Section />
      <BackgroundImageComponent image={BackgroundImage} />
      <ContentBlock
        Icon={<GiPartyPopper className="text-silver-50" />}
        text="¡Te espero el Viernes 1 de Marzo de 2024 para festejar este gran momento de mi vida! Quinta Norte, Río Cuarto, Córdoba. Clickeá en el botón de abajo y encontrá las indicaciones para llegar, confirmar asistencia antes del 26/2!"
        title="FIESTA"
        btnText="CÓMO LLEGAR"
        url="https://www.google.com/maps/place/QUINTA+NORTE/@-33.0770658,-64.3538939,17z/data=!4m6!3m5!1s0x95cdffb035a0497f:0x8b92901c2b6495eb!8m2!3d-33.0770658!4d-64.3538939!16s%2Fg%2F11gr3s03p4?entry=ttu"
      />
      <ContentBlock
        text="¡Cuento con tu presencia!"
        title="CONFIRMACIÓN DE ASISTENCIA"
        btnText="CONFIRMAR ASISTENCIA"
        alt
        url="https://docs.google.com/forms/d/e/1FAIpQLScGV3qXVLO5vdpg16u5OEG63L56eTsXfI4aQDYWRDsQmv4aCQ/viewform"
      />
      <ContentBlock
        Icon={<FaMusic className="text-silver-50" />}
        text="¡Ayudame sugiriendo las canciones que pensás que no pueden faltar en la fiesta!"
        title="¡MUESTRAME TUS GUSTOS!"
        btnText="SUGERIR CANCIÓN"
        transparent
        url="https://docs.google.com/forms/d/e/1FAIpQLSeZUBN7JFagJ6Mn30gVakyxLbFTKkLk7Y4zmz1jGkJGE0yQig/viewform"
      />
      <ContentBlock
        Icon={<GiLargeDress className="text-silver-50" />}
        title="COLORES RESERVADOS"
        text="Informar que los colores Rojo, Azul y Lila estan reservados"
      />
      <ContentBlock
        Icon={<FaGlassCheers className="text-nightblue-50" />}
        title="CENA Y BRINDIS"
        text="¡La cena tendra una costo de 14.000 (21:00 - 04:00) y el brindis 7.000 pesos (00:00 - 04:00) respectivamente!"
        alt
      />
      <ContentBlock text="¡Gracias por acompañarme en este momento tan importante de mi vida!" />
      <Footer />
    </div>
  );
}
