import {
  BlogContainer,
  BlogImage,
  BlogImageContainer,
  Line,
  Author,
  Title,
  BlogDescription,
  BlogLink,
  BlogText,
} from "./styles";

import Image1 from "../../images/mountains.jpg";
import Image2 from "../../images/cityscapes.jpg";
import Image3 from "../../images/18-days-voyage.jpg";
import Image4 from "../../images/architecturals.jpg";
import Button from "../Button";
import Arrow from "../../assets/button-arrow.svg";

const BLOGS = [
  {
    image: Image1,
    title: "The Mountains",
    author: "by John Appleseed",
  },
  {
    image: Image2,
    title: "Sunset Cityscapes",
    author: "by Benjamin Cruz",
  },
  {
    image: Image3,
    title: "18 Days Voyage",
    author: "by Alexei Borodin",
  },
  {
    image: Image4,
    title: "Architecturals",
    author: "by Samantha Brooke",
  },
];
const Card = () => {
  return (
    <BlogContainer>
      {BLOGS.map((blog) => (
        <>
          <BlogImageContainer>
            <BlogImage src={blog.image} />
            <BlogDescription>
              <BlogText>
                <Title>{blog.title}</Title>
                <Author>{blog.author}</Author>
              </BlogText>
              <Line />
              <BlogLink>
                <Button variant="secondary" label="READ STORY" />
                <Arrow />
              </BlogLink>
            </BlogDescription>
          </BlogImageContainer>
        </>
      ))}
    </BlogContainer>
  );
};

export default Card;
