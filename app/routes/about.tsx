import type { Route } from "./+types/about";
import { AboutPage } from "../pages/routes/aboutPage/aboutPage"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About" },
        { name: "description", content: "About Page" },
    ];
}

export default function Home() {
    return <AboutPage />;
}
