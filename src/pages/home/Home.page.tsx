import { FC } from "react";

import Heading from "../../components/Heading";

import HeadingType from "../../enums/heading";

const Home: FC = () => (
  <Heading type={HeadingType.H1}>Sitio en Construccion</Heading>
);

export default Home;
