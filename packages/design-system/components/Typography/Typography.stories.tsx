import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import {
  H1,
  H2,
  H3,
  H4,
  P,
  BlockQuote,
  Code,
  Lead,
  Large,
  Small,
  Muted,
} from "./Typography";

const meta = {
  title: "Typography",
  component: H1,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof H1>;

export default meta;

type StoryComponent = StoryObj<typeof meta>;

export const Headings: StoryComponent = {
  render: () => (
    <View style={{ gap: 16 }}>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
    </View>
  ),
};

export const Paragraph: StoryComponent = {
  render: () => (
    <P>
      This is a paragraph of text that demonstrates the default paragraph
      styling with proper spacing and typography.
    </P>
  ),
};

export const LeadText: StoryComponent = {
  render: () => (
    <Lead>
      This is a lead paragraph that stands out from regular text with larger
      size and muted color.
    </Lead>
  ),
};

export const LargeText: StoryComponent = {
  render: () => (
    <Large>This is large text that emphasizes important content.</Large>
  ),
};

export const SmallText: StoryComponent = {
  render: () => (
    <Small>This is small text for fine print or secondary information.</Small>
  ),
};

export const MutedText: StoryComponent = {
  render: () => (
    <Muted>This is muted text with reduced visual prominence.</Muted>
  ),
};

export const Quote: StoryComponent = {
  render: () => (
    <BlockQuote>
      "This is a blockquote that stands out from regular text with italic
      styling and a left border."
    </BlockQuote>
  ),
};

export const InlineCode: StoryComponent = {
  render: () => (
    <View style={{ gap: 8 }}>
      <P>
        You can use inline code like <Code>console.log()</Code> within text.
      </P>
      <P>
        Here's another example with <Code>npm install</Code> command.
      </P>
    </View>
  ),
};

export const AllTypography: StoryComponent = {
  render: () => (
    <View style={{ gap: 16 }}>
      <H1>Typography System</H1>
      <Lead>
        A comprehensive set of typography components for consistent text
        styling.
      </Lead>

      <H2>Headings</H2>
      <P>Use headings to create hierarchy in your content.</P>
      <H3>Subheading</H3>
      <H4>Minor heading</H4>

      <H2>Body Text</H2>
      <P>
        Regular paragraphs provide the foundation for readable content. They
        should be easy to scan and comfortable to read at length.
      </P>

      <BlockQuote>
        "Blockquotes are perfect for highlighting important quotes or
        testimonials."
      </BlockQuote>

      <H2>Specialty Text</H2>
      <Large>Large text for emphasis</Large>
      <Small>Small text for details</Small>
      <Muted>Muted text for secondary information</Muted>

      <P>
        Inline code like <Code>useState()</Code> can be embedded within
        paragraphs.
      </P>
    </View>
  ),
};
