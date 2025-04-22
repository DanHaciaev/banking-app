import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('logIn', "routes/login.tsx"),
    route("signUp", "routes/signup.tsx"),
    route("careers", "routes/careers.tsx"),
    route("about", "routes/about.tsx"),
] satisfies RouteConfig;
