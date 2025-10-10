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
  DatePublished,
} from "./style";

import mountain from "../../../assets/images/mountains.jpg";
import cityscpaes from "../../../assets/images/cityscapes.jpg";
import voyage from "../../../assets/images/18-days-voyage.jpg";
import archi from "../../../assets/images/architecturals.jpg";
import tour from "../../../assets/images/world-tour.jpg";
import corner from "../../../assets/images/unforeseen-corners.jpg";
import king from "../../../assets/images/king-on-africa.jpg";
import trip from "../../../assets/images/trip-to-nowhere.jpg";
import sea from "../../../assets/images/rage-of-the-sea.jpg";
import free from "../../../assets/images/running-free.jpg";
import waves from "../../../assets/images/behind-the-waves.jpg";
import calm from "../../../assets/images/calm-waters.jpg";
import milky from "../../../assets/images/milky-way.jpg";
import night from "../../../assets/images/dark-forest.jpg";
import beauty from "../../../assets/images/somwarpet.jpg";
import dreams from "../../../assets/images/land-of-dreams.jpg";
import Button from "../../../components/Button";
import Arrow from "../../../assets/icons/button-arrow.svg";

const BLOGS = [
  {
    date: "April 16th 2020",
    image: mountain,
    title: "The Mountains",
    author: "by John Appleseed",
  },
  {
    date: "April 14th 2020",
    image: cityscpaes,
    title: "Sunset Cityscapes",
    author: "by Benjamin Cruz",
  },
  {
    date: "April 11th 2020",
    image: voyage,
    title: "18 Days Voyage",
    author: "by Alexei Borodin",
  },
  {
    date: "April 9th 2020",
    image: archi,
    title: "Architecturals",
    author: "by Samantha Brooke",
  },
  {
    date: "April 7th 2020",
    image: tour,
    title: "World Tour 2019",
    author: "by Timothy Wagner",
  },
  {
    date: "April 3rd 2020",
    image: corner,
    title: "Unforeseen Corners",
    author: "by William Malcolm",
  },
  {
    date: "March 29th 2020",
    image: king,
    title: "King on Africa: Part II",
    author: "by Tim Hillenburg",
  },
  {
    date: "March 21st 2020",
    image: trip,
    title: "The Trip to Nowhere",
    author: "by Felicia Rourke",
  },
  {
    date: "March 19th 2020",
    image: sea,
    title: "Rage of The Sea",
    author: "by Mohammed Abdul",
  },
  {
    date: "March 16th 2020",
    image: free,
    title: "Running Free",
    author: "by Michelle",
  },
  {
    date: "March 11th 2020",
    image: waves,
    title: "Behind the Waves",
    author: "by Lamarr Wilson",
  },
  {
    date: "March 9th 2020",
    image: calm,
    title: "Calm Waters",
    author: "by Samantha Brooke",
  },
  {
    date: "March 5th 2020",
    image: milky,
    title: "The Milky Way",
    author: "by Benjamin Cruz",
  },
  {
    date: "March 4th 2020",
    image: night,
    title: "Night at The Dark Forest",
    author: "by  Mohammed Abdul",
  },
  {
    date: "March 1st 2020",
    image: beauty,
    title: "Somwarpet’s Beauty",
    author: "by Michelle",
  },
  {
    date: "February 25th 2020",
    image: dreams,
    title: "Land of Dreams",
    author: "by William Malcolm",
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
                <DatePublished>{blog.date}</DatePublished>
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
