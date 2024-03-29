import AnimatedCursor from "react-animated-cursor";

export function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color="218,197,167"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={7}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
      outerStyle={{
        mixBlendMode: "exclusion",
      }}
    />
  );
}
