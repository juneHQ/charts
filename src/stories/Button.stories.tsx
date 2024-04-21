import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../lib/components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
};

export const WithProps: Story = {
  args: {
    children: "Click me!",
  },
};

export const Disabled: Story = {
  args: {
    children: "Click me!",
    disabled: true,
  },
};

export const Outline: Story = {
  args: {
    children: "Click me!",
    variant: "outline",
  },
};

export const Purple: Story = {
  args: {
    children: "Click me!",
    color: "purple",
  },
};

export const PurpleGhost: Story = {
  args: {
    children: "Click me!",
    color: "purple",
    variant: "ghost",
  },
};

export const ConflictingClassName: Story = {
  args: {
    children: "Click me!",
    color: "purple",
    className: "w-96",
  },
};
