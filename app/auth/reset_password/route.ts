// import { createClient } from '@/lib/utils/supabase/server';
// import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';
// import { getErrorRedirect, getStatusRedirect } from '@/lib/utils/helpers';

// export async function GET(request: NextRequest) {
//   // The `/auth/callback` route is required for the server-side auth flow implemented
//   // by the `@supabase/ssr` package. It exchanges an auth code for the user's session.
//   const requestUrl = new URL(request.url);
//   const code = requestUrl.searchParams.get('code');

//   if (code) {
//     const supabase = createClient();

//     const { error } = await (await supabase).auth.exchangeCodeForSession(code);

//     if (error) {
//       return NextResponse.redirect(
//         getErrorRedirect(
//           `${requestUrl.origin}/signin/forgot_password`,
//           error.name,
//           "Sorry, we weren't able to log you in. Please try again.",
//         ),
//       );
//     }
//   }

//   // URL to redirect to after sign in process completes
//   return NextResponse.redirect(
//     getStatusRedirect(
//       `${requestUrl.origin}/signin/update_password`,
//       'You are now signed in.',
//       'Please enter a new password for your account.',
//     ),
//   );
// }
import { createClient } from '@/lib/utils/supabase/server';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getErrorRedirect, getStatusRedirect } from '@/lib/utils/helpers';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const redirectTo = requestUrl.searchParams.get('redirectTo') || '/account'; // 👈 fallback

  if (code) {
    const supabase = await createClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      return NextResponse.redirect(
        getErrorRedirect(
          `${requestUrl.origin}/signin`,
          error.name,
          "Sorry, we weren't able to log you in. Please try again.",
        ),
      );
    }
  }

  return NextResponse.redirect(
    getStatusRedirect(
      `${requestUrl.origin}${redirectTo}`,
      'Success!',
      'You are now signed in.',
    ),
  );
}
