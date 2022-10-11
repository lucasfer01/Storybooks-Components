import React from "react";
import "./MyLabel.css";

export interface MyLabelProps {
  /**
   * Text to show in the label
   */
  label: string;

  /**
   * What size do you want for this label?
   */
  size: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitalize text?
   */
  allCaps?: boolean;

  /**
   * Background color
   */
  color?: "primary" | "secondary" | "tertiary";

  /**
   * Font color
   */
  fontColor?: string;
}

/**
 * UI Label
 */
export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor
}: MyLabelProps) => {
  if (allCaps) label = label.toUpperCase();

  return <span className={`label ${size} text-${color}`} style={{color: fontColor}}>{label}</span>;
};
