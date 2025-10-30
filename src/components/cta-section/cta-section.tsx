import { Button } from "@/components/ui/button";

const CTASection = () => (
  <div className="py-12 px-6">
    <div className="text-center mb-8">
      <h2 className="text-5xl font-semibold tracking-[-0.03em]">
        Ready to Get Started?
      </h2>
      <p className="text-lg mt-4 text-gray-600">
        Join thousands of students already using CarryCome for faster, easier campus delivery.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-primary/10 p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">Order Your First Delivery</h3>
        <p className="mb-6 text-gray-700">
          Download the app or order through our website. First delivery fee waived for new users.
        </p>
        <Button>Start Ordering →</Button>
      </div>
      <div className="bg-primary/10 p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">Start Earning Today</h3>
        <p className="mb-6 text-gray-700">
          Apply now and start making money on your own schedule. Quick approval process.
        </p>
        <Button>Become a Rider →</Button>
      </div>
    </div>
  </div>
);

export default CTASection;