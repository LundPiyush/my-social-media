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
    username: "mancity",
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
    username: "mancity",
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
    username: "mancity",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687210465/mancity_logo_ykygdy.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687207059/pep_ucl_bc9mec.jpg",
  },
  {
    _id: uuid(),
    content: `All about last night! thank you @TaylorSwift for making me feel sooooo at home in my home state. I mean… You broke the all time attendance record and we got to be the first tour to play your stadium twice. Thank you so much for everything this weekend. You were a mesmerizing crowd, like beyond 🥰😍 We're coming for you next weekend Minneapolis!`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687208699/userimage_u8ozxc.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1688211340/taylor_swift_tdvtqi.jpg",
  },
  {
    _id: uuid(),
    content: `Lionel Messi and Argentina crowned world champions 🇦🇷🏆`,
    likes: {
      likeCount: 900,
      likedBy: [],
      dislikedBy: [],
    },
    username: "argentina",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1688207143/arg_logo_ohabqy.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1688206863/arg_wc_pg5ufq.jpg",
  },
  {
    _id: uuid(),
    content: `'GOAT 🐐 debate is over': Messi settles Cristiano Ronaldo battle with stunning FIFA World Cup win to 'complete football'`,
    likes: {
      likeCount: 300,
      likedBy: [],
      dislikedBy: [],
    },
    username: "argentina",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1688207143/arg_logo_ohabqy.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1688209113/Cristiano-Ronaldo-Lionel-Messi-World-Cup-2022_qi0bs5.jpg",
  },
  {
    _id: uuid(),
    content: `Lionel Messi wakes up with World Cup 🏆 trophy in bed as Argentina 🇦🇷 star ⭐️ revels in stunning World Cup win 🔥`,
    likes: {
      likeCount: 100,
      likedBy: [],
      dislikedBy: [],
    },
    username: "argentina",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1688207143/arg_logo_ohabqy.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1688209340/messi_wc_bed_ljapde.jpg",
  },
  {
    _id: uuid(),
    content: `The little boy from Rosario, Santa Fe, has just pitched up in heaven. He climbs into a galaxy of his own. He has his crowning moment and of course he is not alone. Lionel Messi 🐐 has conquered his final peak. Lionel Messi has shaken hands with paradise. - Peter Drury`,
    likes: {
      likeCount: 200,
      likedBy: [],
      dislikedBy: [],
    },
    username: "argentina",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1688207143/arg_logo_ohabqy.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1688208843/messi_trophy_uoeydv.jpg",
  },
  {
    _id: uuid(),
    content: `The Must-Read Books 📚 of 2023`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687208699/userimage_u8ozxc.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1688212190/book_rtem0f.jpg",
  },
  {
    _id: uuid(),
    content: `Solving bugs at my vacation 🥲😂`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    userUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1687208699/userimage_u8ozxc.png",
    createdAt: "2022-07-04T11:02:17+05:30",
    updatedAt: "2022-07-04T11:02:17+05:30",
    mediaUrl:
      "https://res.cloudinary.com/dygxaue5x/image/upload/v1688212600/vacation_xx1hbq.jpg",
  },
];
