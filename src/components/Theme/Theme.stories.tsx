import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Theme from './Theme';

export default {
    title: "Theme/Theme",
    component: Theme,
  } as ComponentMeta<typeof Theme>;

  const Template: ComponentStory<typeof Theme> = () => <Theme/>;
  export const ThemeComponent = Template.bind({});