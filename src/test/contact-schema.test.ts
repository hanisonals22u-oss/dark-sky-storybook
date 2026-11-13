import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

const valid = { name: "Jane", email: "jane@example.com", message: "Hello there, let's build." };

describe("contact form rules", () => {
  it("accepts a complete message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });
  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "nope" }).success).toBe(false);
  });
  it("rejects messages shorter than 10 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "short" }).success).toBe(false);
  });
  it("rejects messages longer than 1000 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "a".repeat(1001) }).success).toBe(false);
  });
});
