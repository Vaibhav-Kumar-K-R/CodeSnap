'use client';
import Editor from '@/components/Editor';
import Bar from '@/components/Bar';
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start pb-24 px-4 max-sm:px-0">
      <Bar></Bar>
      <Editor />
    </main>
  );
}
