import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "./Typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Typography component provides consistent text styling across the application using vanilla-extract themes.

**Features:**
- 10 different variants (h1-h6, subtitle1-2, body1-2)
- Configurable HTML element mapping
- Theme integration with color palette
- TypeScript support
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2"],
      description: "Typography variant that determines styling",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "body1" },
      },
    },
    component: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div"],
      description: "HTML element to render (overrides variant mapping)",
      table: {
        type: { summary: "React.ElementType" },
      },
    },
    children: {
      control: { type: "text" },
      description: "Content to display",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Typography (body1)",
  },
};

export const H1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1 - Main Page Title",
  },
};

export const H2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2 - Section Title",
  },
};

export const H3: Story = {
  args: {
    variant: "h3",
    children: "Heading 3 - Subsection Title",
  },
};

export const H4: Story = {
  args: {
    variant: "h4",
    children: "Heading 4 - Minor Heading",
  },
};

export const H5: Story = {
  args: {
    variant: "h5",
    children: "Heading 5 - Small Heading",
  },
};

export const H6: Story = {
  args: {
    variant: "h6",
    children: "Heading 6 - Smallest Heading",
  },
};

export const Subtitle1: Story = {
  args: {
    variant: "subtitle1",
    children: "Subtitle 1 - Primary subtitle text",
  },
};

export const Subtitle2: Story = {
  args: {
    variant: "subtitle2",
    children: "Subtitle 2 - Secondary subtitle text",
  },
};

export const Body1: Story = {
  args: {
    variant: "body1",
    children: "Body 1 - This is the main body text with comfortable line height for reading longer content.",
  },
};

export const Body2: Story = {
  args: {
    variant: "body2",
    children: "Body 2 - Smaller body text, good for captions, secondary information, or disclaimers.",
  },
};

export const SemanticH1: Story = {
  args: {
    variant: "h2",
    component: "h1",
    children: "Semantic H1 with H2 styling",
  },
  parameters: {
    docs: {
      description: {
        story: "Example of using semantic HTML (h1) while maintaining h2 styling for design consistency.",
      },
    },
  },
};

export const ParagraphWithSubtitle: Story = {
  args: {
    variant: "subtitle1",
    component: "p",
    children: "Paragraph element with subtitle styling",
  },
  parameters: {
    docs: {
      description: {
        story: "Example of using a paragraph element with subtitle styling.",
      },
    },
  },
};

export const AllVariants: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Typography variant="h1">H1 - Main Title (36px, bold)</Typography>
      <Typography variant="h2">H2 - Section Title (30px, semibold)</Typography>
      <Typography variant="h3">H3 - Subsection (24px, semibold)</Typography>
      <Typography variant="h4">H4 - Minor Heading (20px, semibold)</Typography>
      <Typography variant="h5">H5 - Small Heading (18px, medium)</Typography>
      <Typography variant="h6">H6 - Smallest Heading (16px, medium)</Typography>
      <Typography variant="subtitle1">Subtitle 1 - Primary subtitle (18px, medium)</Typography>
      <Typography variant="subtitle2">Subtitle 2 - Secondary subtitle (16px, medium)</Typography>
      <Typography variant="body1">
        Body 1 - Main body text with comfortable line height for reading (16px, normal)
      </Typography>
      <Typography variant="body2">Body 2 - Smaller text for captions and secondary info (14px, normal)</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Overview of all available typography variants with their specifications.",
      },
    },
  },
};

export const ColorVariations: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Typography color="primary" variant="h3">
        Primary text color
      </Typography>
      <div style={{ padding: 16, backgroundColor: "#000" }}>
        <Typography color="common.white" variant="h3">
          Secondary text color
        </Typography>
      </div>
      <Typography color="common.black" variant="h3">
        Subtitle with secondary color
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Typography components with color prop.",
      },
    },
  },
};
