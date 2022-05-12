import { FollowerRoutes } from "../../../features/followers/presentation/routes";
import { UserRoutes } from "../../../features/user/presentation/routes/user-routes";

export const makeRoutes = (app: any) => {
    app.use("/user", UserRoutes.getRoutes());
    app.use("/followers", FollowerRoutes.getRoutes());
};
