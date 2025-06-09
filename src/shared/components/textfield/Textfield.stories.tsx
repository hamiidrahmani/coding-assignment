import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textfield } from "./Textfield";

const meta = {
  title: "Components/Textfield",
  component: Textfield,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A comprehensive TextField component built with vanilla-extract that provides rich functionality for form inputs.

**Features:**
- Full width option
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: { type: "text" }, description: "Placeholder text" },
    disabled: { control: { type: "boolean" }, description: "Disabled state" },
    readOnly: { control: { type: "boolean" }, description: "Read-only state" },
    fullWidth: { control: { type: "boolean" }, description: "Full width" },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel"],
      description: "Input type",
    },
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Enter text..." },
};

export const Disabled: Story = {
  args: {
    placeholder: "This field is disabled",
    disabled: true,
    value: "Cannot edit this",
  },
};

export const ReadOnly: Story = {
  args: {
    placeholder: "This field is read only",
    readOnly: true,
    value: "Read only value",
  },
};

export const AllFeatures: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "500px",
      }}
    >
      <Textfield placeholder="Enter username" fullWidth />
      <Textfield type="email" placeholder="Enter email" fullWidth />
      <Textfield type="password" placeholder="Enter password" fullWidth />
      <Textfield type="tel" placeholder="Enter phone" disabled fullWidth />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comprehensive example showing all TextField features in a form context with fullWidth enabled.",
      },
    },
  },
};
