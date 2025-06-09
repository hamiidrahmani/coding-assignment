import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { Paper } from "./Paper";

const meta: Meta<typeof Paper> = {
  title: "Components/Paper",
  component: Paper,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
A versatile Paper component that provides a surface for content with different visual treatments.

**Features:**
- Multiple variants: outlined, elevation
- Customizable elevation levels (0-4)
- Theme integration with color palette
- Responsive padding (16px mobile, 32px desktop)
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["outlined", "elevation"],
      description: "Visual style variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "outlined" },
      },
    },
    elevation: {
      control: { type: "range", min: 0, max: 4, step: 1 },
      description: "Shadow elevation level (only applies to elevation variant)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    children: {
      control: { type: "text" },
      description: "Content to display inside the paper",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "This is an outlined paper component with a border.",
  },
};

export const Elevation: Story = {
  args: {
    variant: "elevation",
    elevation: 2,
    children: "This is an elevated paper component with shadow.",
  },
};

export const ElevationLevels: Story = {
  args: {
    variant: "elevation",
    elevation: 1,
    children: "Paper with elevation",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {[0, 1, 2, 3, 4].map((level) => (
        <Paper key={level} {...args} elevation={level} style={{ width: "200px", textAlign: "center" }}>
          Elevation {level}
        </Paper>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different elevation levels from 0 to 4.",
      },
    },
  },
};

export const WithContent: Story = {
  args: {
    variant: "elevation",
    elevation: 2,
  },
  render: (args) => (
    <Paper {...args}>
      <h3 style={{ margin: "0 0 16px 0" }}>Card Title</h3>
      <p style={{ margin: "0 0 16px 0", color: "#668099" }}>
        This is some content inside the paper component. It can contain any React elements.
      </p>
      <Button size="small">Action Button</Button>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Paper component containing rich content like headings, text, and buttons.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <Paper variant="outlined" style={{ width: "300px" }}>
        <h4 style={{ margin: "0 0 12px 0" }}>Outlined Paper</h4>
        <p style={{ margin: 0, color: "#668099" }}>Paper with a subtle border for definition.</p>
      </Paper>

      <Paper variant="elevation" elevation={2} style={{ width: "300px" }}>
        <h4 style={{ margin: "0 0 12px 0" }}>Elevated Paper</h4>
        <p style={{ margin: 0, color: "#668099" }}>Paper with shadow elevation for depth.</p>
      </Paper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of all three paper variants side by side.",
      },
    },
  },
};
