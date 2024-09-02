import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("Paulo");
  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
