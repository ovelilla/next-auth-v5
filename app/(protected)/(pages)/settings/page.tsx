"use client";
// Components
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { SettingsForm } from "./components/settings-form.component";

const SettingsPage = () => {
  return (
    <div className="flex justify-center">
      <Card className="max-w-[600px] w-full">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">⚙️ Settings</p>
        </CardHeader>
        <CardContent>
          <SettingsForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
