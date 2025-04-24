import type { Route } from "./+types/security";
import { SecurityPage } from "../pages/routes/securityPage/securityPage"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "YourBank's Security" },
        { name: "description", content: "YourBank's Security Page" },
    ];
}

export default function Security() {
    return <SecurityPage />;
}
