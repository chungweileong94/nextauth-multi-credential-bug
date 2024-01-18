import { signOut } from "~/server/auth";

export default function DashboardPage() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button>Logout</button>
    </form>
  );
}
