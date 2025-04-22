import type { Route } from "./+types/careers";
import { CareersPage } from "../pages/routes/careersPage/careersPage"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Careers" },
        { name: "description", content: "Careers Page" },
    ];
}

export default function Home() {
    return <CareersPage />;
}
