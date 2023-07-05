import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Student",
    website: "https://adarshbalika.netlify.app",
    avatarUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687208699/userimage_u8ozxc.png",
  },
  {
    _id: uuid(),
    firstName: "Fabrizio",
    lastName: "Romano",
    username: "fabrizioromano",
    password: "fabrizioromano123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    website: "https://en.wikipedia.org/wiki/Fabrizio_Romano",
    bio: "Football Agent",
    avatarUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687208591/fabrizo_user_w32pz1.jpg",
  },
  {
    _id: uuid(),
    firstName: "Manchester",
    lastName: "City",
    username: "mancity",
    password: "mancity123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "English Club",
    website: "https://www.mancity.com",
    avatarUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687210465/mancity_logo_ykygdy.jpg",
  },
  {
    _id: uuid(),
    firstName: "Argentina",
    lastName: "Team",
    username: "argentina",
    password: "argentina123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Argentina Football Team",
    website: "https://en.wikipedia.org/wiki/Argentina_national_football_team",
    avatarUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1688208374/argentina3_logo_auratt.jpg",
  },
];
