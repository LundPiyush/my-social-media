import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Erling Haaland to Manchester City, here we go! Haaland has passed medical tests as new Man City player today, he's back in Dortmund. It will be OFFICIAL this week 🚨🔵 #MCFC Man City told BVB board that they will activate release clause closer to €60m than €75m in few hours.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "fabrizioromano",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687208591/fabrizo_user_w32pz1.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687189677/erlinghaland_zsfl59.jpg",
  },
  {
    _id: uuid(),
    content: `There's a blue moon shining on Europe tonight! 🏆#ManCity | #UCLfinal`,
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "fabrizioromano",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687208591/fabrizo_user_w32pz1.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687208442/haland_ucl_vc4tne.jpg",
  },
  {
    _id: uuid(),
    content: `@KevinDeBruyne here, how may I assist you?" 📞 Most #UCL assists this season 🅰️ #ManCity | #UCLfinal`,
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Manchester City",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687210465/mancity_logo_ykygdy.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687207047/kevin_ucl_vu2gl3.jpg",
  },
  {
    _id: uuid(),
    content:
      "We're celebrating our Treble with an open-top bus parade through Manchester city centre tomorrow! 🎉See you all there 🤩",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Manchester City",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687210465/mancity_logo_ykygdy.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687207066/ucl_winners_b1exj5.jpg",
  },
  {
    _id: uuid(),
    content: `Champions of Europe, you made us sing that! #ManCity | #UCLfinal`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Manchester City",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687210465/mancity_logo_ykygdy.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687207059/pep_ucl_bc9mec.jpg",
  },
];
