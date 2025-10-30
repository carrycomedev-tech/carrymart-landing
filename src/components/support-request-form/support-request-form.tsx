import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, Clock } from "lucide-react";

const SupportRequestForm = () => {
  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Still Need Help?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Submit a Support Request</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" placeholder="Your full name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="+233 XX XXX XXXX" required />
                </div>
                <div>
                  <Label htmlFor="orderNumber">Order Number</Label>
                  <Input id="orderNumber" placeholder="Optional" />
                </div>
              </div>

              <div>
                <Label htmlFor="category">Issue Category *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="order">Order Issue</SelectItem>
                    <SelectItem value="payment">Payment Problem</SelectItem>
                    <SelectItem value="account">Account Question</SelectItem>
                    <SelectItem value="courier">Courier Application</SelectItem>
                    <SelectItem value="technical">Technical Issue</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your issue in detail"
                  rows={4}
                  required
                />
              </div>

              <div>
                <Label htmlFor="attachment">Attachment</Label>
                <Input id="attachment" type="file" accept="image/*" />
                <p className="text-sm text-gray-500 mt-1">Upload screenshot if relevant</p>
              </div>

              <Button className="w-full">Send Request →</Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Expected Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We typically respond within 24 hours. Urgent issues may receive faster attention.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Alternative Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="font-medium">WhatsApp: +233 XXX XXX XXX</p>
                    <p className="text-sm text-gray-500">Fastest response</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="font-medium">carrycomesupport@gmail.com</p>
                    <p className="text-sm text-gray-500">Email support</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <div>
                    <p className="font-medium">Hours: Monday-Sunday</p>
                    <p className="text-sm text-gray-500">8 AM - 10 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportRequestForm;