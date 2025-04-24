import type { Route } from "./+types/about";
import { AboutPage } from "../pages/routes/aboutPage/aboutPage"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "YourBank's About" },
        { name: "description", content: "YourBank's About Page" },
    ];
}

export default function Home() {
    return <AboutPage />;
}
