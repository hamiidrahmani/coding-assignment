import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./Skeleton";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A simple Skeleton component, used to display placeholder content while loading.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "rectangular", "rounded", "circular"],
      description: "The variant of the skeleton",
    },
    width: {
      control: "text",
      description: "Width of the skeleton (string or number)",
    },
    height: {
      control: "text",
      description: "Height of the skeleton (string or number)",
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Text: Story = {
  args: {
    variant: "text",
    width: "200px",
  },
};

export const Rectangular: Story = {
  args: {
    variant: "rectangular",
    width: "200px",
    height: "100px",
  },
};

export const Rounded: Story = {
  args: {
    variant: "rounded",
    width: "200px",
    height: "100px",
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    width: "60px",
    height: "60px",
  },
};
