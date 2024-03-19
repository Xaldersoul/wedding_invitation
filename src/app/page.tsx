import { GiLargeDress } from "react-icons/gi";
import { FaMusic, FaInstagram } from "react-icons/fa";

import BackgroundImage from "../../public/assets/Session-0195.jpg";
import ImageSection from "../../public/assets/pared.jpg";
import Ring from "../../public/assets/weeding_ring.jpg";
import Dinner from "../../public/assets/dinner.jpg";

import Hero from "../../components/Hero";
import Section from "../../components/Section";
import ContentBlock from "../../components/ContentBlock";
import BackgroundImageComponent from "../../components/BackgroundImage";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import ImageComponent from "../../components/ImageComponent";
import Card from "../../components/Card";
import { FaHeart } from "react-icons/fa6";
import MusicButton from "../../components/MusicButton";

export default function Home() {
  return (
    <div>
      <MusicButton />
      <BackgroundImageComponent image={BackgroundImage} />
      <Hero />
      <Section />
      <ContentBlock
        Icon={<FaHeart className="text-complementary-50" />}
        text="¡Te damos la bienvenida!"
        alt
      />
      <ImageComponent alt="" imageSrc={ImageSection} className="h-full">
        <Card
          backgroundImage={Ring}
          title="Ceremonia"
          alt
          text="20 de Enero a las 18:00 horas en la Iglesia de Santiago. Clickeá en el botón y recibí las indicaciones para llegar."
          btnText="COMO LLEGAR"
          url="https://www.google.com/maps/place/Iglesia+de+Santiago/@50.8418633,4.3570693,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x47c3c4873a06fc87:0x1aace40eae1c8821!2sImp.+du+Borgendael+1,+1000+Bruxelles,+B%C3%A9lgica!2m2!1d4.3596442!2d50.8418599!3m5!1s0x47c3c4873a06fc87:0x1aace40eae1c8821!8m2!3d50.8418599!4d4.3596442!16s%2Fm%2F0805xdp?hl=es&entry=ttu"
        />
        <Card
          backgroundImage={Dinner}
          title="Fiesta"
          alt
          text="Luego de la ceremonia festejaremos en el salón Eventroom a las 20:00 horas. Clickeá en el botón y recibí las indicaciones para llegar. ¡Te esperamos!"
          btnText="COMO LLEGAR"
          url="https://www.google.com/maps/place/Eventroom/@51.0559283,4.2081466,17z/data=!3m1!4b1!4m17!1m10!4m9!1m0!1m6!1m2!1s0x47c393192f1d126d:0xb4a1a8bdcad3a12e!2sEventroom,+Buisstraat+19B%2Fbus+3,+2890+Puurs-Sint-Amands,+B%C3%A9lgica!2m2!1d4.2107093!2d51.0559286!3e0!3m5!1s0x47c393192f1d126d:0xb4a1a8bdcad3a12e!8m2!3d51.055925!4d4.2107215!16s%2Fg%2F11fz9y9tx2?entry=ttu"
        />
      </ImageComponent>
      <ContentBlock
        text="¡Cuento con tu presencia!"
        title="CONFIRMACIÓN DE ASISTENCIA"
        btnText="CONFIRMAR ASISTENCIA"
        alt
      />
      <Carousel />
      <ContentBlock
        Icon={<FaMusic className="text-primary-50" />}
        text="¡Ayudame sugiriendo las canciones que pensás que no pueden faltar en la fiesta!"
        title="¡MUESTRAME TUS GUSTOS!"
        btnText="SUGERIR CANCIÓN"
        transparent
      />
      <ContentBlock
        Icon={<GiLargeDress className="text-primary-50" />}
        title="DRESSCODE"
        text="El codigo de vestimenta será elegante"
      />
      <ContentBlock
        Icon={<FaInstagram className="text-complementary-50" />}
        title="@emmanuelbocchi_fotografo"
        text="¡Si te gusta lo que viste en esta pagina echale un vistazo a su obra en instagram!"
        alt
        btnText="VISITAR"
        url="https://www.instagram.com/emmanuelbocchi_fotografo"
      />
      <ContentBlock text="Gracias por acompañarnos en nuestro dia especial..." />
      <Footer />
    </div>
  );
}
