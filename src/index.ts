import app from "./app";
import routes from "./routes";
import { mongoUrl, port } from "./config";
import { connectMongoDB } from "./db/dbConnect";

app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

(async () => {
  try {
    if (mongoUrl) {
      // eslint-disable-next-line no-console
      console.log("database is connecting...");
      await connectMongoDB(mongoUrl);
      app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`server is running at ${port}`);
      });
    } else {
      // eslint-disable-next-line no-console
      console.error("MongoDB URL is not defined.");
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to connect to the database:", error);
  }
})();


export default app;


