export async function GET() {
  // Redirect to the 32x32 favicon on CDN
  return Response.redirect('https://ucarecdn.com/3cdf70d6-0f62-49f8-85b4-911f9811f7c6/-/format/auto/', 301);
}