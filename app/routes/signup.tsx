import type { Route } from "./+types/signup";
import { SignUp } from "../pages/auth/signup/signUp"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SignUp" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <SignUp />;
}
