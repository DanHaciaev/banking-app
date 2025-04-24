import type { Route } from "./+types/signup";
import { SignUp } from "../pages/auth/signup/signUp"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "YourBank's SignUp" },
    { name: "description", content: "YourBank's SignUp" },
  ];
}

export default function Home() {
  return <SignUp />;
}
