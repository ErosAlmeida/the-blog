import { revalidateExampleAction } from "@/actions/revalidate-example";
import { formatHour } from "@/utils/format-datetime";
import { id } from "date-fns/locale";

export const dynamic = "force-dynamic";
export default async function ExemploPage() {
  const hour = formatHour(Date.now());

  return (
    <main className="min-h-[600px] text-4xl font-bold">
      <div>Hora: {hour}</div>

      <form className="py-16" action={revalidateExampleAction}>
        <input type="hidden" name="path" defaultValue={`/exemplo/${id}`} />

        <button
          className="bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer"
          type="submit"
        >
          REVALIDATE
        </button>
      </form>
    </main>
  );
}
