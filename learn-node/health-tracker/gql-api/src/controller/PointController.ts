import { Controller, Mutation, Query } from "vesper";
import { EntityManager } from "typeorm";

import { Point } from "../entity/Point";

@Controller()
export class PointController {
  constructor(private entityManager: EntityManager) {}

  @Query()
  points() {
    return this.entityManager.find(Point);
  }

  @Query()
  pointsGet({ id }) {
    return this.entityManager.findOne(Point, id);
  }

  @Mutation()
  pointsSave(args) {
    const point = this.entityManager.create(Point, args);
    return this.entityManager.save(Point, point);
  }

  @Mutation()
  async pointsDelete({ id }) {
    await this.entityManager.remove(Point, { id });
    return true;
  }
}
