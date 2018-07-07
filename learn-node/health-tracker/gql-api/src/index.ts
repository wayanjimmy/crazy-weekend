import { bootstrap } from "vesper";
import { GraphQLDate, GraphQLDateTime, GraphQLTime } from "graphql-iso-date";

import { PointController } from "./controller/PointController";
import { Point } from "./entity/Point";
import { User } from "./entity/User";

bootstrap({
  port: 4000,
  controllers: [PointController],
  entities: [Point, User],
  schemas: [__dirname + "/schema/**/*.graphql"],
  cors: true,
  customResolvers: {
    Date: GraphQLDate,
    Time: GraphQLTime,
    DateTime: GraphQLDateTime
  }
})
  .then(() => {
    console.log(
      "Your app is up and running on http://localhost:4000. " +
        "You can use playground in development mode on http://localhost:4000/playground"
    );
  })
  .catch(error => console.error(error.stack ? error.stack : error));
