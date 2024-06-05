import { signIn } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("azure-ad");
      }}
    >
      <button type="submit">Signin with Azure Active Directory</button>
    </form>
  );
}
