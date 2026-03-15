import { describe, it, expect } from "vitest";
import { COMPANY, SITE_URL, SITE_NAME } from "../constants";

describe("Constants", () => {
  it("has valid company information", () => {
    expect(COMPANY.name).toBe("Pacific Northwest X-Ray Inc.");
    expect(COMPANY.phone).toBe("503-667-3000");
    expect(COMPANY.tollFree).toBe("800-827-9729");
    expect(COMPANY.fax).toBe("503-666-8855");
    expect(COMPANY.email).toBe("SalesD@pnwx.com");
    expect(COMPANY.foundedYear).toBe(1997);
  });

  it("has valid address", () => {
    expect(COMPANY.address.city).toBe("Gresham");
    expect(COMPANY.address.state).toBe("OR");
    expect(COMPANY.address.zip).toBe("97030");
  });

  it("has valid site constants", () => {
    expect(SITE_URL).toBe("https://www.pnwx.com");
    expect(SITE_NAME).toBe("Pacific Northwest X-Ray Inc.");
  });
});
