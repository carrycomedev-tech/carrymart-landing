import React from 'react';
import SupportRequestForm from '@/components/support-request-form/support-request-form';

const faqCategories = [
  {
    title: "Getting Started",
    questions: [
      {
        q: "How do I place an order?",
        a: "Download the CarryCome app or visit our website, browse available services (food, parcels, documents, groceries), add items to your cart, select your delivery location, and pay with mobile money. You'll receive real-time tracking updates."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept MTN Mobile Money, Vodafone Cash, and AirtelTigo Money. All payments are processed securely through our platform."
      },
      {
        q: "How long does delivery take?",
        a: "Average delivery time is 15-20 minutes within campus. Exact time depends on courier availability, your location, and current demand."
      },
      {
        q: "What areas do you deliver to?",
        a: "We deliver across University of Ghana campus including all residential halls, academic buildings, libraries, and designated outdoor locations."
      },
      {
        q: "Is there a minimum order amount?",
        a: "Yes, food orders have a 15 GHS minimum. Parcels, documents, and grocery orders have no minimum."
      }
    ]
  },
  {
    title: "Campus Pass Subscription",
    questions: [
      {
        q: "What is Campus Pass?",
        a: "Campus Pass is our subscription service offering unlimited food and document deliveries, 50% off parcels, priority service, and restaurant discounts for 25 GHS/month."
      },
      {
        q: "How do I subscribe to Campus Pass?",
        a: "Navigate to \"Campus Pass\" in the app menu, select your subscription plan, and complete payment with mobile money. Your benefits activate immediately."
      },
      {
        q: "Can I cancel my subscription?",
        a: "Yes, you can cancel anytime from your account settings. You'll retain benefits until the end of your current billing period."
      },
      {
        q: "Does Campus Pass save me money?",
        a: "Absolutely. Campus Pass pays for itself after just 5 deliveries. Average users save 75-125 GHS monthly."
      }
    ]
  },
  {
    title: "For Couriers",
    questions: [
      {
        q: "How do I sign up as a courier?",
        a: "Visit carrycome.gh/rider, complete the application form with your student ID, valid phone number, and bicycle details. We'll review your application within 48 hours and contact you for onboarding."
      },
      {
        q: "What do I need to become a courier?",
        a: "You need: (1) Valid student ID from University of Ghana, (2) A functioning bicycle, (3) Smartphone with data, (4) Availability for at least 12 hours/week. We provide all safety equipment and delivery bags."
      },
      {
        q: "How much can I earn as a courier?",
        a: "Couriers typically earn competitive hourly rates plus per-delivery bonuses and keep 100% of tips. Average earnings vary based on hours worked and delivery volume."
      },
      {
        q: "When do couriers get paid?",
        a: "Payments are processed regularly via mobile money transfer to your registered account."
      },
      {
        q: "Can I choose my own hours?",
        a: "Yes! You select shifts through the courier app 48 hours in advance. Work around your class schedule with complete flexibility."
      }
    ]
  },
  {
    title: "Orders & Delivery",
    questions: [
      {
        q: "Can I track my delivery?",
        a: "Yes, you'll see real-time GPS tracking of your courier once they accept your order. You'll receive notifications at each stage: order confirmed, courier assigned, picked up, and delivered."
      },
      {
        q: "What if my order is wrong or missing items?",
        a: "Contact support immediately through the app. We'll investigate and provide a refund or replacement based on the issue. Take photos if items are damaged or missing."
      },
      {
        q: "Can I schedule a delivery for later?",
        a: "Currently we offer on-demand delivery only. Scheduled delivery features are coming soon."
      },
      {
        q: "What if I'm not available when the courier arrives?",
        a: "You can provide specific delivery instructions (leave at door, call upon arrival, etc.) or communicate directly with your courier through the app messaging feature."
      },
      {
        q: "Do you deliver outside campus?",
        a: "Currently we focus exclusively on University of Ghana campus for fastest, most reliable service. Off-campus delivery may be added in the future."
      }
    ]
  },
  {
    title: "Safety & Trust",
    questions: [
      {
        q: "Are couriers background-checked?",
        a: "Yes, all couriers undergo verification including student ID confirmation and background screening before approval."
      },
      {
        q: "What if something goes wrong with my delivery?",
        a: "Contact support immediately through the app. Every delivery has GPS tracking, timestamp verification, and photo proof-of-delivery for accountability."
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely. We use industry-standard encryption and work with licensed payment processors. We never store your mobile money PIN or sensitive financial data."
      },
      {
        q: "How do I delete my account?",
        a: "Go to your account settings, select \"Delete Account,\" and follow the prompts. You'll receive a confirmation email. Note that this action is permanent and cannot be undone. All your data will be deleted within 30 days as per our privacy policy."
      }
    ]
  }
];

const SupportPage = () => {
  return (
    <div className="min-h-screen py-16 mt-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-[-0.03em] mb-4">
          How Can We Help?
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Find answers to common questions or submit a support request below.
        </p>
        <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
        <div className="text-left space-y-8">
          {faqCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <details key={faqIndex} className="border border-gray-200 rounded-lg p-4 transition-all duration-300 ease-in-out [&_summary]:open:pb-2">
                    <summary className="font-medium cursor-pointer hover:text-primary transition-colors duration-200 list-none">
                      <span className="flex items-center justify-between">
                        {faq.q}
                        <svg className="w-5 h-5 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="overflow-hidden transition-all duration-300 ease-in-out">
                      <p className="mt-2 text-gray-600">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
        <SupportRequestForm />
      </div>
    </div>
  );
};

export default SupportPage;