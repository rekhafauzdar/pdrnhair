import { Component } from '@angular/core';

@Component({
  selector: 'app-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrl: './frequently-asked-questions.component.css'
})
export class FrequentlyAskedQuestionsComponent {
selectedCategory: string = 'Ordering'; // default active

  faqCategories = [
    { icon: 'fas fa-shopping-cart', title: 'Ordering', questions: 25 },
    { icon: 'fas fa-credit-card', title: 'Payments', questions: 11 },
    { icon: 'fas fa-truck', title: 'Shipping', questions: 16 },
    { icon: 'fas fa-store', title: 'Sell on Bellaluna', questions: 14 },
    { icon: 'fas fa-user', title: 'Account', questions: 10 },
    { icon: 'fas fa-info-circle', title: 'About Us', questions: 7 },
  ];

  // Category wise questions
orderingQuestions = [
  {
    q: 'How can I place an order on Loche Bio?',
    a: 'You can easily place an order from our official website by adding your preferred Korean medical and aesthetic products to the cart and completing the checkout process.'
  },
  {
    q: 'Do I need an account to place an order?',
    a: 'Yes, creating an account is mandatory for smooth order tracking, purchase history, and better customer service.'
  },
  {
    q: 'Can I use Cash on Delivery (COD) for my order?',
    a: 'Cash on Delivery is available only for orders shipped from our India warehouse. For international (Korea or other country) shipments, prepaid payment is required.'
  },
  {
    q: 'Why is Cash on Delivery not available for some products?',
    a: 'Products shipped directly from our Korea or international warehouse are cross-border medical supplies, and COD is not supported for such shipments.'
  },
  {
    q: 'Is Aadhaar card required for placing an order?',
    a: 'Yes, for cross-border (Korea warehouse) orders, Aadhaar card details are mandatory for customs clearance as per Indian import regulations.'
  },
  {
    q: 'Are all products on Loche Bio of Korean origin?',
    a: 'Yes, every product listed on Loche Bio is 100% authentic and sourced directly from trusted Korean medical and cosmetic brands.'
  },
  {
    q: 'Where are the products shipped from?',
    a: 'Orders are shipped either from our India warehouse or our Korea warehouse, depending on the product’s origin and availability.'
  },
  {
    q: 'How can I check which warehouse my order will be shipped from?',
    a: 'Each product page clearly mentions whether it will be shipped from our India warehouse or directly from Korea.'
  },
  {
    q: 'How long does delivery take?',
    a: 'Orders from our India warehouse are usually delivered within 3–5 business days. Cross-border (Korea or international) shipments may take 8–15 business days depending on customs clearance.'
  },
  {
    q: 'Can I track my order?',
    a: 'Yes, you can track your order in real-time from your Loche Bio account under the “My Orders” section.'
  },
  {
    q: 'Can I cancel my order?',
    a: 'Orders can be canceled before they are dispatched. Once shipped, cancellations are not possible.'
  },
  {
    q: 'Can I modify my order after it has been placed?',
    a: 'Once the order is processed, modifications or address changes are not allowed.'
  },
  {
    q: 'What if my order is delayed?',
    a: 'Sometimes, delivery may be delayed due to customs, courier issues, or high demand. You will be notified via email or SMS in such cases.'
  },
  {
    q: 'What should I do if I receive a damaged or wrong product?',
    a: 'Please contact our support team within 24 hours of delivery with images. We’ll arrange a replacement or refund as per our return policy.'
  },
  {
    q: 'Can I return or exchange my order?',
    a: 'Yes, returns or exchanges are accepted for eligible items under our return policy.'
  },
  {
    q: 'What is Loche Bio’s refund policy?',
    a: 'Refunds are processed to your original payment method after the returned item is verified at our warehouse.'
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes, Loche Bio ships to India and selected international destinations, depending on product category and regulations.'
  },
  {
    q: 'Can I order products from multiple Korean brands together?',
    a: 'Yes, you can add products from different brands to a single order seamlessly.'
  },
  {
    q: 'Will I get an invoice for my order?',
    a: 'Yes, every order comes with a detailed invoice which can also be downloaded from your account.'
  },
  {
    q: 'Why did my payment fail?',
    a: 'Payment issues may occur due to banking or network errors. Please try again or use an alternate payment method.'
  },
  {
    q: 'Can I reorder my previous purchase?',
    a: 'Yes, you can reorder directly from your order history by clicking on the “Reorder” button.'
  },
  {
    q: 'Are the prices inclusive of taxes and customs?',
    a: 'For India warehouse products, prices include all taxes. For Korea or international shipments, customs charges are included at checkout.'
  },
  {
    q: 'How do I know if a product is in stock?',
    a: 'Stock availability is shown on every product page and updated in real-time.'
  },
  {
    q: 'Can I contact Loche Bio for bulk or clinic orders?',
    a: 'Yes, you can reach out to our B2B team for bulk or clinic-based order inquiries.'
  },
  {
    q: 'Do you offer free samples or promotional gifts?',
    a: 'Free samples may be included with selected Korean medical brands, depending on availability and ongoing promotions.'
  }
];



paymentsQuestions = [
  {
    q: 'What payment methods does Loche Bio accept?',
    a: 'Loche Bio accepts all major credit and debit cards, UPI, net banking, and wallet payments. Cash on Delivery (COD) is available only for India warehouse orders.'
  },
  {
    q: 'Is Cash on Delivery (COD) available for all products?',
    a: 'No. COD is available only for items shipped from our India warehouse. For international (Korea warehouse) orders, prepaid payment is required.'
  },
  {
    q: 'Why is prepaid payment mandatory for Korea warehouse orders?',
    a: 'International orders from our Korea warehouse require advance payment for customs clearance and international processing.'
  },
  {
    q: 'Can I pay using international cards or PayPal?',
    a: 'Yes, Loche Bio accepts international credit/debit cards. PayPal support is available for select orders and may include additional processing charges.'
  },
  {
    q: 'Are there any extra charges for online payments?',
    a: 'Loche Bio does not charge any extra fees. However, your bank or payment gateway may apply minor transaction or currency conversion fees.'
  },
  {
    q: 'What currency does Loche Bio accept?',
    a: 'All payments are processed in Indian Rupees (INR). For international cards, currency conversion is handled automatically by your bank.'
  },
  {
    q: 'Is it safe to make online payments on Loche Bio?',
    a: 'Absolutely. Loche Bio uses secure SSL encryption and trusted payment gateways to ensure all transactions are 100% safe and protected.'
  },
  {
    q: 'Can I split my payment across multiple methods?',
    a: 'Currently, Loche Bio supports only one payment method per order to ensure accurate billing and tracking.'
  },
  {
    q: 'When is my payment confirmed after placing an order?',
    a: 'For prepaid orders, payment is confirmed instantly. COD orders are confirmed once they are processed for dispatch.'
  },
  {
    q: 'What if my payment fails but the amount is deducted?',
    a: 'If a payment fails but your account is charged, the amount will be automatically refunded by your bank within 3–5 business days. You can also reach out to Loche Bio support for help.'
  },
  {
    q: 'How are refunds processed for cancellations or returns?',
    a: 'Refunds for prepaid orders are credited back to your original payment method within 5–7 business days after product verification at our warehouse.'
  }
];


shippingQuestions = [
  { 
    q: 'Do I need an account to start shopping on Loche Bio?', 
    a: 'Yes, creating an account allows you to track your orders, manage your wishlist, and receive personalized offers from Loche Bio.' 
  },
  { 
    q: 'Are all products on Loche Bio authentic?', 
    a: 'Absolutely! All Loche Bio products are 100% genuine and sourced directly from leading Korean beauty and skincare brands.' 
  },
  { 
    q: 'Are all products made in Korea?', 
    a: 'Yes, all products available on Loche Bio are manufactured in Korea and meet high-quality K-beauty standards.' 
  },
  { 
    q: 'Can I shop from both India and Korea warehouses in one order?', 
    a: 'Yes, you can add items from both India and Korea warehouses to your cart, but they will be shipped separately with different delivery timelines.' 
  },
  { 
    q: 'How do I know whether a product ships from India or Korea?', 
    a: 'Each product page on Loche Bio clearly shows the warehouse location—India or Korea—so you can easily identify the shipping source before checkout.' 
  },
  { 
    q: 'Are the prices inclusive of taxes and duties?', 
    a: 'For India warehouse products, prices include GST. For Korea warehouse items, all applicable customs duties and import charges are calculated and shown at checkout.' 
  },
  { 
    q: 'Do you offer Cash on Delivery (COD)?', 
    a: 'COD is available only for orders shipped from our India warehouse. International orders from Korea require prepaid payment.' 
  },
  { 
    q: 'Can I use coupons or promo codes while shopping?', 
    a: 'Yes, valid promo codes and discount coupons can be applied at checkout to enjoy savings on your order.' 
  },
  { 
    q: 'How can I find the latest or trending Korean products on Loche Bio?', 
    a: 'You can explore the “New Arrivals” and “Bestsellers” sections on Loche Bio to discover trending and newly launched Korean beauty products.' 
  },
  { 
    q: 'Does Loche Bio sell limited edition or exclusive Korean products?', 
    a: 'Yes, Loche Bio regularly introduces exclusive and limited edition skincare and cosmetic collections directly from Korean brands.' 
  },
  { 
    q: 'Can I save products to purchase later?', 
    a: 'Yes, simply add your favorite items to your wishlist and purchase them later through your Loche Bio account dashboard.' 
  },
  { 
    q: 'Do you notify customers about restocks?', 
    a: 'Yes, you can enable the “Notify Me” alert on any out-of-stock product to get notified when it’s available again.' 
  },
  { 
    q: 'Does Loche Bio offer loyalty or reward points?', 
    a: 'Yes, Loche Bio offers reward points for every successful purchase. These points can be redeemed for discounts on future orders.' 
  },
  { 
    q: 'Can I compare products before buying?', 
    a: 'Yes, our product comparison feature helps you compare ingredients, pricing, and benefits across different Korean brands before making a purchase.' 
  },
  { 
    q: 'Does Loche Bio offer gift wrapping or gift sets?', 
    a: 'Yes, we provide premium gift wrapping and specially curated Korean skincare gift sets during festive seasons and special occasions.' 
  },
  { 
    q: 'Is it safe to shop on Loche Bio?', 
    a: 'Yes, Loche Bio ensures complete safety for all customers by using secure SSL encryption and trusted payment gateways for every transaction.' 
  }
];


sellOnBellalunaQuestions = [
  { 
    q: 'What does “Sell on Loche Bio” mean?', 
    a: 'Sell on Loche Bio allows verified medical and cosmetic product manufacturers, distributors, and authorized sellers to list and sell their Korean products globally through the Loche Bio platform.' 
  },
  { 
    q: 'Who can sell on Loche Bio?', 
    a: 'Loche Bio welcomes Korean and international companies dealing in medical-grade skincare, aesthetic, dermatology, and cosmeceutical products that meet our quality and compliance standards.' 
  },
  { 
    q: 'Is Loche Bio limited to the Indian market?', 
    a: 'No. Loche Bio operates in multiple countries, connecting Korean medical and aesthetic product brands with customers across India and other global markets.' 
  },
  { 
    q: 'How can I register as a seller on Loche Bio?', 
    a: 'You can apply through the “Sell on Loche Bio” section on our website by submitting your business details, certifications, and product portfolio for review and verification.' 
  },
  { 
    q: 'What documents are required for seller verification?', 
    a: 'Required documents include a valid business license, import/export certification (if applicable), product safety certificates, and brand authorization documents.' 
  },
  { 
    q: 'What kind of products can be listed on Loche Bio?', 
    a: 'Loche Bio accepts Korean and international medical and aesthetic products such as skincare injectables, derma solutions, cosmeceuticals, and professional-use beauty items that comply with our safety guidelines.' 
  },
  { 
    q: 'How long does the seller approval process take?', 
    a: 'Seller verification usually takes 3–5 working days after all required documents and product information have been successfully submitted.' 
  },
  { 
    q: 'Does Loche Bio charge a commission or listing fee?', 
    a: 'Yes, Loche Bio charges a small service commission on every sale to cover platform operations, marketing, and logistics support. Full details are provided during onboarding.' 
  },
  { 
    q: 'Can individual professionals or clinics sell on Loche Bio?', 
    a: 'Yes, licensed professionals or clinics dealing in Korean medical or cosmetic products can apply to sell, subject to verification and compliance approval.' 
  },
  { 
    q: 'How does Loche Bio ensure product authenticity?', 
    a: 'All sellers and brands undergo a strict verification process. Every product listed must have verifiable brand authorization and relevant safety certification to ensure authenticity.' 
  },
  { 
    q: 'Can I list my Korean brand directly on Loche Bio?', 
    a: 'Yes, Korean brands can directly partner with Loche Bio by completing brand registration and product compliance verification to reach global customers.' 
  },
  { 
    q: 'What are the benefits of selling through Loche Bio?', 
    a: 'Loche Bio provides global market access, marketing visibility, logistics support, and a trusted platform focused on Korean medical and aesthetic product distribution.' 
  },
  { 
    q: 'Who should I contact for selling or partnership inquiries?', 
    a: 'For partnership and selling inquiries, please contact the Loche Bio Seller Relations team via email or through the official contact form on our website.' 
  }
];


accountQuestions = [
  {
    q: 'How do I create an account on Loche Bio?',
    a: 'Click on the “Sign Up” button on the Loche Bio homepage, enter your name, email, phone number, and password, then verify your email to activate your account.'
  },
  {
    q: 'Do I need an account to purchase from Loche Bio?',
    a: 'Yes, creating an account allows you to securely place orders, track shipments, manage invoices, and receive updates on medical and aesthetic product launches.'
  },
  {
    q: 'How do I reset my password?',
    a: 'Go to the login page, click on “Forgot Password?”, enter your registered email address, and follow the instructions in the email to reset your password.'
  },
  {
    q: 'Can I change my registered email or phone number?',
    a: 'Yes, you can update your contact details anytime from the “My Account” section after logging in.'
  },
  {
    q: 'How can I view my order history?',
    a: 'Login to your Loche Bio account and go to “My Orders” to see your complete purchase history, including invoices and shipment tracking.'
  },
  {
    q: 'How can I manage my shipping addresses?',
    a: 'You can add, edit, or remove delivery addresses from the “Address Book” section under your account settings.'
  },
  {
    q: 'Can I delete my Loche Bio account?',
    a: 'Yes, you can request account deletion by contacting our customer support team. Once your account is deleted, all saved information and order history will be permanently removed.'
  },
  {
    q: 'Why am I not receiving verification or order confirmation emails?',
    a: 'Please check your spam or promotions folder. If you still don’t see our emails, ensure your registered email address is correct or contact our support team for assistance.'
  },
  {
    q: 'Can I use the same email or phone number for multiple accounts?',
    a: 'No, each Loche Bio account must be linked to a unique email address and phone number for security reasons.'
  },
  {
    q: 'How do I update my profile or professional details?',
    a: 'Go to “My Profile” in your dashboard and click “Edit Profile” to update your personal or professional information, such as clinic details, license, or contact info.'
  }
];


aboutQuestions = [
  {
    q: 'Who are we?',
    a: 'Loche Bio is a global medical and aesthetic brand specializing in advanced Korean healthcare, skincare, and clinical-use products distributed across multiple countries.'
  },
  {
    q: 'What does Loche Bio offer?',
    a: 'We offer a wide range of Korean medical and aesthetic solutions including skin boosters, derma fillers, mesotherapy, and professional-grade cosmetic products trusted by clinics and practitioners worldwide.'
  },
  {
    q: 'Are all Loche Bio products authentic?',
    a: 'Yes, all products available through Loche Bio are 100% authentic and sourced directly from certified Korean manufacturers and verified medical distributors.'
  },
  {
    q: 'Where is Loche Bio based?',
    a: 'Loche Bio operates globally with its core sourcing and R&D partnerships in Korea, and distribution networks in India and other international markets.'
  },
  {
    q: 'What makes Loche Bio different?',
    a: 'Loche Bio bridges Korean medical innovation with global accessibility—offering clinically tested, certified, and result-oriented products trusted by professionals.'
  },
  {
    q: 'Does Loche Bio collaborate with Korean manufacturers?',
    a: 'Yes, we work directly with reputed Korean medical and aesthetic manufacturers to ensure the highest standards of quality, safety, and effectiveness.'
  },
  {
    q: 'What is Loche Bio’s mission?',
    a: 'Our mission is to make advanced Korean medical and aesthetic technology accessible to healthcare professionals and distributors around the world through trust, transparency, and innovation.'
  }
];


  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getQuestionsFor(category: string) {
    switch (category) {
      case 'Ordering': return this.orderingQuestions;
      case 'Payments': return this.paymentsQuestions;
      case 'Shipping': return this.shippingQuestions;
      case 'Sell on Bellaluna': return this.sellOnBellalunaQuestions;
      case 'Account': return this.accountQuestions;
      case 'About Us': return this.aboutQuestions;
      default: return [];
    }
  }
}
