import fs from "fs";
import path from "path";

// 1. غيّر واجهة الـ params لتكون Promise
interface PageProps {
  params: Promise<{ id: string }>;
}

// 2. تأكد أن الدالة async وأضف await للـ params
export default async function MissionPage(props: PageProps) {
  const params = await props.params;
  const id = params.id;

  return (
    <div style={{ padding: 20 }}>
      <h1>Mission ID: {id}</h1>
    </div>
  );
}