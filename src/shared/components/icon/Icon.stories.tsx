import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilmIcon } from "@/icons";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A flexible Icon component wrapper for SVG icons with consistent styling and theming.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "number",
      description: "Size for both width and height (convenience prop)",
    },
    width: {
      control: "number",
      description: "Icon width in pixels",
    },
    height: {
      control: "number",
      description: "Icon height in pixels",
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary"],
      description: "Semantic color variant of the icon",
    },
    className: {
      control: "text",
      description: "Additional CSS class names",
    },
  },
  args: {
    size: 24,
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Icon {...args}>
      <FilmIcon />
    </Icon>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <Icon size={16} color="primary">
          <FilmIcon />
        </Icon>
        <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#6b7280" }}>16px</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon size={20} color="primary">
          <FilmIcon />
        </Icon>
        <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#6b7280" }}>20px</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon size={24} color="primary">
          <FilmIcon />
        </Icon>
        <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#6b7280" }}>24px (default)</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon size={32} color="primary">
          <FilmIcon />
        </Icon>
        <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#6b7280" }}>32px</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon size={48} color="primary">
          <FilmIcon />
        </Icon>
        <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#6b7280" }}>48px</p>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
      <div style={{ textAlign: "center" }}>
        <Icon color="default" size={32}>
          <FilmIcon />
        </Icon>
        <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#6b7280" }}>Default</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon color="primary" size={32}>
          <FilmIcon />
        </Icon>
        <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#6b7280" }}>Primary</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon color="secondary" size={32}>
          <FilmIcon />
        </Icon>
        <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#6b7280" }}>Secondary</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon color="tertiary" size={32}>
          <FilmIcon />
        </Icon>
        <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#6b7280" }}>Tertiary</p>
      </div>
    </div>
  ),
};
