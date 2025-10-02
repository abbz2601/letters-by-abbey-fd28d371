export async function GET() {
  // Redirect to the logo on CDN
  return Response.redirect('https://ucarecdn.com/e4511629-e094-4450-8087-3136c24da097/-/format/auto/', 301);
}