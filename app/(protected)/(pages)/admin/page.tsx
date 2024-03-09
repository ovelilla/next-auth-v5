"use client";
// Vendors
import { toast } from "sonner";
import { UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";
// Actions
import { adminAction } from "./actions/admin.actions";
// Components
import { Alert } from "@/components/alert/alert.component";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// Constants
import constants from "./constants/admin.constants";

const AdminPage = () => {
  const session = useSession();
  const role = session.data?.user?.role;

  const onServerActionClick = async () => {
    try {
      const data = await adminAction();
      if (data.error) {
        toast.error(data.error);
      }
      if (data.success) {
        toast.success(data.success);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onApiRouteClick = async () => {
    try {
      const response = await fetch("/api/admin");
      if (response.ok) {
        toast.success("Allowed API Route!");
      } else {
        toast.error("Forbidden API Route!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center">
      <Card className="max-w-[600px] w-full">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">🔑 Admin</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {role === UserRole.ADMIN && (
            <Alert {...constants.ALERT_SUCCESS_PROPS} />
          )}
          {role !== UserRole.ADMIN && (
            <Alert {...constants.ALERT_ERROR_PROPS} />
          )}

          <div className="flex flex-row items-center justify-between gap-2 rounded-lg border p-3 shadow-md">
            <p className="text-sm font-medium">Admin-only API Route</p>
            <Button onClick={onApiRouteClick}>Click to test</Button>
          </div>

          <div className="flex flex-row items-center justify-between gap-2 rounded-lg border p-3 shadow-md">
            <p className="text-sm font-medium">Admin-only Server Action</p>
            <Button onClick={onServerActionClick}>Click to test</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;
