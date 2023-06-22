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
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687210465/mancity_logo_ykygdy.jpg",
  },
];
