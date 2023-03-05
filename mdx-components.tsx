import { Children } from "react";

export function useMDXComponents(components: any) {
  return {
    h1: ({ children }: any) => (
      <h1
        style={{
          fontSize: "32px",
          color: "#4CAF50",
          // paddingTop: "10px",
          // paddingBottom: "10px",
          marginBottom: "22px",
          marginTop: "22px",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2
        style={{
          fontSize: "24px",
          color: "#32CD32",
          marginBottom: "22px",
          marginTop: "22px",
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3
        style={{
          fontSize: "22px",
          color: "#2AAA8A",
          marginBottom: "22px",
          marginTop: "22px",
        }}
      >
        {children}
      </h3>
    ),

    h4: ({ children }: any) => (
      <h4
        style={{
          fontSize: "22px",
          color: "blue",
          marginBottom: "22px",
          marginTop: "22px",
        }}
      >
        {children}
      </h4>
    ),
    p: ({ children }: any) => (
      <p
        style={{
          fontSize: "18px",
          color: "gray",
          lineHeight: "32px",
          marginBottom: "22px",
        }}
      >
        {children}
      </p>
    ),

    li: ({ children }: any) => (
      <li
        style={{
          color: "#808B96 ",
          cursor: "pointer",
          lineHeight: "32px",
        }}
      >
        {children}
      </li>
    ),

    ...components,
  };
}
