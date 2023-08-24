import { Router } from "express";
import request from "supertest";

import { CreateStatementController } from "../modules/statements/useCases/createStatement/CreateStatementController";
import { GetBalanceController } from "../modules/statements/useCases/getBalance/GetBalanceController";
import { GetStatementOperationController } from "../modules/statements/useCases/getStatementOperation/GetStatementOperationController";
import { ensureAuthenticated } from "../shared/infra/http/middlwares/ensureAuthenticated";
import { app } from "../app";

// Import other necessary dependencies and modules

const statementRouter = Router();
const getBalanceController = new GetBalanceController();
const createStatementController = new CreateStatementController();
const getStatementOperationController = new GetStatementOperationController();

statementRouter.use(ensureAuthenticated);

statementRouter.get("/balance", getBalanceController.execute);
statementRouter.post("/deposit", createStatementController.execute);
statementRouter.post("/withdraw", createStatementController.execute);
statementRouter.get("/:statement_id", getStatementOperationController.execute);

describe("Statement Routes", () => {
  it("should return the balance", async () => {
    // Mock the necessary dependencies and objects

    // Make the request to the '/balance' route using Supertest
    const response = await request(app).get("/balance");

    // Assert the expected behavior
    expect(response.status).toBe(200);
  });

  // Add more test cases for other routes
});
