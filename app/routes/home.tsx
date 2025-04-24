import type { Route } from "./+types/home";
import { MainPage } from "../pages/routes/mainPage/mainPage"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "YourBank" },
        { name: "description", content: "Welcome to YourBank!" },
    ];
}

export default function Home() {
    return <MainPage />;
}
