import { html, fixture, expect } from '@open-wc/testing';
import "../my-project2.js";

describe("MyProject2 test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <my-project2
        title="title"
      ></my-project2>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
