/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
