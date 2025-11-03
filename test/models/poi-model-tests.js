import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { jahnstadion, testPois } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Poi Model tests", () => {

  setup(async () => {
    db.init("json");
    await db.poiStore.deleteAllPois();
    for (let i = 0; i < testPois.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testPois[i] = await db.poiStore.addPoi(testPois[i]);
    }
  });

  test("create a poi", async () => {
    const newPoi = await db.poiStore.addPoi(jahnstadion);
    assertSubset(jahnstadion, newPoi);
  });

  test("delete all pois", async () => {
    let returnedPois = await db.poiStore.getAllPois();
    assert.equal(returnedPois.length, 3);
    await db.poiStore.deleteAllPois();
    returnedPois = await db.poiStore.getAllPois();
    assert.equal(returnedPois.length, 0);
  });

  test("get a poi - success", async () => {
    const poi = await db.poiStore.addPoi(jahnstadion);
    const returnedPoi = await db.poiStore.getPoiById(poi._id);
    assert.deepEqual(poi, returnedPoi);
  });

  test("update One poi - success", async () => {
    const poi = await db.poiStore.addPoi(jahnstadion);
    const updatedPoi = {
      _id: poi._id,
      name: "Jahnstadion Regensburg NEW",
      description: "The football stadium of the local 3rd division team SSV Jahn Regensburg NEW",
      latitude: 49,
      longitude: 12,
    }
    await db.poiStore.updatePoi(poi, updatedPoi);
    const returnedPoi = await db.poiStore.getPoiById(poi._id);
    assert.deepEqual(updatedPoi, returnedPoi);
  });

  test("delete One poi - success", async () => {
    await db.poiStore.deletePoiById(testPois[0]._id);
    const returnedPois = await db.poiStore.getAllPois();
    assert.equal(returnedPois.length, testPois.length - 1);
    const deletedPoi = await db.poiStore.getPoiById(testPois[0]._id);
    assert.isNull(deletedPoi);
  });

  test("get a poi - bad params", async () => {
    assert.isNull(await db.poiStore.getPoiById(""));
    assert.isNull(await db.poiStore.getPoiById());
  });

  test("delete One poi - fail", async () => {
    await db.poiStore.deletePoiById("bad-id");
    const allPois = await db.poiStore.getAllPois();
    assert.equal(testPois.length, allPois.length);
  });
});
