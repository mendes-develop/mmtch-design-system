import type { Meta, StoryObj } from "@storybook/react";
import { View, Text } from "react-native";

const meta = {
  title: "ColorPreviewItem",
  component: ColorPreviewItem,
} satisfies Meta<typeof ColorPreviewItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseComponentName: Story = {
  args: {
    color: "#FF5733",
    label: "Example Color",
  },
};

function ColorPreviewItem({ label, color }: { label: string; color: string }) {
  return (
    <View className="relative flex flex-row items-center gap-4 rounded-md p-2">
      <View
        className="h-12 w-12 rounded-md border"
        style={{ backgroundColor: color }}
      />
      <View className="flex-1">
        <Text className="text-sm font-medium">{label}</Text>
        <Text className="text-xs text-gray-500">{color}</Text>
      </View>
    </View>
  );
}
