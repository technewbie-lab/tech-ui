import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Defines the visual style of the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Defines the size of the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Renders the component as a child (useful for custom components).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'number' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional custom classes to apply to the button.',
      table: {
        type: { summary: 'string' },
      },
    },
    // Layout Props
    mt: {
      control: { type: 'number' },
      description: 'Margin top.',
      table: {
        type: { summary: 'number | string' },
      },
    },
    mr: {
      control: { type: 'number' },
      description: 'Margin right.',
      table: {
        type: { summary: 'number | string' },
      },
    },
    mb: {
      control: { type: 'number' },
      description: 'Margin bottom.',
      table: {
        type: { summary: 'number | string' },
      },
    },
    ml: {
      control: { type: 'number' },
      description: 'Margin left.',
      table: {
        type: { summary: 'number | string' },
      },
    },
    mx: {
      control: { type: 'number' },
      description: 'Margin on the x-axis (left and right).',
      table: {
        type: { summary: 'number | string' },
      },
    },
    my: {
      control: { type: 'number' },
      description: 'Margin on the y-axis (top and bottom).',
      table: {
        type: { summary: 'number | string' },
      },
    },
    pt: {
      control: { type: 'number' },
      description: 'Padding top.',
      table: {
        type: { summary: 'number | string' },
      },
    },
    pr: {
      control: { type: 'number' },
      description: 'Padding right.',
      table: {
        type: { summary: 'number | string' },
      },
    },
    pb: {
      control: { type: 'number' },
      description: 'Padding bottom.',
      table: {
        type: { summary: 'number | string' },
      },
    },
    pl: {
      control: { type: 'number' },
      description: 'Padding left.',
      table: {
        type: { summary: 'number | string' },
      },
    },
    px: {
      control: { type: 'number' },
      description: 'Padding on the x-axis (left and right).',
      table: {
        type: { summary: 'number | string' },
      },
    },
    py: {
      control: { type: 'number' },
      description: 'Padding on the y-axis (top and bottom).',
      table: {
        type: { summary: 'number | string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Primary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'A primary button with default size and margin top of 4 and padding x of 6.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
    children: 'Secondary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'A secondary button with small size, margin bottom of 2 and padding x of 3.',
      },
    },
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'lg',
    children: 'Destructive Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'A destructive button with large size, margin top of 4 and padding x of 8.',
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Ghost Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'A ghost button with default size, margin x of 2 and padding x of 4.',
      },
    },
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Link Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'A link-styled button with default size, margin y of 3 and padding x of 5.',
      },
    },
  },
};

export const Responsive: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Responsive Button',
    sm: { mt: 2, px: 4 },
    md: { mt: 3, px: 5 },
    lg: { mt: 5, px: 8 },
  },
  parameters: {
    docs: {
      description: {
        story: 'A responsive primary button with different margins and padding at various breakpoints.',
      },
    },
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    variant: 'outline',
    size: 'default',
    children: <a href="#">Link as Button</a>,
  },
  parameters: {
    docs: {
      description: {
        story: 'A button rendered as a child component (e.g., anchor tag) with outline variant.',
      },
    },
  },
};
