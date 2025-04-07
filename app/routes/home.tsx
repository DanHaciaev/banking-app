import type { Route } from "./+types/home";
import { MainPage } from "../pages/routes/mainPage/mainPage"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Home" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return <MainPage />;
}
