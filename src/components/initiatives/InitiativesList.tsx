import { INITIATIVES } from "@/lib/initiatives";
import InitiativeDetail from "./InitiativeDetail";

export default function InitiativesList() {
  return (
    <div className="relative">
      {INITIATIVES.map((initiative, i) => (
        <InitiativeDetail
          key={initiative.slug}
          initiative={initiative}
          imageOnRight={i % 2 === 1}
        />
      ))}
    </div>
  );
}
