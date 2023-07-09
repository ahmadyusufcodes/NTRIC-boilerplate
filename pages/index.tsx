import Image from "next/image";
import styles from "./page.module.css";
import { Container, Card, Row, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <Container
      css={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        h1
        size={60}
        css={{
            color: "#3d3d3d",
        }}
        weight="bold"
      >
        Let&apos;s build something great!
      </Text>
      <Text
        h6
        size={20}
        css={{
          color: "#3d3d3d",
        }}
        weight="light"
      >
        This is a Next.js starter template with NextUI, TypeScript, Redux
        Toolkit, Iconoir and Cypress.
      </Text>
    </Container>
  );
}
