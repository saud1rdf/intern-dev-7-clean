import fs from "fs";
import path from "path";

export default function MissionPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  return (
    <div style={{ padding: 20 }}>
      <h1>Mission ID: {id}</h1>
    </div>
  );
}
