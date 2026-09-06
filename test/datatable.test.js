import { test, describe, beforeEach } from "node:test";
import assert from "node:assert";
import datatable from "../src/datatable.js";

function setupWindow(search, mockAxios) {
  globalThis.window = {
    location: { search },
    axios: mockAxios,
  };
}

function mockAxios(recordCall) {
  return {
    get: (url) => {
      recordCall("get", url);
      return Promise.resolve({ data: { url } });
    },
    post: (url) => {
      recordCall("post", url);
      return Promise.resolve({ data: { url } });
    },
    put: (url) => {
      recordCall("put", url);
      return Promise.resolve({ data: { url } });
    },
  };
}

describe("datatable", () => {
  let dt;
  let calls;

  beforeEach(() => {
    dt = new datatable();
    calls = [];
  });

  describe("without page/paginate/search params", () => {
    beforeEach(() => {
      setupWindow(
        "",
        mockAxios((method, url) => calls.push({ method, url })),
      );
    });

    test("get() makes a plain GET request", async () => {
      const response = await dt.get("/api/items");
      assert.deepStrictEqual(calls, [{ method: "get", url: "/api/items" }]);
      assert.strictEqual(response.data.url, "/api/items");
    });

    test("post() makes a plain POST request", async () => {
      await dt.post("/api/items");
      assert.deepStrictEqual(calls, [{ method: "post", url: "/api/items" }]);
    });

    test("put() makes a plain PUT request", async () => {
      await dt.put("/api/items");
      assert.deepStrictEqual(calls, [{ method: "put", url: "/api/items" }]);
    });
  });

  describe("with page/paginate/search params", () => {
    beforeEach(() => {
      setupWindow(
        "?page=2&paginate=10&search=foo",
        mockAxios((method, url) => calls.push({ method, url })),
      );
    });

    test("get() appends query params to the URL", async () => {
      await dt.get("/api/items");
      assert.deepStrictEqual(calls, [
        { method: "get", url: "/api/items?page=2&paginate=10&search=foo" },
      ]);
    });

    test("post() appends query params to the URL", async () => {
      await dt.post("/api/items");
      assert.deepStrictEqual(calls, [
        { method: "post", url: "/api/items?page=2&paginate=10&search=foo" },
      ]);
    });

    test("put() appends query params to the URL", async () => {
      await dt.put("/api/items");
      assert.deepStrictEqual(calls, [
        { method: "put", url: "/api/items?page=2&paginate=10&search=foo" },
      ]);
    });
  });

  describe("with only a single search param present", () => {
    beforeEach(() => {
      setupWindow(
        "?page=3",
        mockAxios((method, url) => calls.push({ method, url })),
      );
    });

    test("get() appends query params with nulls for missing params", async () => {
      await dt.get("/api/items");
      assert.deepStrictEqual(calls, [
        { method: "get", url: "/api/items?page=3&paginate=null&search=null" },
      ]);
    });
  });
});
