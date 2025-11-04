import { logColor } from "@/utils/log-color";

export async function deletePostActions(formatData: FormData) {
  const id = formatData.get("id");

  logColor("" + id);
}
