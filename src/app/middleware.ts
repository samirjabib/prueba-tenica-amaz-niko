import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(req: any) {
  // Create a Supabase client configured to use cookies

  return await updateSession(req);
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|assets).*)"],
};
