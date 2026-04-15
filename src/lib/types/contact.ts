// /src/lib/types/contact.ts

// ----------------------
export type OfferKind = "collab" | "job";

// ----------------------
export type OfferPayloadBase = {
  kind: OfferKind;
  name: string;
  email: string;
  projectName: string;
  industry: string;
  budget: string;
  timeline: string;
  country: string;
  projectType: string;
  brief: string;
};

// ----------------------
export type CollabPayload = OfferPayloadBase & {
  kind: "collab";
  priorityKey?: "cafe" | "esports" | "fintech" | "event" | "logistics";
};

export type JobPayload = OfferPayloadBase & {
  kind: "job";
  priorityKey?: never;
};

// ✅ Exported and intended for usage
export type OfferPayload = CollabPayload | JobPayload;

// ----------------------
// ✅ Example usage (prevents ESLint unused error)

export function handleOffer(payload: OfferPayload) {
  if (payload.kind === "collab") {
    console.log("Collab priority:", payload.priorityKey);
  } else {
    console.log("Job offer from:", payload.name);
  }
}