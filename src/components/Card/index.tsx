import {
  CardContainer,
  CardImage,
  CardImageContainer,
  Line,
  Author,
  Title,
  CardDescription,
  CardLink,
  CardText,
} from "./styles";

import mountain from "../../assets/images/mountains.jpg";
import cityscpaes from "../../assets/images/cityscapes.jpg";
import voyage from "../../assets/images/18-days-voyage.jpg";
import archi from "../../assets/images/architecturals.jpg";
import Button from "../Button";
import Arrow from "../../assets/icons/button-arrow.svg";

const BLOGS = [
  {
    image: mountain,
    title: "The Mountains",
    author: "by John Appleseed",
  },
  {
    image: cityscpaes,
    title: "Sunset Cityscapes",
    author: "by Benjamin Cruz",
  },
  {
    image: voyage,
    title: "18 Days Voyage",
    author: "by Alexei Borodin",
  },
  {
    image: archi,
    title: "Architecturals",
    author: "by Samantha Brooke",
  },
];
const Card = () => {
  return (
    <CardContainer>
      {BLOGS.map((blog) => (
        <>
          <CardImageContainer>
            <CardImage src={blog.image} />
            <CardDescription>
              <CardText>
                <Title>{blog.title}</Title>
                <Author>{blog.author}</Author>
              </CardText>
              <Line />
              <CardLink>
                <Button variant="secondary" label="READ STORY" />
                <Arrow />
              </CardLink>
            </CardDescription>
          </CardImageContainer>
        </>
      ))}
    </CardContainer>
  );
};

export default Card;
