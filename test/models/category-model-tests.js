import { assert } from "chai";
import { EventEmitter } from "events";
import { db } from "../../src/models/db.js";
import { building, testCategories } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

EventEmitter.setMaxListeners(25);

suite("category model tests", () => {

  setup(async () => {
    db.init("json");
    await db.categoryStore.deleteAllCategories();
  });

  test("create a category", async () => {
    const newCategory = await db.categoryStore.addCategory(building);
    assertSubset(building, newCategory);
  });

  test("delete all categories", async () => {
    for (let i = 0; i < testCategories.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await db.categoryStore.addCategory(testCategories[i]);
    }
    let returnedCategories = await db.categoryStore.getAllCategories();
    assert.equal(returnedCategories.length, 3);
    await db.categoryStore.deleteAllCategories();
    returnedCategories = await db.categoryStore.getAllCategories();
    assert.equal(returnedCategories.length, 0);
  });

  test("get a category - success", async () => {
    const category = await db.categoryStore.addCategory(building);
    const returnedCategory = await db.categoryStore.getCategoryById(category._id);
    assertSubset(returnedCategory, category);
  });

  test("delete One category - success", async () => {
    for (let i = 0; i < testCategories.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testCategories[i] = await db.categoryStore.addCategory(testCategories[i]);
    }
    await db.categoryStore.deleteCategoryById(testCategories[0]._id);
    const returnedCategories = await db.categoryStore.getAllCategories();
    assert.equal(returnedCategories.length, testCategories.length - 1);
    const deletedCategory = await db.categoryStore.getCategoryById(testCategories[0]._id);
    assert.isNull(deletedCategory);

  });

  test("get a category - failures", async () => {
    const noCategoryWithId = await db.categoryStore.getCategoryById("123");
    assert.isNull(noCategoryWithId);
  });

  test("get a category - bad params", async () => {
    let nullCategory = await db.categoryStore.getCategoryById("");
    assert.isNull(nullCategory);
    nullCategory = await db.categoryStore.getCategoryById();
    assert.isNull(nullCategory);
  });

  test("delete One category - fail", async () => {
    for (let i = 0; i < testCategories.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await db.categoryStore.addCategory(testCategories[i]);
    }
    await db.categoryStore.deleteCategoryById("bad-id");
    const allCategories = await db.categoryStore.getAllCategories();
    assert.equal(testCategories.length, allCategories.length);
  });

});
