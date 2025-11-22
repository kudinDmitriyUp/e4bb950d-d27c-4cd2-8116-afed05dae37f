"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import AboutMetric from '@/components/sections/about/AboutMetric';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Mail, Globe, Users, Award, ShoppingBag } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="radialGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Ralph Lauren"
          navItems={[
            { name: "Collections", id: "collections" },
            { name: "About", id: "about" },
            { name: "Stores", id: "stores" },
            { name: "Contact", id: "contact" },
            { name: "Terms", id: "https://www.example.com/terms" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763838439912-9ktpce8i.jpg"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Timeless Elegance in Every Stitch"
          description="Discover Ralph Lauren's iconic collections that define American luxury. From classic polos to sophisticated evening wear, experience the heritage of refined style."
          tag="Luxury Fashion"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763838441160-2tj35pnc.jpg",
              imageAlt: "Fashion runway model in luxury clothing"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763838441914-arnami7e.jpg",
              imageAlt: "Tailored premium men's suit collection"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763838442792-954w2ugd.jpg",
              imageAlt: "Designer women's luxury dress"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763838443475-33gviskw.jpg",
              imageAlt: "High-end leather luxury accessories"
            }
          ]}
          buttons={[
            { text: "Shop Now", href: "collections" },
            { text: "Explore Collections", href: "collections" }
          ]}
        />
      </div>

      <div id="featured-products" data-section="featured-products">
        <ProductCardTwo
          title="Featured Collection"
          description="Handpicked selections from our premium luxury collections"
          tag="Best Sellers"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Ralph Lauren",
              name: "Classic Polo Shirt",
              price: "$89.00",
              rating: 5,
              reviewCount: "2.3k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763838444473-rb7shkbc.jpg",
              imageAlt: "Premium men's polo shirt"
            },
            {
              id: "2",
              brand: "Ralph Lauren",
              name: "Cashmere Sweater",
              price: "$298.00",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763838445112-y4ptkcyn.jpg",
              imageAlt: "Luxury women's cashmere sweater"
            },
            {
              id: "3",
              brand: "Ralph Lauren",
              name: "Leather Oxford Shoes",
              price: "$395.00",
              rating: 5,
              reviewCount: "945",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763838445797-6qkgp9zq.jpg",
              imageAlt: "Premium formal leather shoes"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="A Legacy of American Style - Building Premium Fashion Since 1967"
          metrics={[
            { icon: Globe, label: "Global Presence", value: "82" },
            { icon: Users, label: "Years of Heritage", value: "57" },
            { icon: Award, label: "Design Awards", value: "150+" },
            { icon: ShoppingBag, label: "Collections", value: "12" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Loved by Discerning Customers"
          description="Experience the stories of those who appreciate timeless quality and refined style"
          tag="Customer Stories"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahmitchell",
              testimonial: "Ralph Lauren pieces are investment pieces that never go out of style. The quality is unmatched and every item feels luxurious.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763838446665-knglaang.jpg",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "James Richardson",
              handle: "@jamesrich",
              testimonial: "For decades, Ralph Lauren has been my choice for refined dressing. The attention to detail in every garment is extraordinary.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763838447381-m30up5z0.jpg",
              imageAlt: "James Richardson portrait"
            },
            {
              id: "3",
              name: "Emily Chen",
              handle: "@emilychen",
              testimonial: "The sophistication and elegance of Ralph Lauren collections set them apart. I always feel confident and polished wearing their designs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763838448246-wdm7na2v.jpg",
              imageAlt: "Emily Chen portrait"
            },
            {
              id: "4",
              name: "Marcus Williams",
              handle: "@marcusw",
              testimonial: "Classic, timeless, and always in style. Ralph Lauren represents everything I value in fashion - quality, heritage, and understated elegance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763838448756-uuwoxfqq.jpg",
              imageAlt: "Marcus Williams portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Discover Exclusive Collections"
          description="Subscribe to our newsletter for early access to new collections, exclusive offers, and style inspiration from Ralph Lauren."
          tagIcon={Mail}
          buttonText="Subscribe"
          inputPlaceholder="Enter your email"
          termsText="We respect your privacy. Unsubscribe at any time. By subscribing, you agree to our Privacy Policy and Terms of Service."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Ralph Lauren"
          copyrightText="© 2025 Ralph Lauren Corporation. All rights reserved."
          columns={[
            {
              title: "Collections",
              items: [
                { label: "Men", href: "collections" },
                { label: "Women", href: "collections" },
                { label: "Kids", href: "collections" },
                { label: "Accessories", href: "collections" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Stores", href: "stores" },
                { label: "Careers", href: "https://www.example.com/careers" },
                { label: "Press", href: "https://www.example.com/press" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQs", href: "https://www.example.com/faq" },
                { label: "Shipping Info", href: "https://www.example.com/shipping" },
                { label: "Returns", href: "https://www.example.com/returns" }
              ]
            }
          ]}
          onPrivacyClick={() => window.open('https://www.example.com/privacy', '_blank')}
        />
      </div>
    </ThemeProvider>
  );
}