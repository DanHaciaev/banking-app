import type { Route } from "./+types/security";
import { SecurityPage } from "../pages/routes/securityPage/securityPage"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Security" },
        { name: "description", content: "Security Page" },
    ];
}

export default function Security() {
    return <SecurityPage />;
}
