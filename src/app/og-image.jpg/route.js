export async function GET() {
  // Redirect to the og-image on CDN
  return Response.redirect('https://ucarecdn.com/e23f0795-b239-4a4b-8c36-9213c89f763a/-/format/auto/', 301);
}