import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import "@fontsource/jetbrains-mono";

export default function BlogBc() {
  return (
    <Breadcrumb separator=">" className="text-white">
      <BreadcrumbItem>
        <BreadcrumbLink href="/blog" fontFamily="JetBrains Mono">blog</BreadcrumbLink>
      </BreadcrumbItem>
      {/* <BreadcrumbItem>
        <BreadcrumbLink href="/blog/archive" fontFamily="JetBrains Mono">archive</BreadcrumbLink>
      </BreadcrumbItem> */}
      <BreadcrumbItem>
        <BreadcrumbLink href="/blog/saved" fontFamily="JetBrains Mono">saved</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
