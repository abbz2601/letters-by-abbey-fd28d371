import SEO from "@/components/SEO";
import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Star, Heart, Gift, Clock, Shield, Truck, CheckCircle, ArrowRight, Play, Quote } from "lucide-react";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Letters by Abbey",
    "description": "Meaningful handwritten letters crafted with intention",
    "url": "https://lettersbyabbey.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://lettersbyabbey.com/shop?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO
        title="Letters by Abbey - Meaningful Handwritten Letters | Handcrafted with Love"
        description="Discover beautifully handwritten letters crafted with intention. Perfect for weddings, birthdays, grief support, and everyday moments. Each letter offers encouragement and connection."
        schema={schema}
      />
      <SkipLink />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <Header />
        <main id="main-content">
          {/* Hero Section - Conversion Optimized */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/5 via-rose-400/5 to-pink-500/5"></div>
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Column - Copy */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    Rated 5 Stars by 1000+ Happy Customers
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                    Handwritten Letters That 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500"> Touch Hearts</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                    Transform moments into memories with personalized, handcrafted letters that speak directly to the soul. Perfect for any occasion.
                  </p>

                  {/* Value Props */}
                  <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start">
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="font-medium">100% Handwritten</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="font-medium">Same Day Shipping</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="font-medium">Satisfaction Guaranteed</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      to="/shop"
                      className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-rose-500 to-amber-500 rounded-full hover:from-rose-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
                    >
                      Shop Letters Now
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                      <Play className="mr-2 w-5 h-5" />
                      Watch Our Story
                    </button>
                  </div>

                  {/* Social Proof */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4">Trusted by thousands of customers worldwide</p>
                    <div className="flex items-center justify-center lg:justify-start space-x-6">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                          {[1,2,3,4,5].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-amber-400 border-2 border-white"></div>
                          ))}
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-700">2,500+ Letters Delivered</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Hero Image */}
                <div className="relative">
                  <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://images.pexels.com/photos/6956629/pexels-photo-6956629.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Beautiful handwritten letter with wax seal"
                      className="w-full h-auto rounded-3xl shadow-2xl"
                      loading="eager"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="flex text-yellow-400">
                          {[1,2,3,4,5].map((i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">5.0</p>
                          <p className="text-sm text-gray-500">1,200+ Reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-10 -left-6 bg-rose-100 rounded-full p-4 shadow-lg animate-bounce">
                    <Heart className="w-6 h-6 text-rose-500" />
                  </div>
                  <div className="absolute bottom-20 -left-8 bg-amber-100 rounded-full p-4 shadow-lg animate-pulse">
                    <Gift className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Indicators */}
          <section className="py-16 bg-white border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Secure Checkout</h3>
                  <p className="text-gray-600 text-sm">SSL encrypted & protected</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Truck className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Shipping</h3>
                  <p className="text-gray-600 text-sm">Same day processing</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Handcrafted</h3>
                  <p className="text-gray-600 text-sm">Made with love & care</p>
                </div>
                <div className="text-center">
                  <div className="bg-rose-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Delivery</h3>
                  <p className="text-gray-600 text-sm">2-3 business days</p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Products - Conversion Focus */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Most Popular Letters
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover our bestselling handwritten letters, each crafted to create lasting memories and meaningful connections.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Product 1 */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/6956627/pexels-photo-6956627.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Love Letters Collection"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Bestseller
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Love Letters Collection</h3>
                    <p className="text-gray-600 mb-4">Express your deepest feelings with our romantic handwritten letters.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">$29.99</span>
                      <Link
                        to="/shop"
                        className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-200"
                      >
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/6956629/pexels-photo-6956629.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Thank You Notes"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You Notes</h3>
                    <p className="text-gray-600 mb-4">Show appreciation with elegant, personalized thank you letters.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">$19.99</span>
                      <Link
                        to="/shop"
                        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
                      >
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/6956629/pexels-photo-6956629.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Sympathy Letters"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Heartfelt
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sympathy Letters</h3>
                    <p className="text-gray-600 mb-4">Offer comfort and support during difficult times with compassionate words.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">$24.99</span>
                      <Link
                        to="/shop"
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-200"
                      >
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                >
                  View All Collections
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  What Our Customers Say
                </h2>
                <p className="text-xl text-gray-600">
                  Real stories from people whose hearts were touched by our letters.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 relative">
                  <Quote className="w-8 h-8 text-rose-400 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "Abbey's letter brought tears to my eyes. The thoughtfulness and care in every word made my mother's birthday truly special. She still keeps it on her nightstand."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center text-white font-semibold">
                      S
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Sarah Johnson</p>
                      <p className="text-gray-600 text-sm">Verified Customer</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 relative">
                  <Quote className="w-8 h-8 text-amber-400 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "I ordered a sympathy letter for my friend who lost her father. The words were so perfect and comforting. It meant more than any store-bought card ever could."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center text-white font-semibold">
                      M
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Michael Chen</p>
                      <p className="text-gray-600 text-sm">Verified Customer</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 relative">
                  <Quote className="w-8 h-8 text-purple-400 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "The handwriting is beautiful and the message was exactly what I wanted to express but couldn't find the words for. Abbey has a true gift."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center text-white font-semibold">
                      E
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                      <p className="text-gray-600 text-sm">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Ready to Touch Someone's Heart?
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 mb-10">
                Start your journey of meaningful connection today. Every letter is a memory waiting to be cherished.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
                >
                  Shop Letters Now
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200"
                >
                  Learn Our Story
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
