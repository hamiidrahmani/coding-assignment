import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../button";
import { Typography } from "../typography";
import { Modal, type ModalProps } from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Modal component provides a dialog overlay for displaying content on top of the main application.

**Features:**
- Backdrop with click-to-close functionality
- Smooth enter/exit animations
- Responsive design
- Accessible close button
- Body scroll lock when open
- Portal-based rendering
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "Controls the visibility of the modal",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    title: {
      control: { type: "text" },
      description: "Optional title displayed at the top of the modal",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    onClose: {
      description: "Callback fired when the modal is closed",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWithState = (args: Omit<ModalProps, "open" | "onClose">) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Default: Story = {
  args: {
    title: "Modal Title",
    children: (
      <Typography variant="body1">
        This is the default modal content. Click outside or the close button to dismiss.
      </Typography>
    ),
  },
  render: (args) => <ModalWithState {...args} />,
};

export const WithoutTitle: Story = {
  args: {
    children: (
      <Typography variant="body1">
        This modal doesn't have a title. It's useful for simple content or custom headers.
      </Typography>
    ),
  },
  render: (args) => <ModalWithState {...args} />,
};

export const WithComplexContent: Story = {
  args: {
    title: "Complex Content",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Typography variant="body1">This modal contains more complex content with multiple elements.</Typography>
        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
          <Button variant="text">Cancel</Button>
          <Button variant="contained">Confirm</Button>
        </div>
      </div>
    ),
  },
  render: (args) => <ModalWithState {...args} />,
};
