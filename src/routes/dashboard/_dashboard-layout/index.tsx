import { createFileRoute } from "@tanstack/react-router"
import { NavigationMenu } from "../../../ui/navigation/navigationMenu"

export const Route = createFileRoute("/dashboard/_dashboard-layout/")({
  component: () => <NavigationMenu />,
  staticData: {
    pageName: "Dashboard",
  },
})
