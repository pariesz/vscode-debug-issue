import { assert } from "chai"
import { TRUE } from "./project"

describe("project", () => {
    it("TRUE === true", () => {
        assert.isTrue(TRUE);
    })
})