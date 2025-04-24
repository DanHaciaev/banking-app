import type { Route } from "./+types/login";
import { Login } from "../pages/auth/login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "YourBank's Login" },
    { name: "description", content: "YourBank's Login Page" },
  ];
}

export default function Home() {
  return <Login />;
}
