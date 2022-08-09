import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Theme from './ColorTheme';

export default {
    title: "Theme/Colors",
    component: Theme,
  } as ComponentMeta<typeof Theme>;

  const Template: ComponentStory<typeof Theme> = () => <Theme/>;
  export const Colors = Template.bind({});