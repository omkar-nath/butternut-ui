import React, { useState, useEffect } from "react";
import Colorbox from "./Colorbox";
import ColorPicker from "./ColorPicker";
import { generateColorPalette, invertColor } from "./utils/generateColorPalette";
import styled  from "@emotion/styled";
import { Colors } from "../types";

const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const GridContainer = styled.div`
  display: grid;
`;

const Theme = () => {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState<Colors>(() =>
    generateColorPalette(color)
  );

  const handleChange = (color: any) => {
    setColor(color);
  };

  useEffect(() => {
    const theme = generateColorPalette(color);
    setColors(theme);
  }, [color]);

  const { light, dark } = colors.palette;

  return (
    <>
      <h1>Generate theme colors</h1>
      <ColorPicker handleColorChange={handleChange} />
      <h1>Colors</h1>
      <GridContainer>
      <div>
          <h2> Light Theme</h2>
          <FlexContainer>
            <Colorbox
              colorKey="Primary"
              backgroundColor={light.primary}
              onColor={light.onPrimary as string}
            />
            <Colorbox
              colorKey="On Primary"
              backgroundColor={light.onPrimary}
              onColor={light.primary as string}
            />
            <Colorbox
              colorKey="Primary Container"
              backgroundColor={light.primaryContainer}
              onColor={light.onPrimaryContainer as string}
            />
            <Colorbox
              colorKey="On Primary Container"
              backgroundColor={light.onPrimaryContainer}
              onColor={light.primaryContainer as string}
            />
          </FlexContainer>
          <FlexContainer>
            <Colorbox
              colorKey="Secondary"
              backgroundColor={light.secondary}
              onColor={light.onSecondary as string}
            />
            <Colorbox
              colorKey="On Secondary"
              backgroundColor={light.onSecondary}
              onColor={light.OnSecondary as string}
            />
            <Colorbox
              colorKey="Secondary Container"
              backgroundColor={light.secondaryContainer}
              onColor={light.onSecondaryContainer as string}
            />
            <Colorbox
              colorKey="On Secondary Container"
              backgroundColor={light.onSecondaryContainer}
              onColor={light.secondaryContainer as string}
            />
          </FlexContainer>
          <FlexContainer>
            <Colorbox
              colorKey="Tertiary"
              backgroundColor={light.tertiary}
              onColor={light.onTertiary as string}
            />
            <Colorbox
              colorKey="On Tertiar"
              backgroundColor={light.onTertiary}
              onColor={light.tertiary as string}
            />
            <Colorbox
              colorKey="Tertiary Container"
              backgroundColor={light.tertiaryContainer}
              onColor={light.onTertiaryContainer as string}
            />
            <Colorbox
              colorKey="On Tertiar Container"
              backgroundColor={light.onTertiaryContainer}
              onColor={light.tertiaryContainer as string}
            />
          </FlexContainer>
          <FlexContainer>
            <Colorbox
              colorKey="Background"
              backgroundColor={light.background}
              onColor={light.onBackground as string}
            />
            <Colorbox
              colorKey="On Background"
              backgroundColor={light.onBackground}
              onColor={light.background as string}
            />
            <Colorbox
              colorKey="Surface"
              backgroundColor={light.surface}
              onColor={light.onSurface as string}
            />
            <Colorbox
              colorKey="On Surface"
              backgroundColor={light.onSurface}
              onColor={light.surface as string}
            />
          </FlexContainer>
          <FlexContainer>
            <Colorbox
              colorKey="Surface Variant"
              backgroundColor={light.surfaceVariant}
              onColor={light.onSurfaceVariant as string}
            />
            <Colorbox
              colorKey="On Surface Variant"
              backgroundColor={light.onSurfaceVariant}
              onColor={light.surfaceVariant as string}
            />
            <Colorbox
              colorKey="Outline"
              backgroundColor={light.outline}
              onColor={light.background as string}

            />
          </FlexContainer>
          <FlexContainer>
            <Colorbox
              colorKey="Error"
              backgroundColor={light.error}
              onColor={light.onError as string}
            />
            <Colorbox
              colorKey="On Error"
              backgroundColor={light.onError}
              onColor={light.error as string}
            />
            <Colorbox
              colorKey="Error Container"
              backgroundColor={light.errorContainer}
              onColor={light.onErrorContainer as string}
            />
            <Colorbox
              colorKey="On Error Container"
              backgroundColor={light.onErrorContainer}
              onColor={light.errorContainer as string}
            />
          </FlexContainer>
        </div>
        <div>
          <h3>Dark theme</h3>
          <FlexContainer>
            <Colorbox
              colorKey="Primary"
              backgroundColor={dark.primary}
              onColor={dark.onPrimary as string}
            />
            <Colorbox
              colorKey="On Primary"
              backgroundColor={dark.onPrimary}
              onColor={dark.primary as string}
            />
            <Colorbox
              colorKey="Primary Container"
              backgroundColor={dark.primaryContainer}
              onColor={dark.onPrimaryContainer as string}
            />
            <Colorbox
              colorKey="On Primary Container"
              backgroundColor={dark.onPrimaryContainer}
              onColor={dark.primaryContainer as string}
            />
          </FlexContainer>
          <FlexContainer>
            <Colorbox
              colorKey="Secondary"
              backgroundColor={dark.secondary}
              onColor={dark.onSecondary as string}
            />
            <Colorbox
              colorKey="On Secondary"
              backgroundColor={dark.onSecondary}
              onColor={dark.secondary as string}
            />
            <Colorbox
              colorKey="Secondary Container"
              backgroundColor={dark.secondaryContainer}
              onColor={dark.onSecondaryContainer as string}
            />
            <Colorbox
              colorKey="On Secondary Container"
              backgroundColor={dark.onSecondaryContainer}
              onColor={dark.secondaryContainer as string}
            />
          </FlexContainer>
          <FlexContainer>
            <Colorbox
              colorKey="Tertiary"
              backgroundColor={dark.tertiary}
              onColor={dark.onTertiary as string}
            />
            <Colorbox
              colorKey="On Tertiar"
              backgroundColor={dark.onTertiary}
              onColor={dark.tertiary as string}
            />
            <Colorbox
              colorKey="Tertiary Container"
              backgroundColor={dark.tertiaryContainer}
              onColor={dark.onTertiaryContainer as string}
            />
            <Colorbox
              colorKey="On Tertiar Container"
              backgroundColor={dark.onTertiaryContainer}
              onColor={dark.tertiaryContainer as string}
            />
          </FlexContainer>
          <FlexContainer>
            <Colorbox
              colorKey="Background"
              backgroundColor={dark.background}
              onColor={dark.onBackground as string}
            />
            <Colorbox
              colorKey="On Background"
              backgroundColor={dark.onBackground}
              onColor={light.background as string}
            />
            <Colorbox
              colorKey="Surface"
              backgroundColor={dark.surface}
              onColor={dark.onSurface as string}
            />
            <Colorbox
              colorKey="On Surface"
              backgroundColor={dark.onSurface}
              onColor={light.surface as string}
            />
          </FlexContainer>
          <FlexContainer>
            <Colorbox
              colorKey="Surface Variant"
              backgroundColor={dark.surfaceVariant}
              onColor={dark.onSurfaceVariant as string}
            />
            <Colorbox
              colorKey="On Surface Variant"
              backgroundColor={dark.onSurfaceVariant}
              onColor={dark.surfaceVariant as string}
            />
            <Colorbox
              colorKey="Outline"
              backgroundColor={dark.outline}
              onColor={dark.background as string}
            />
          </FlexContainer>
          <FlexContainer>
            <Colorbox
              colorKey="Error"
              backgroundColor={dark.error}
              onColor={dark.onError as string}
            />
            <Colorbox
              colorKey="On Error"
              backgroundColor={dark.onError}
              onColor={dark.error as string}
            />
            <Colorbox
              colorKey="Error Container"
              backgroundColor={dark.errorContainer}
              onColor={dark.onErrorContainer as string}
            />
            <Colorbox
              colorKey="On Error Container"
              backgroundColor={dark.onErrorContainer}
              onColor={dark.errorContainer as string}
            />
          </FlexContainer>
        </div>
      </GridContainer>

      <h1>Color Tones</h1>
      <div>
        <h3>Primary</h3>
        <FlexContainer>
          {Object.entries(colors["palette"]["colorTones"]["primary"]).map(
            ([key, value]) => {
              return (
                <Colorbox
                  backgroundColor={value}
                  colorKey={key}
                  onColor={invertColor(value as string)}
                />
              );
            }
          )}
        </FlexContainer>
        <h3>Secondary</h3>
        <FlexContainer>
          {Object.entries(colors["palette"]["colorTones"]["secondary"]).map(
            ([key, value]) => {
              return (
                <Colorbox
                  backgroundColor={value}
                  colorKey={key}
                  onColor={invertColor(value as string)}
                />
              );
            }
          )}
        </FlexContainer>
        <h3>Tertiary</h3>
        <FlexContainer>
          {Object.entries(colors["palette"]["colorTones"]["tertiary"]).map(
            ([key, value]) => {
              return (
                <Colorbox
                  backgroundColor={value}
                  colorKey={key}
                  onColor={invertColor(value as string)}
                />
              );
            }
          )}
        </FlexContainer>
        <h3>Neutral</h3>
        <FlexContainer>
          {Object.entries(colors["palette"]["colorTones"]["neutral"]).map(
            ([key, value]) => {
              return (
                <Colorbox
                  backgroundColor={value}
                  colorKey={key}
                  onColor={invertColor(value as string)}
                />
              );
            }
          )}
        </FlexContainer>
        <h3>Neutral Variant</h3>
        <FlexContainer>
          {Object.entries(colors["palette"]["colorTones"]["neutralVariant"]).map(
            ([key, value]) => {
              return (
                <Colorbox
                  backgroundColor={value}
                  colorKey={key}
                  onColor={invertColor(value as string)}
                />
              );
            }
          )}
        </FlexContainer>
        <h3>Error</h3>
        <FlexContainer>
          {Object.entries(colors["palette"]["colorTones"]["error"]).map(
            ([key, value]) => {
              return (
                <Colorbox
                  backgroundColor={value}
                  colorKey={key}
                  onColor={invertColor(value as string)}
                />
              );
            }
          )}
        </FlexContainer>
      </div>
    </>
  );
};

export default Theme;
