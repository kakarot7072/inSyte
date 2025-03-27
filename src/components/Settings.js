import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, CreditCard, HelpCircle } from "lucide-react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100 p-4">
      {/* Sidebar */}
      <div className="w-1/4 bg-white rounded-2xl shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <nav className="space-y-2">
          <Button
            variant={activeTab === "dashboard" ? "default" : "outline"}
            className="w-full flex items-center gap-2"
            onClick={() => setActiveTab("dashboard")}
          >
            <Settings size={18} /> Dashboard Preferences
          </Button>
          <Button
            variant={activeTab === "billing" ? "default" : "outline"}
            className="w-full flex items-center gap-2"
            onClick={() => setActiveTab("billing")}
          >
            <CreditCard size={18} /> Subscription & Billing
          </Button>
          <Button
            variant={activeTab === "support" ? "default" : "outline"}
            className="w-full flex items-center gap-2"
            onClick={() => setActiveTab("support")}
          >
            <HelpCircle size={18} /> Support & Help
          </Button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-6">
        {activeTab === "dashboard" && (
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Dashboard Preferences</h2>
              <p className="text-gray-600 mt-2">Customize your dashboard settings here.</p>
            </CardContent>
          </Card>
        )}

        {activeTab === "billing" && (
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Subscription & Billing</h2>
              <p className="text-gray-600 mt-2">Manage your subscription and payment details.</p>
            </CardContent>
          </Card>
        )}

        {activeTab === "support" && (
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Support & Help</h2>
              <p className="text-gray-600 mt-2">Get help and find answers to your questions.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
