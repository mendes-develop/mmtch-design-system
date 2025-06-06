import type { Meta, StoryObj } from "@storybook/react";
// import {ComponentName} from './ComponentName';

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
    <div className="group/color-preview hover:bg-muted relative flex items-center gap-4 rounded-md transition-colors">
      <div
        className="h-12 w-12 rounded-md border"
        style={{ backgroundColor: color }}
      />
      <div className="flex-1">
        <p className="text-sm font-medium @max-3xl:text-xs">{label}</p>
        <p className="text-muted-foreground text-xs">{color}</p>
      </div>

      {/* <div className="absolute right-1 rounded-md opacity-0 transition-opacity group-hover/color-preview:opacity-100">
        <CopyButton textToCopy={color} />
      </div> */}
    </div>
  );
}
