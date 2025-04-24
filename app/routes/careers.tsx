import type { Route } from "./+types/careers";
import { CareersPage } from "../pages/routes/careersPage/careersPage"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "YourBank's Careers" },
        { name: "description", content: "YourBank's Careers Page" },
    ];
}

export default function Home() {
    return <CareersPage />;
}
