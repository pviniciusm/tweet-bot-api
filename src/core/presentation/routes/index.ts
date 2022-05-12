import { LikeDislikeRoutes } from "../../../features/like-dislike/presentation/routes/like-routes";
import { UserRoutes } from "../../../features/user/presentation/routes/user-routes";

export const makeRoutes = (app: any) => {
    app.use("/user", UserRoutes.getRoutes());
    app.use("/like", LikeDislikeRoutes.getRoutes());
};
