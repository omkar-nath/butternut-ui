import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import ThemeProvider from "../Theme/ThemeProvider/ThemeProvider";
import {theme} from './getDefaultTheme';

console.log(theme);

function ButtonWithTheme({theme,label}) {
    return (
        <ThemeProvider theme={theme}>
            <Button><p>Hello World!</p></Button>
        </ThemeProvider>
    );
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/Button",
    component: ButtonWithTheme,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonWithTheme> = (args) => <ButtonWithTheme {...args} />;

export const Description = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Description.args = {
    theme,
    label: "Hello world!",
};
