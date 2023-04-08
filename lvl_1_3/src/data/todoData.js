import { CgGym } from "react-icons/cg";
import { FaCcApplePay } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";

export const todos = [
  {
    icon: <CgGym />,
    todo: "Hit the Jym",
    completed: false,
    inProgress: false,
  },
  {
    icon: <FaCcApplePay />,
    todo: "Pay bills",
    completed: false,
    inProgress: false,
  },
  {
    icon: <GiThreeFriends />,
    todo: "Meet George",
    completed: true,
    inProgress: true,
  },
  {
    icon: <GiKnifeFork />,
    todo: "Buy eggs",
    completed: true,
    inProgress: true,
  },
  {
    icon: <FaBook />,
    todo: "Read a book",
    completed: true,
    inProgress: false,
  },
  {
    icon: <GiOfficeChair />,
    todo: "Organize office",
    completed: true,
    inProgress: false,
  },
];
