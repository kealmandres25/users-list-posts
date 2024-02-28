import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { Platform, StatusBar, StyleSheet } from "react-native";

export default function Layout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      />
    </QueryClientProvider>
  );
}
