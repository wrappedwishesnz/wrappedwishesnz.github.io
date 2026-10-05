import type { HTMLAttributes, ReactNode } from "react";
import styles from "./typography.module.scss";

type HeadingTag = "h1" | "h2" | "h3";
type TextTag = "p" | "span" | "div";

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingTag;
  children: ReactNode;
  variant?: "page" | "section" | "card";
};

type ParagraphProps = HTMLAttributes<HTMLElement> & {
  as?: TextTag;
  children: ReactNode;
  variant?: "lead" | "body" | "small";
};

function classes(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Title({
  as: Tag = "h2",
  children,
  className,
  variant = "section",
  ...props
}: TitleProps) {
  return (
    <Tag
      className={classes(styles.title, styles[`${variant}Title`], className)}
      {...props}>
      {children}
    </Tag>
  );
}

export function Paragraph({
  as: Tag = "p",
  children,
  className,
  variant = "body",
  ...props
}: ParagraphProps) {
  return (
    <Tag
      className={classes(styles.paragraph, styles[variant], className)}
      {...props}>
      {children}
    </Tag>
  );
}

export function Subheading({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={classes(styles.subheading, className)} {...props}>
      {children}
    </p>
  );
}

export function Eyebrow({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={classes(styles.eyebrow, className)} {...props}>
      {children}
    </span>
  );
}
