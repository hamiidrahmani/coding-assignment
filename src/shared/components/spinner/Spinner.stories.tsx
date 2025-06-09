import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner";
import { Paper } from "../paper";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "XLarge"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "common.white"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "medium",
    color: "primary",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    color: "primary",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    color: "primary",
  },
};

export const XLarge: Story = {
  args: {
    size: "XLarge",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    size: "medium",
    color: "secondary",
  },
};

export const White: Story = {
  args: {
    size: "medium",
    color: "common.white",
  },
  decorators: [
    (Story) => (
      <Paper
        style={{
          backgroundColor: "black",
          padding: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </Paper>
    ),
  ],
};
