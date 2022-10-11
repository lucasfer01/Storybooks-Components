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

  /**
   * Background color
   */
  backgroundColor?: string;
}

/**
 * UI Label
 */
export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
  backgroundColor = 'transparent'
}: MyLabelProps) => {
  if (allCaps) label = label.toUpperCase();

  return <span className={`label ${size} text-${color}`} style={{color: fontColor, backgroundColor}}>{label}</span>;
};

export default MyLabel; // Exportar por defecto para evitar algunas posibles complicaciones (aumenta la compatibilidad)