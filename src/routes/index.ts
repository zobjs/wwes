import newsRoutes from "@/modules/news/news.routes";
import { Router } from "express";

const routes: Router = Router();

routes.use("/", newsRoutes);

export default routes;
