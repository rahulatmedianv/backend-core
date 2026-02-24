import app from "./app.ts";
const PORT = 8080;

app.listen(PORT, (err) => {
  if (err) {
    process.exit(1);
  }
  console.log("App is running on port", PORT);
});
