export async function GET() {
  // Redirect to the favicon on CDN
  return Response.redirect('https://ucarecdn.com/972d2a1c-8c05-4b39-b307-0deaa9a1efb3/-/format/auto/', 301);
}