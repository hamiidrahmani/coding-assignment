import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "common.white"],
    },
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "Badge",
  },
};

export const CommonWhite: Story = {
  args: {
    color: "common.white",
    children: "Badge",
  },
};
