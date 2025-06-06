import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  args: {
    children: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }} className="border border-gray-200 rounded-md">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
