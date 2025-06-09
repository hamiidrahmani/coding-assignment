import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { AppBarTop, Toolbar } from "./AppBarTop";
import { FilmIcon } from "@/icons";
import { Icon } from "../icon";

const meta: Meta<typeof AppBarTop> = {
  title: "Components/AppBarTop",
  component: AppBarTop,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "an AppBar component for navigation and actions.",
      },
    },
  },
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof AppBarTop>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <AppBarTop {...args}>
      <Toolbar>
        <h1 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 500 }}>My Application</h1>
      </Toolbar>
    </AppBarTop>
  ),
};

export const WithActions: Story = {
  args: {},
  render: (args) => (
    <AppBarTop {...args}>
      <Toolbar>
        <h1 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 500, flex: 1 }}>
          <Icon color="default" size={24}>
            <FilmIcon />
          </Icon>
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Button variant="contained" size="small">
            Login
          </Button>
          <Button variant="contained" size="small">
            Sign Up
          </Button>
        </div>
      </Toolbar>
    </AppBarTop>
  ),
};
