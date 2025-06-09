import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { StarOffIcon } from "@/icons";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["contained", "text", "outlined"],
      description: "Button variant",
    },
    color: {
      control: { type: "select" },
      options: ["primary", "common.white"],
      description: "Button color",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
      description: "Button size",
    },
    children: {
      control: { type: "text" },
      description: "Button content",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disabled state",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Full width button",
    },
    loading: {
      control: { type: "boolean" },
      description: "Loading state",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "contained",
    color: "primary",
  },
};

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Contained Button",
    color: "primary",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text Button",
    color: "primary",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium Button",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
};

export const WithStartIcon: Story = {
  args: {
    children: "Button with Icon",
    startIcon: <StarOffIcon />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: "Button with Icon",
    endIcon: <StarOffIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "Button",
    startIcon: <StarOffIcon />,
    endIcon: <StarOffIcon />,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    loading: true,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
    color: "primary",
  },
};
